/* ============================================================
   Gimme, gedeelde logica (opslag, navigatie, saved, kaarten)
   ============================================================ */

const Gimme = (() => {

  /* ---------- Supabase: echte accounts, cross-device sync ---------- */
  const SUPABASE_URL = 'https://vjazfvugnhsmabrobclu.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_g4IRl7ybxeOvKcwbXYkiFQ_AJi9SHBN';
  const sb = (typeof window !== 'undefined' && window.supabase)
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
    : null;

  // Stuurt een magic link naar het opgegeven e-mailadres. Werkt voor nieuwe én
  // bestaande accounts (bestaat het adres al, dan is dit een login).
  async function signInWithEmail(email, meta) {
    if (!sb) return { error: { message: 'Supabase not loaded' } };
    const redirectTo = location.origin + location.pathname.replace(/[^/]*$/, '') + 'dashboard.html';
    return sb.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo, data: meta || {} },
    });
  }

  // Haalt de actieve Supabase-sessie op (na het klikken op een magic link, of op
  // een apparaat waar al eerder is ingelogd).
  async function getCloudSession() {
    if (!sb) return null;
    const { data: { session } } = await sb.auth.getSession();
    return session;
  }

  // Zet het Supabase-profiel van een ingelogde sessie in de lokale opslag, zodat
  // de rest van de site (die synchroon Gimme.getProfile() gebruikt) ongewijzigd werkt.
  async function pullFromCloud() {
    const session = await getCloudSession();
    if (!session) return false;

    let { data: row } = await sb.from('profiles').select('*').eq('id', session.user.id).maybeSingle();
    if (!row) {
      // Profielrij bestaat nog niet (trigger kan een fractie vertraagd zijn), even opnieuw proberen.
      await new Promise(r => setTimeout(r, 800));
      ({ data: row } = await sb.from('profiles').select('*').eq('id', session.user.id).maybeSingle());
    }
    if (!row) return false;

    // Focus/tracking komen uit de signup-metadata; als de profielrij ze nog niet heeft, bijwerken.
    const meta = session.user.user_metadata || {};
    if ((!row.focuses || !row.focuses.length) && meta.focuses && meta.focuses.length) {
      await sb.from('profiles').update({ focuses: meta.focuses, tracking: meta.tracking || [] }).eq('id', session.user.id);
      row.focuses = meta.focuses;
      row.tracking = meta.tracking || [];
    }

    setProfile({
      name: row.name || meta.name || '',
      email: row.email,
      focuses: row.focuses || [],
      tracking: row.tracking || [],
      createdAt: row.created_at,
    });
    return true;
  }

  // Uitloggen: zowel de Supabase-sessie als het lokale profiel.
  async function cloudSignOut() {
    if (sb) { try { await sb.auth.signOut(); } catch (e) { /* offline, negeren */ } }
  }

  // "Doorgaan met Google": stuurt de browser naar Google's inlogscherm, komt terug op
  // dashboard.html met een sessie (nieuw account of bestaand, net als de magic link).
  async function signInWithGoogle() {
    if (!sb) return { error: { message: 'Supabase not loaded' } };
    const redirectTo = location.origin + location.pathname.replace(/[^/]*$/, '') + 'dashboard.html';
    return sb.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo },
    });
  }

  /* ---------- Cloud-sync: saved items ----------
     Cloud is de bron van waarheid zodra je bent ingelogd. Bij het laden van de
     pagina halen we verse data op, bij elke wijziging schrijven we op de
     achtergrond terug (fire-and-forget, lokaal blijft direct werken). */
  async function pullSavedFromCloud() {
    const session = await getCloudSession();
    if (!session) return false;
    try {
      const { data: itemRows } = await sb.from('saved_items').select('*').eq('user_id', session.user.id);
      const items = {};
      (itemRows || []).forEach(r => { items[r.item_key] = []; });
      save(KEYS.saved, { folders: [], items });
      return true;
    } catch (e) { return false; /* offline, blijf op lokale data */ }
  }

  async function pushSavedItem(itemKey, added) {
    if (!sb) return;
    const session = await getCloudSession();
    if (!session) return;
    try {
      if (added) {
        const { data: existing } = await sb.from('saved_items').select('id')
          .eq('user_id', session.user.id).eq('item_key', itemKey).limit(1);
        if (!existing || !existing.length) {
          await sb.from('saved_items').insert({ user_id: session.user.id, item_key: itemKey, folder_id: null });
        }
      } else {
        await sb.from('saved_items').delete()
          .eq('user_id', session.user.id).eq('item_key', itemKey);
      }
    } catch (e) { /* offline, negeren, blijft lokaal staan */ }
  }

  /* ---------- Cloud-sync: shopping list ---------- */
  async function pullShoppingFromCloud() {
    const session = await getCloudSession();
    if (!session) return false;
    try {
      const [{ data: groupRows }, { data: checkedRows }] = await Promise.all([
        sb.from('shopping_groups').select('*').eq('user_id', session.user.id),
        sb.from('shopping_checked').select('*').eq('user_id', session.user.id),
      ]);
      const groups = (groupRows || []).map(g => ({ recipeId: g.recipe_id, servings: g.servings }));
      const checked = {};
      (checkedRows || []).forEach(r => { if (r.checked) checked[r.item_key] = true; });
      save(KEYS.shopping, { groups, checked });
      return true;
    } catch (e) { return false; }
  }

  async function pushShoppingGroupUpsert(recipeId, servings) {
    if (!sb) return;
    const session = await getCloudSession();
    if (!session) return;
    try {
      await sb.from('shopping_groups').upsert(
        { user_id: session.user.id, recipe_id: recipeId, servings },
        { onConflict: 'user_id,recipe_id' }
      );
    } catch (e) {}
  }

  async function pushShoppingGroupRemove(recipeId) {
    if (!sb) return;
    const session = await getCloudSession();
    if (!session) return;
    try {
      await sb.from('shopping_groups').delete().eq('user_id', session.user.id).eq('recipe_id', recipeId);
    } catch (e) {}
  }

  async function pushShoppingChecked(itemKey, checked) {
    if (!sb) return;
    const session = await getCloudSession();
    if (!session) return;
    try {
      if (checked) {
        await sb.from('shopping_checked').upsert(
          { user_id: session.user.id, item_key: itemKey, checked: true },
          { onConflict: 'user_id,item_key' }
        );
      } else {
        await sb.from('shopping_checked').delete().eq('user_id', session.user.id).eq('item_key', itemKey);
      }
    } catch (e) {}
  }

  async function pushShoppingClearChecked() {
    if (!sb) return;
    const session = await getCloudSession();
    if (!session) return;
    try { await sb.from('shopping_checked').delete().eq('user_id', session.user.id); } catch (e) {}
  }

  async function pushShoppingClearAll() {
    if (!sb) return;
    const session = await getCloudSession();
    if (!session) return;
    try {
      await Promise.all([
        sb.from('shopping_groups').delete().eq('user_id', session.user.id),
        sb.from('shopping_checked').delete().eq('user_id', session.user.id),
      ]);
    } catch (e) {}
  }

  /* ---------- Cloud-sync: cyclus-tracker ---------- */
  async function pullCycleFromCloud() {
    const session = await getCloudSession();
    if (!session) return false;
    try {
      const [{ data: periodRows }, { data: symptomRows }] = await Promise.all([
        sb.from('cycle_period_starts').select('*').eq('user_id', session.user.id),
        sb.from('cycle_symptoms').select('*').eq('user_id', session.user.id),
      ]);
      const periodStarts = (periodRows || []).map(r => r.start_date).sort();
      const symptoms = {};
      (symptomRows || []).forEach(r => { if (r.symptoms && r.symptoms.length) symptoms[r.log_date] = r.symptoms; });
      save(KEYS.cycle, { periodStarts, symptoms });
      return true;
    } catch (e) { return false; }
  }

  async function pushCyclePeriod(startDate, added) {
    if (!sb) return;
    const session = await getCloudSession();
    if (!session) return;
    try {
      if (added) {
        await sb.from('cycle_period_starts').upsert(
          { user_id: session.user.id, start_date: startDate },
          { onConflict: 'user_id,start_date' }
        );
      } else {
        await sb.from('cycle_period_starts').delete().eq('user_id', session.user.id).eq('start_date', startDate);
      }
    } catch (e) {}
  }

  async function pushCycleSymptoms(logDate, symptoms) {
    if (!sb) return;
    const session = await getCloudSession();
    if (!session) return;
    try {
      if (symptoms.length) {
        await sb.from('cycle_symptoms').upsert(
          { user_id: session.user.id, log_date: logDate, symptoms },
          { onConflict: 'user_id,log_date' }
        );
      } else {
        await sb.from('cycle_symptoms').delete().eq('user_id', session.user.id).eq('log_date', logDate);
      }
    } catch (e) {}
  }

  /* ---------- Opslag ---------- */
  const KEYS = {
    saved: 'gimme_saved',
    profile: 'gimme_profile',
    shopping: 'gimme_shopping_list',
    cycle: 'gimme_cycle',
    newsletter: 'gimme_newsletter',
  };

  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }

  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* privémodus */ }
  }

  /* ---------- Saved (recepten + artikelen, gedeeld tussen pagina's) ---------- */
  function getSaved() {
    const s = load(KEYS.saved, null);
    if (s) return s;
    // Eerste keer: nette startstate met twee voorbeeldfolders
    return {
      folders: [
        { id: 'weeknight', name: 'Weeknight Dinners' },
        { id: 'period', name: 'Period Week' },
      ],
      items: {}, // { 'recipe:6': ['weeknight'], 'article:cycle-and-hormones': ['period'] }
    };
  }

  function isSaved(key) {
    return Object.prototype.hasOwnProperty.call(getSaved().items, key);
  }

  function toggleSaved(key) {
    const s = getSaved();
    const has = Object.prototype.hasOwnProperty.call(s.items, key);
    if (has) delete s.items[key];
    else s.items[key] = [];
    save(KEYS.saved, s);
    pushSavedItem(key, !has);
    if (!has) trackEvent(key.startsWith('recipe:') ? 'recipe_saved' : 'article_saved', { item_id: key });
    return !has;
  }

  /* ---------- Profiel (signup) ---------- */
  function getProfile() { return load(KEYS.profile, null); }
  function setProfile(p) { save(KEYS.profile, p); }
  function isLoggedIn() { return !!getProfile(); }

  async function logout() {
    await cloudSignOut();
    localStorage.removeItem(KEYS.profile);
    location.href = 'index.html';
  }

  /* ---------- Auth-gate voor app-pagina's ---------- */
  function requireAuth() {
    if (!isLoggedIn()) { location.href = 'signup.html'; }
  }

  /* ---------- Analytics: GA4 conversion events ---------- */
  // Werkt alleen zodra de GA4_MEASUREMENT_ID placeholder in elke <head> is vervangen door een echte ID.
  function trackEvent(name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
  }

  /* ---------- SEO: per-pagina meta tags, canonical en JSON-LD ---------- */
  function setPageMeta({ title, description, image, canonical, jsonLd } = {}) {
    if (description) {
      let d = document.querySelector('meta[name="description"]');
      if (!d) { d = document.createElement('meta'); d.setAttribute('name', 'description'); document.head.appendChild(d); }
      d.setAttribute('content', description);

      let ogd = document.querySelector('meta[property="og:description"]');
      if (!ogd) { ogd = document.createElement('meta'); ogd.setAttribute('property', 'og:description'); document.head.appendChild(ogd); }
      ogd.setAttribute('content', description);
    }
    if (title) {
      let ogt = document.querySelector('meta[property="og:title"]');
      if (!ogt) { ogt = document.createElement('meta'); ogt.setAttribute('property', 'og:title'); document.head.appendChild(ogt); }
      ogt.setAttribute('content', title);
    }
    if (image) {
      let ogi = document.querySelector('meta[property="og:image"]');
      if (!ogi) { ogi = document.createElement('meta'); ogi.setAttribute('property', 'og:image'); document.head.appendChild(ogi); }
      ogi.setAttribute('content', image);

      let ogtype = document.querySelector('meta[property="og:type"]');
      if (!ogtype) { ogtype = document.createElement('meta'); ogtype.setAttribute('property', 'og:type'); document.head.appendChild(ogtype); }
      ogtype.setAttribute('content', 'article');
    }

    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) { canon = document.createElement('link'); canon.setAttribute('rel', 'canonical'); document.head.appendChild(canon); }
    canon.setAttribute('href', canonical || (location.origin + location.pathname + location.search));

    if (jsonLd) {
      let s = document.getElementById('ld-json');
      if (!s) { s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'ld-json'; document.head.appendChild(s); }
      s.textContent = JSON.stringify(jsonLd);
    }
  }

  // "3 min" / "1 hr 20 min" -> ISO 8601 duration (PT3M / PT1H20M), used in Recipe schema.
  function toISODuration(timeStr) {
    if (!timeStr) return undefined;
    const hrMatch = timeStr.match(/(\d+)\s*hr/);
    const minMatch = timeStr.match(/(\d+)\s*min/);
    const h = hrMatch ? Number(hrMatch[1]) : 0;
    const m = minMatch ? Number(minMatch[1]) : 0;
    if (!h && !m) return undefined;
    return `PT${h ? h + 'H' : ''}${m ? m + 'M' : ''}`;
  }

  /* ---------- Nav: account-menu (Sign Up, of avatar-dropdown als je bent ingelogd) ---------- */
  function initAuthNav() {
    const slot = document.getElementById('acctMenu');
    if (!slot) return;
    const profile = getProfile();

    if (!profile) {
      slot.innerHTML = `
        <a class="navlink" href="login.html">Log in</a>
        <a class="btn btn-sm" href="signup.html">Sign Up</a>`;
      return;
    }

    const initial = profile.name ? profile.name.trim()[0].toUpperCase() : 'G';
    slot.innerHTML = `
      <button type="button" class="avatar" id="acctToggle" aria-haspopup="true" aria-expanded="false" title="Your account">${initial}</button>
      <div class="acct-pop" id="acctPop" hidden>
        <a class="dd-opt" href="dashboard.html">Dashboard</a>
        <a class="dd-opt" href="saved.html">Saved</a>
        <a class="dd-opt" href="shopping-list.html">Shopping List</a>
        <a class="dd-opt" href="cycle-tracker.html">Cycle Tracker</a>
        <hr>
        <button type="button" class="dd-opt" id="acctLogout">Log out</button>
      </div>`;

    const toggle = slot.querySelector('#acctToggle');
    const pop = slot.querySelector('#acctPop');
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      pop.hidden = !pop.hidden;
      toggle.setAttribute('aria-expanded', String(!pop.hidden));
    });
    slot.querySelector('#acctLogout').addEventListener('click', () => logout());
    document.addEventListener('click', (e) => {
      if (!pop.hidden && !slot.contains(e.target)) {
        pop.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Toast ---------- */
  function toast(msg) {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('show'), 2400);
  }

  /* ---------- Recept-kaart HTML ---------- */
  function recipeById(id) { return RECIPES.find(r => r.id === Number(id)); }

  function focusLabel(recipe) { return FOCUS_LABELS[recipe.focuses[0]]; }
  function focusClass(recipe) { return recipe.focuses[0]; }

  function tagLabel(t) {
    return t.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  }

  function recipeCard(r, { showSave = true, showTags = true } = {}) {
    const key = 'recipe:' + r.id;
    const saved = isSaved(key);
    const tags = showTags
      ? `<div class="card-row" style="justify-content:flex-start;gap:8px;flex-wrap:wrap;padding-top:10px;border-top:1px solid oklch(0.92 0.015 60);margin-bottom:2px">
           ${r.tags.slice(0, 3).map(t => `<span style="font:600 11px var(--font-head);opacity:.55">${tagLabel(t)}</span>`).join('')}
         </div>` : '';
    return `
      <article class="card hover" style="position:relative">
        <div style="position:relative">
          <a href="recipe.html?id=${r.id}" aria-label="${r.title}">
            <img class="card-img" src="${r.img}" alt="${r.title}" loading="lazy">
          </a>
          ${showSave ? `<button class="save-btn ${saved ? 'saved' : ''}" data-save-key="${key}" aria-label="Save ${r.title}" aria-pressed="${saved}">${HEART_SVG}</button>` : ''}
        </div>
        <div class="card-body">
          <a href="recipe.html?id=${r.id}" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;flex:1">
            <div class="card-row">
              <span class="pill tag ${focusClass(r)}">${focusLabel(r)}</span>
              <span style="font:600 12px var(--font-head);opacity:.5">${r.time}</span>
            </div>
            <div class="card-title">${r.title}</div>
            <p class="card-excerpt">${r.excerpt}</p>
          </a>
          ${tags}
        </div>
      </article>`;
  }

  /* ---------- Save-knop ---------- */
  const HEART_SVG = '<svg class="save-shape" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M12 21s-6.7-4.35-9.3-8.1C.4 9.7 1.2 5.9 4.4 4.3 6.9 3 9.8 3.8 12 6.4 14.2 3.8 17.1 3 19.6 4.3c3.2 1.6 4 5.4 1.7 8.6C18.7 16.65 12 21 12 21z"/></svg>';

  function updateSaveBtn(btn, key) {
    const saved = isSaved(key);
    btn.classList.toggle('saved', saved);
    btn.setAttribute('aria-pressed', saved);
  }

  function bindSaveButtons(root = document) {
    root.querySelectorAll('.save-btn[data-save-key]').forEach(btn => {
      if (btn._bound) return;
      btn._bound = true;
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const key = btn.dataset.saveKey;
        const added = toggleSaved(key);
        updateSaveBtn(btn, key);
        toast(added ? 'Saved' : 'Removed from saved');
      });
    });
  }

  /* ---------- Mobiele navigatie ---------- */
  function initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  /* ---------- Newsletter ---------- */
  function initNewsletter() {
    document.querySelectorAll('[data-newsletter]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const email = (input.value || '').trim();
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
          toast('Please enter a valid email address');
          return;
        }
        const list = load(KEYS.newsletter, []);
        if (!list.includes(email)) list.push(email);
        save(KEYS.newsletter, list);
        trackEvent('newsletter_signup');
        input.value = '';
        toast('You\'re on the list, see you next week!');
      });
    });
  }

  /* ---------- Avatar-initialen uit profiel ---------- */
  function initAvatars() {
    const p = getProfile();
    const initial = p && p.name ? p.name.trim()[0].toUpperCase() : 'G';
    document.querySelectorAll('.avatar').forEach(a => { a.textContent = initial; });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initNewsletter();
    initAvatars();
    bindSaveButtons();
    initAuthNav();
  });

  return {
    KEYS, load, save, toast,
    getSaved, isSaved, toggleSaved,
    getProfile, setProfile, isLoggedIn, logout, requireAuth,
    recipeById, recipeCard, focusLabel, focusClass, tagLabel, bindSaveButtons,
    setPageMeta, toISODuration, trackEvent,
    signInWithEmail, getCloudSession, pullFromCloud, cloudSignOut, signInWithGoogle,
    pullSavedFromCloud, pullShoppingFromCloud, pullCycleFromCloud,
    pushShoppingGroupUpsert, pushShoppingGroupRemove, pushShoppingChecked,
    pushShoppingClearChecked, pushShoppingClearAll, pushCyclePeriod, pushCycleSymptoms,
  };
})();
