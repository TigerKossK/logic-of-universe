# Logic of Universe — Project Brief

## What We're Building
A prototype educational website about the universe — stars, black holes, pulsars, magnetars, quasars, blazars, supernovas, kilonovas, hypernovas, and the solar system. Covers beginner → advanced levels with real images and cool examples.

## Key Features
1. **Content sections** — How stars/objects appear, work, merge, die. All major celestial object types.
2. **Search box** — Expands on click, shows top suggested searches below it.
3. **Solar System Explorer** — Clickable planet images (Mercury → Neptune + Sun) showing info panels per planet.

## Phase 2 — New Features (Active Plan)
See `Logic-of-Universe-plan.md` for full spec. Seven features to build:
1. **Timeline of the Universe** — horizontal scrollable strip on homepage, 16 events, difficulty-aware detail
2. **"Ask the Universe" Quiz Mode** — per-section quiz panel, 3 questions per level, score screen
3. **Glossary / Dictionary** — tooltip on bold `<strong>` terms across all content pages
4. **"Compare to Earth"** — size circles + comparison table in Solar System planet panel
5. **Difficulty Filter for Planet Cards** — Beginner=5 bodies, Intermediate=7, Advanced=9
6. **APOD "Previous Day" Button** — navigate to prior APOD images from homepage
7. **Search Recent Searches** — localStorage history shown when search input is empty

**Current overall state:** CSS complete (`css/style.css` exists and is linked). Core JS features exist. Phase 2 features not yet built.

---

## Phase 3 — Improvements & New Features (Active Plan)

Full spec: `C:\Users\KTIK\.claude\plans\hi-let-s-improve-our-steady-hickey.md`. Nine work items:

**Improvements (redesigns of existing Phase 2 features):**
1. **Timeline redesign** — status-line style: horizontal glowing spine, event dots on the line, click-to-open floating cards, small lazy-loaded NASA thumbnail per event.
2. **Quiz redesign** — classic centered "canvas" modal, 5 answer options per question (A–E letter badges), animated progress bar + score ring, dynamic question transitions.
3. **NASA API fallback messages** — user-visible notices instead of blank areas when the API is rate-limited/unavailable ("NASA image limit reached…", "No images available…").
4. **Compare-to-Earth fix** — overlay no longer blocked by the planet panel (panel dims via `.planet-panel--comparison-active`); new size-viz with colored glowing circles.

**New features:**
5. **Settings panel** — gear button in nav (right side) opens a slide-in panel: Language selector (English live, others "coming soon"), Dark/Light theme toggle, Show/Hide search bar toggle. Prefs persist in localStorage.
6. **Copy section link** — hover icon on each `.section-header`, copies `page.html#section-id` to clipboard.
7. **Back-to-top button** — floating button appears after 300px scroll, smooth-scrolls up.
8. **Cross-page Related Topics** — pill links at the bottom of each content section.
9. **Animated stat counters** — homepage strip (after hero) counting up on scroll: Age of Universe, Stars in Milky Way, Oldest Star, Phoenix A black hole, largest structure, galaxy count.

### CODING SIDE STATUS: ✅ COMPLETE & VERIFIED
All 9 items implemented in JS/HTML/data. Files touched:
- `js/modules/`: `timeline.js`, `quiz.js`, `nasa.js`, `solar-explorer.js`, `content-renderer.js`, `settings.js` (new), `stats-counter.js` (new), `main.js`
- `js/data/`: `timeline-data.js` (+`color`,`imageQuery`), `quiz-data.js` (5th option added to every question), `planets.js` (`earthComparison.color`), `*-content.js` (+`relatedTopics`)
- All 6 HTML files: added `#nav-settings-btn`, `#settings-panel` + backdrop; `index.html` added `#universe-stats` section.

### DESIGN SIDE STATUS: ⏳ NOT STARTED — this is Design Claude's job (see class contract below)

---

## Phase 4 — Live-test Fixes (Active Plan)

Full spec: `C:\.md files for work=project\Logic-of-Universe-Phase4-Coding-Plan.md`
(mirror copy: `C:\Users\KTIK\.claude\plans\hi-let-s-improve-our-merry-lighthouse.md`)

User tested the live site and reported 9 issues. Root causes verified against the live NASA API and the code.

