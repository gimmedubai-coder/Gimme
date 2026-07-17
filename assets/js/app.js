/* ============================================================
   Gimme, gedeelde logica (opslag, navigatie, saved, kaarten)
   ============================================================ */

const Gimme = (() => {

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
    const s = getSaved();
    return Array.isArray(s.items[key]) && s.items[key].length > 0;
  }

  function foldersFor(key) {
    return getSaved().items[key] || [];
  }

  function toggleSaved(key, folderId) {
    const s = getSaved();
    const current = s.items[key] || [];
    const has = current.includes(folderId);
    s.items[key] = has ? current.filter(f => f !== folderId) : [...current, folderId];
    if (s.items[key].length === 0) delete s.items[key];
    save(KEYS.saved, s);
    if (!has) trackEvent(key.startsWith('recipe:') ? 'recipe_saved' : 'article_saved', { item_id: key });
    return !has;
  }

  function createFolder(name) {
    const s = getSaved();
    const id = 'f' + Date.now();
    s.folders.push({ id, name });
    save(KEYS.saved, s);
    return id;
  }

  /* ---------- Profiel (signup) ---------- */
  function getProfile() { return load(KEYS.profile, null); }
  function setProfile(p) { save(KEYS.profile, p); }
  function isLoggedIn() { return !!getProfile(); }

  function logout() {
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
      slot.innerHTML = `<a class="btn btn-sm" href="signup.html">Sign Up</a>`;
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
          ${showSave ? `<button class="save-btn ${saved ? 'saved' : ''}" data-save-key="${key}" aria-label="Save ${r.title}" aria-pressed="${saved}"><span class="save-shape"></span></button>` : ''}
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
          <div class="save-slot" data-save-slot="${key}"></div>
        </div>
      </article>`;
  }

  /* ---------- Save-knop + folder-popup ---------- */
  function closeSavePops() {
    document.querySelectorAll('.save-pop').forEach(p => p.remove());
  }

  function openSavePop(btn) {
    const key = btn.dataset.saveKey;
    const slot = document.querySelector(`[data-save-slot="${CSS.escape(key)}"]`);
    if (!slot) return;
    closeSavePops();
    const s = getSaved();
    const inFolders = s.items[key] || [];
    const pop = document.createElement('div');
    pop.className = 'save-pop';
    pop.innerHTML = `
      ${s.folders.map(f => `
        <button class="dd-opt" data-folder="${f.id}">
          <span class="dd-check ${inFolders.includes(f.id) ? 'on' : ''}"></span>${f.name}
        </button>`).join('')}
      <div class="save-new">
        <input type="text" placeholder="New folder" aria-label="New folder name">
        <button type="button" data-create>Add</button>
      </div>`;
    slot.appendChild(pop);

    pop.querySelectorAll('[data-folder]').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const added = toggleSaved(key, opt.dataset.folder);
        opt.querySelector('.dd-check').classList.toggle('on', added);
        updateSaveBtn(btn, key);
      });
    });
    const input = pop.querySelector('input');
    pop.querySelector('[data-create]').addEventListener('click', (e) => {
      e.stopPropagation();
      const name = input.value.trim();
      if (!name) return;
      const id = createFolder(name);
      toggleSaved(key, id);
      updateSaveBtn(btn, key);
      closeSavePops();
      toast(`Saved to "${name}"`);
    });
    pop.addEventListener('click', e => e.stopPropagation());
  }

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
        if (btn.parentElement.parentElement.querySelector('.save-pop')) { closeSavePops(); return; }
        openSavePop(btn);
      });
    });
  }

  document.addEventListener('click', closeSavePops);

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
    getSaved, isSaved, foldersFor, toggleSaved, createFolder,
    getProfile, setProfile, isLoggedIn, logout, requireAuth,
    recipeById, recipeCard, focusLabel, focusClass, tagLabel, bindSaveButtons,
    setPageMeta, toISODuration, trackEvent,
  };
})();
