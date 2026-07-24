# Logic of Universe — Improvement Plan (Phase 4) — CODING CLAUDE

## Context
The user tested the live site and found 9 problems/improvements, most centred on the **Solar System explorer**, the **content-page images**, the **quiz**, the **search box**, and the **settings/theme**. The single biggest defect: after "Start exploring", **most topic images never load** — the page shows "No images available for this topic right now."

**Root cause of the image failure (verified against the live NASA API):** `js/modules/nasa.js` calls `https://images-api.nasa.gov/search`, which effectively **ANDs every word** in the query. The content data files use long, over-specific queries (7–9 words), so **22 of 27 return zero results**. Shortened 2–3-word queries return results reliably (tested). This is a data problem, not an API-key problem (the image API needs no key; the key only powers APOD).

**Role split (per project CLAUDE.md):** This plan covers **coding/scripting only** (Coding Claude's lane). Pure-CSS fixes are captured as a **Design Handoff spec** for Design Claude — Coding Claude does not touch `css/style.css`.

---

## PART A — Coding work (Coding Claude)

### A1. Fix broken topic images  (issue #4)  ⭐ highest priority
**Files:** `js/data/stars-content.js`, `stellar-content.js`, `blackholes-content.js`, `explosions-content.js`, `js/modules/nasa.js`

1. Replace each over-long `nasaSearchQuery` with a short, verified query. Verified working replacements (each returns ≥1 NASA image):

   | File / topic | Old (0 results) | New (works) |
   |---|---|---|
   | blackholes: M87 | `M87 black hole event horizon telescope shadow first image` | `M87 black hole` |
   | blackholes: Cygnus X-1 | `Cygnus X-1 X-ray binary stellar black hole accretion disk` | `Cygnus X-1` |
   | blackholes: Sgr A* | `Sagittarius A* galactic center black hole event horizon telescope 2022` | `galactic center black hole` |
   | blackholes: IMBH | `intermediate mass black hole globular cluster` | `globular cluster` |
   | blackholes: primordial | `primordial black hole early universe dark matter` | `black hole` |
   | blackholes: event horizon | `event horizon black hole spacetime curvature simulation` | `black hole simulation` |
   | blackholes: LIGO | `LIGO gravitational wave detection GW150914 black hole merger` | `gravitational wave` |
   | stars: formation | `pillars of creation eagle nebula james webb star formation` | `pillars of creation` |
   | stars: classification | `star classification types blue giant red dwarf` | `star types` |
   | stars: lifecycle | `stellar evolution red giant sun life cycle` | `red giant` |
   | stars: red giant | `red giant star aging stellar evolution` | `red giant` |
   | stars: planetary nebula | `ring nebula NGC 6720 james webb planetary nebula` | `planetary nebula` |
   | stars: fusion | `nuclear fusion sun core energy proton` | `nuclear fusion sun` |
   | explosions: Crab | `Crab Nebula supernova remnant SN 1054 Hubble` | `Crab Nebula` |
   | explosions: SN 1987A | `SN 1987A supernova remnant james webb neutron star` | `SN 1987A` |
   | explosions: Cas A | `Cassiopeia A supernova remnant Chandra X-ray multiwavelength` | `Cassiopeia A supernova remnant` |
   | explosions: kilonova | `GW170817 kilonova AT2017gfo neutron star merger Hubble Space Telescope` | `neutron star merger` |
   | explosions: hypernova | `hypernova collapsar gamma ray burst long GRB` | `gamma ray burst` |
   | explosions: GRB | `gamma ray burst GRB Fermi Swift afterglow optical` | `gamma ray burst` |
   | stellar: quasar 3C273 | `3C 273 quasar hubble active galactic nucleus jet` | `quasar 3C 273` |
   | stellar: blazar | `blazar relativistic jet active galaxy gamma ray` | `blazar` |
   | stellar: kilonova | `GW170817 kilonova AT2017gfo neutron star merger Hubble` | `neutron star merger` |

   (The 5 already-working queries — Cas A x2, Crab pulsar, magnetar, and the star SDO one — get lightly trimmed only if needed; leave working ones alone.)

2. **Defensive fallback in `nasa.js` `searchNasaImages`:** if a successful response returns an **empty** items array, retry once with a trimmed query (first 3 words). Cheap insurance so future long queries still degrade gracefully. Cache the final result under the original key.

### A2. Fix the blurry quiz  (issue #5)
**File:** `js/modules/quiz.js` (JS/DOM structure bug — no CSS change needed)

Root cause: `initQuiz()` injects `<div class="quiz-panel__backdrop">` **inside** `#quiz-panel`, as a later sibling of `.quiz-canvas`. The backdrop is `position:fixed; inset:0; z-index:399; backdrop-filter:blur(5px)` — a higher z-index than the content — so it paints a blurred, semi-opaque layer **over the questions**.

Fix (mirror the settings/comparison pattern where the backdrop is a body-level sibling):
- Remove the backdrop `<div>` from `panel.innerHTML`.
- Create it as a **separate element appended to `document.body`** (behind the panel: `.quiz-panel` is z-index 400, backdrop 399).
- Keep a module ref; toggle `backdrop.hidden = false` in `openQuiz()` and `backdrop.hidden = true` in `closeQuiz()` (CSS already drives opacity via `.quiz-panel__backdrop:not([hidden])`).

### A3. Remove the duplicate difficulty control in Solar System only  (issue #3)
**Files:** `js/main.js`, `pages/solar-system.html`

- In `main.js`, the `page === 'solar-system'` branch: **stop calling `initDifficultyToggle(...)`**. Keep `initSolarExplorer(...)`.
- In `solar-system.html`, **remove the `.difficulty-bar` block** (lines ~49–52) so no empty "Show level:" bar remains.
- Ensure the per-planet selector still has an initial level: `solar-explorer.js` already reads `document.body.dataset.level || sessionStorage || 'all'`. Add one line in `initSolarExplorer` to seed `document.body.dataset.level` from `sessionStorage` (default `'beginner'`) so nothing depends on the removed bar. The per-planet selector's sync-to-`.difficulty-btn` code is harmless when no buttons exist.

### A4. Add planet + Earth photos to Compare-to-Earth  (issue #2, coding half of #1)
**File:** `js/modules/solar-explorer.js` (`openComparison`)

- Above the size circles, render a **side-by-side image pair** using new, stable class names for Design Claude to style:
  `.planet-comparison__photos` › `.planet-comparison__photo-item` (×2) each containing `.planet-comparison__photo` (`<img>`) + `.planet-comparison__photo-label`.
- Fetch via existing `searchNasaImages(query, 1)` (results are localStorage-cached, so the planet image is usually already loaded from its card — no extra quota cost):
  - Planet image: `planet.nasaSearchQuery`.
  - Earth image: reuse `PLANETS.find(p => p.id === 'earth').nasaSearchQuery` (`'Earth from space blue marble'`, verified working).
- Graceful fallback per image: on empty/error/`onerror`, hide that photo slot (don't show a broken image) — the circles + table remain.
- Verify the earthComparison data numbers are accurate (spot-check ratios against `facts`); fix any typos found. Data is the coding half of "accurate & friendly."

### A5. (Coding hook for #8) search-hidden body class
**File:** `js/modules/settings.js`

When the search toggle changes and on init, also set `document.body.classList.toggle('search-hidden', !show)`. This gives Design Claude a clean CSS hook to collapse the reserved header space (issue #8) without guessing at inline `hidden`. Include only as a hook; the visual collapse is Design's.

---

## PART B — Design Handoff spec (for Design Claude — CSS only, `css/style.css`)
Coding Claude does **not** implement these; hand off.

- **#1 Compare-to-Earth redesign:** style the new `.planet-comparison__photos` / `__photo-item` / `__photo` / `__photo-label` (rounded, glowing, responsive side-by-side, stack on mobile) and modernize the overlay. Structure/classes provided by A4.
- **#6 Search results scroll:** `.search-results` currently has `overflow:hidden` and no height cap (`css/style.css:403,413`). Add `max-height` (e.g. `min(60vh, 420px)`) + `overflow-y:auto`.
- **#7 Light-mode header on scroll:** `.site-header` solidifies via `@keyframes nav-solidify` (`animation-timeline: scroll()`, `:211`) to a dark `rgba(8,9,16,…)`; also the `@supports not` fallback (`:227`) and reduced-motion block (`:1963`) hard-code dark. No `[data-theme="light"]` variant exists. Add light-theme overrides for all three.
- **#8 Header gap when search hidden:** use the new `body.search-hidden` hook (from A5) to collapse header/`.search-wrapper` height in that state.
- **#9 Dynamic transitions + mobile:** polish transitions and improve responsive layout. Skippable if it becomes large.

---

## Verification (end-to-end)
Run a local server (ES modules require it): `python -m http.server 8080`, then in Chrome at `http://localhost:8080`:
1. **#4** Open all 4 content pages → confirm real NASA images load; no "No images available." Check Network for 200s from `images-assets.nasa.gov`.
2. **#5** "Test Your Knowledge" → quiz text crisp/readable; backdrop dims page behind, not the questions.
3. **#3** Solar System → top "Show level" bar gone; only in-panel selector remains and still filters.
4. **#2** Solar System → open a planet → "Compare to Earth" → planet + Earth photos side by side; broken fetches hide gracefully.
5. **Regression:** difficulty filter on content pages, APOD, timeline, search, glossary unaffected.