**CODING side (Coding Claude — this phase):**
- **A1 · #4 broken images (⭐ top priority):** NASA image API ANDs every query word; the long 7–9-word `nasaSearchQuery` strings return 0 results (**22 of 27 broken**). Fix = short verified queries in `js/data/*-content.js` (mapping table in plan) + empty-result "retry with first 3 words" fallback in `js/modules/nasa.js`.
- **A2 · #5 blurry quiz:** `js/modules/quiz.js` nests `.quiz-panel__backdrop` (z-index 399 + `backdrop-filter`) *inside* the panel, above `.quiz-canvas`, so it paints over the questions. Fix = move backdrop to a `document.body`-level sibling; toggle its `hidden` in open/close.
- **A3 · #3 duplicate difficulty control:** Remove the top `#difficulty-bar` on `pages/solar-system.html` only + drop its `initDifficultyToggle` call in `js/main.js`; seed `document.body.dataset.level` in `initSolarExplorer`. Keep the per-planet selector.
- **A4 · #2 comparison photos:** `openComparison` in `js/modules/solar-explorer.js` renders planet + Earth NASA photos side by side (cached; graceful per-image fallback). New classes: `.planet-comparison__photos / __photo-item / __photo / __photo-label`.
- **A5 · #8 hook:** `js/modules/settings.js` toggles `body.search-hidden` for Design to collapse header space.

**DESIGN side (Design Claude — CSS only, `css/style.css`):**
- **#1** style the new compare-to-Earth photo structure + modernize overlay.
- **#6** `.search-results` → add `max-height` + `overflow-y:auto` (currently `overflow:hidden`, `css/style.css:403,413`).
- **#7** add `[data-theme="light"]` variants for the scrolled header (`nav-solidify` `:211`, `@supports not` `:227`, reduced-motion `:1963` all hard-code dark).
- **#8** collapse header/search space via `body.search-hidden`.
- **#9** more dynamic transitions + mobile responsiveness (skippable if large).

### CODING SIDE STATUS: ✅ COMPLETE — A1–A5 implemented, spot-verified against the live NASA Image API
### DESIGN SIDE STATUS: 📋 HANDOFF SPEC READY — Design Claude's job

---

## Role Split (Worktree Mode)
- **Coding Claude (Logic of Universe)** → CODING & SCRIPTING ONLY. No web design. No CSS. No HTML layout changes. If unsure, use Agent Teams mode to ask.
- **Design Claude (LogUniverse design)** → WEB DESIGN & CSS ONLY. No JS. No logic. Use WDesignAgent and INTsearch for inspiration and research.
- If confused about who does what → use Agent Teams mode to communicate.

## Rules
- **Make a plan first before doing any work** — investigate the issue, outline the fix, then execute.
- No auto-adding features — ask first via quick yes/no questions during work.
- Use INTsearch Agent for any internet research needed.
- Use WDesignAgent for any design decisions.
- This is a prototype — keep it clean but not over-engineered.

