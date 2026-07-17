# gimme — Feel good. Eat like it.

Een statische website met recepten en eerlijke educatie over gut health, hormoonbalans en
eiwitrijke weeks — gebouwd met gewone HTML, CSS en JavaScript. **Geen build-stap, geen
dependencies, geen server nodig.** Alles draait lokaal in de browser.

## Pagina's

| Pagina | Bestand | Wat het doet |
|---|---|---|
| Home | `index.html` | Hero, drie pijlers, interactief weekmenu, journal-preview, nieuwsbrief |
| Recepten | `recipes.html` | Alle 100 recepten met filters (focus, dieet, vlees, maaltijd) en opslaan in folders |
| Receptdetail | `recipe.html?id=…` | Ingrediënten met portieschaler + "Add to shopping list" |
| Gut Health | `gut-health.html` | Pijlerpagina met recepten en artikelen |
| Hormone Balance | `hormone-balance.html` | idem |
| High Protein | `high-protein.html` | idem |
| Journal | `journal.html` | Artikeloverzicht met categoriefilters |
| Artikel | `article.html?slug=…` | 19 volledig geschreven artikelen |
| About | `about.html` | Verhaal, waarden, team |
| Sign Up | `signup.html` | 3-staps onboarding → lokaal profiel |
| Dashboard | `dashboard.html` | Cyclus-samenvatting, tellers, quick actions, persoonlijke picks |
| Cycle Tracker | `cycle-tracker.html` | Echte kalender: periode-start loggen, symptomen per dag, fase + recepten |
| Saved | `saved.html` | Opgeslagen recepten/artikelen per folder |
| Shopping List | `shopping-list.html` | Ingrediënten automatisch opgeteld over recepten, afvinken |

## Hoe data werkt

- Alle content staat in `assets/js/data.js` (recepten, artikelen, weekmenu).
- Gebruikersdata (profiel, saved, boodschappenlijst, cyclus, nieuwsbrief) staat in
  `localStorage` van de browser — er is dus **geen backend**. Voor een echte
  account- of nieuwsbriefkoppeling kun je later een dienst als Formspree,
  Buttondown of Supabase aansluiten.

## Lokaal bekijken

Open `index.html` direct in je browser, of start een servertje:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Uploaden naar GitHub

```bash
cd gimme
git init
git add .
git commit -m "Eerste versie van de gimme website"
git branch -M main
git remote add origin https://github.com/JOUW-GEBRUIKERSNAAM/gimme.git
git push -u origin main
```

(Maak de lege repository `gimme` eerst aan op github.com/new — zonder README,
die heb je hier al.)

## Live zetten met GitHub Pages (gratis hosting)

1. Ga op GitHub naar je repo → **Settings → Pages**
2. Bij **Source**: kies **Deploy from a branch**
3. Kies branch **main** en map **/ (root)** → **Save**
4. Na ±1 minuut staat de site live op `https://JOUW-GEBRUIKERSNAAM.github.io/gimme/`
5. Verwerk die URL daarna in `robots.txt` en `sitemap.xml` (staat nu als `USERNAME.github.io/gimme`)

## Nog aan te vullen (bewust uitgesteld)

- **Eigen teamfoto's** — alle beelden zijn AI-gegenereerd (zie `CREDITS.md`); de
  gegenereerde portretten van Samy en Renske kun je vervangen door echte foto's
- **Echte nieuwsbrief/backend** — formulieren werken lokaal (localStorage)
- **Meer recepten/artikelen** — voeg ze toe in `assets/js/data.js`