## Stack
Vanilla HTML/CSS/JS. ES Modules. No build step. Runs via local server (not file://).

---

## FOR THE DESIGN CLAUDE — READ THIS

### Current State
`css/style.css` already exists and is linked to all 6 HTML files. Phase 1 styling is complete. **Your job in Phase 2 is to extend `css/style.css`** with styles for all the new JS-rendered elements listed below — the new features from `Logic-of-Universe-plan.md`.

### How to Preview the Site
Open a terminal in this folder and run:
```
python -m http.server 8080
```
Then open `http://localhost:8080` in Chrome. Do NOT open HTML files directly — ES Modules require a server.

### Stable Class Contract — NEVER rename these, JS depends on them
These classes are toggled by JavaScript. Style them freely, but the names are locked:

| Class | When it appears |
|---|---|
| `.search-wrapper--expanded` | Search box is open/focused |
| `.search-suggestions--visible` | Suggestion chips are showing |
| `.search-results--visible` | Live search results are showing |
| `.search-highlight` | Text matched by search (inside `<mark>`) |
| `.site-nav--mobile-open` | Mobile nav menu is open |
| `.difficulty-btn--active` | The currently selected difficulty level button |
| `.content-section--hidden` | Section filtered out by difficulty toggle |
| `.content-section--search-active` | Section highlighted after search jump |
| `.level-badge--beginner` | Beginner badge |
| `.level-badge--intermediate` | Intermediate badge |
| `.level-badge--advanced` | Advanced badge |
| `.planet-card--loading` | Planet card image is loading |
| `.planet-card--selected` | Planet card that is currently open |
| `.planet-panel--open` | Planet info panel is visible |
| `.section-media--loading` | NASA image is still loading |
| `.apod-nav__btn[disabled]` | "Next Day" button when already at today |

### Key IDs (for layout anchoring)
`#site-header`, `#site-nav`, `#nav-links`, `#nav-logo`, `#nav-mobile-toggle`
`#search-wrapper`, `#search-input`, `#search-suggestions`, `#search-results`
`#difficulty-bar`, `#difficulty-toggle`
`#site-main`, `#site-footer`
`#planet-grid`, `#planet-panel`, `#planet-panel-backdrop`
`#apod-section`, `#apod-card`, `#apod-nav`, `#apod-prev-btn`, `#apod-next-btn`, `#topics-grid`
`#content-sections`
`#timeline-section`, `#timeline-container`, `#scroll-hint-arrow`
`#quiz-panel`, `#quiz-panel-title`, `#quiz-panel-close`, `#quiz-panel-body`, `#quiz-panel-backdrop`
`#glossary-tooltip`, `#glossary-tooltip-close`, `#glossary-tooltip-term`, `#glossary-tooltip-def`
`#planet-comparison`, `#planet-comparison-close`, `#planet-comparison-title`, `#planet-comparison-visual`, `#planet-comparison-table`, `#planet-comparison-backdrop`

### JS-rendered elements to style
These are created by JavaScript — style them by class name:
- `.planet-card` — planet card in the grid (contains `.planet-card__image`, `.planet-card__name`, `.planet-card__type`)
- `.planet-panel` — the info panel (contains `.planet-panel__header`, `.planet-panel__image`, `.planet-panel__facts`, `.planet-panel__description`, `.planet-panel__fun-fact`)
- `.facts-list` / `.facts-list__row` / `.facts-list__label` / `.facts-list__value` — planet facts table
- `.difficulty-btn` — the level filter buttons rendered by JS
- `.search-suggestion-chip` — suggestion pills in the search dropdown
- `.search-result-item` — individual search result rows
- `.content-section` — each topic section (contains `.section-header`, `.section-title`, `.level-badge`, `.section-body`, `.section-media`)
- `.loading-spinner` — shown while NASA images load
- `.fun-fact` — the fun fact paragraph in the planet panel

### Phase 2 — New JS-rendered elements to style
These are added by the new features in `Logic-of-Universe-plan.md`:

**Timeline (homepage `#timeline-section`)**
- `.timeline-section` / `.timeline-section__title` / `.timeline-section__subtitle`
- `.timeline-container` — horizontally scrollable wrapper
- `.timeline-track` — flex row of events (`role="list"`)
- `.timeline-event` — individual event card (`role="listitem"`, `tabindex="0"`)
- `.timeline-event__icon` / `.timeline-event__time` / `.timeline-event__title` / `.timeline-event__detail[hidden]`
- `.scroll-hint-arrow` / `.scroll-hint-arrow__icon` / `.scroll-hint-arrow__label`

**Quiz panel (global overlay)**
- `.quiz-panel[hidden]` / `.quiz-panel__header` / `.quiz-panel__body` / `.quiz-panel__backdrop`
- `.quiz-trigger-btn` — "Test Your Knowledge →" button appended after content sections

**Glossary tooltip (global)**
- `.glossary-term` — inline `<span>` wrapping bold terms, `tabindex="0"`
- `.glossary-tooltip[hidden]` — positioned tooltip (role="tooltip")

**Compare to Earth overlay (solar-system page)**
- `.planet-compare-btn` — button inside planet panel
- `.planet-comparison[hidden]` / `.planet-comparison__inner` / `.planet-comparison__close`
- `.planet-comparison__title` / `.planet-comparison__visual` / `.planet-comparison__table`
- `.planet-comparison__backdrop`

**APOD navigation (homepage)**
- `.apod-nav` — wraps prev button + date + next button
- `.apod-nav__btn` — prev/next buttons

### Visual Direction
- Dark theme (`data-theme="dark"` is on every `<html>` element)
- Space/cosmos aesthetic — think deep blacks, dark navy, with glowing accents
- The `data-theme` attribute is already on `<html>` — use it for theming: `[data-theme="dark"] { ... }`

---

## STATUS UPDATE FROM DESIGN CLAUDE

`css/style.css` has been created and linked to all 6 HTML files.

### Two small additions needed from Coding Claude

**1. Difficulty skin — body data-level attribute**
The CSS difficulty skin uses `:has()` to detect the active button, which works but can't change `--active-accent` on elements *above* the `#difficulty-bar`. To fully activate the skin (including accent color propagation across the whole page), add **one line** to `js/modules/difficulty.js`, inside the click handler, right after `sessionStorage.setItem`:

```js
document.body.dataset.level = level;
```

And at the bottom of `initDifficultyToggle`, set the initial value:
```js
document.body.dataset.level = savedLevel;
```

**2. Nav scroll state — header class**
The CSS uses `animation-timeline: scroll()` for the nav transparent→frosted glass effect (Chrome 115+, Firefox 121+). For broader compatibility, optionally add a scroll listener to `js/modules/nav.js` that toggles a class:

```js
window.addEventListener('scroll', () => {
  document.getElementById('site-header')
    ?.classList.toggle('site-header--scrolled', window.scrollY > 80);
}, { passive: true });
```

Then in CSS (already handled as fallback via `@supports not`), this class can be used. Not critical — the CSS fallback gives frosted glass always.
