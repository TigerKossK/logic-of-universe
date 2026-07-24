import { PLANETS } from '../data/planets.js';
import { searchNasaImages } from './nasa.js';

const _STORAGE_KEY = 'lou-difficulty-level';
const _saved = sessionStorage.getItem(_STORAGE_KEY) || 'all';
let currentLevel = _saved === 'all' ? 'beginner' : _saved;
let currentPlanetId = null;
let isOpeningPanel = false;
const PANEL_OPEN_TIMEOUT_MS = 5000;

export function initSolarExplorer(gridEl) {
  if (!gridEl) return;

  // The page-level difficulty bar was removed on this page — seed the body
  // dataset directly so the per-planet level selector and CSS skin still work.
  document.body.dataset.level = sessionStorage.getItem(_STORAGE_KEY) || 'beginner';

  renderPlanetGrid(gridEl);
  initPanelControls();

  // Apply initial difficulty filter
  const savedLevel = document.body.dataset.level || sessionStorage.getItem(_STORAGE_KEY) || 'all';
  filterPlanetsByLevel(savedLevel);

  // Keep in sync with difficulty toggle via event
  document.addEventListener('difficulty-change', e => {
    const level = e.detail?.level;
    if (!level) return;
    currentLevel = level === 'all' ? 'beginner' : level;
    filterPlanetsByLevel(level);

    // Update open panel description and level selector if visible
    if (currentPlanetId) {
      const planet = PLANETS.find(p => p.id === currentPlanetId);
      if (planet) {
        renderPanelLevelSelector();
        renderPlanetDescription(planet);
      }
    }
  });

  // Fallback: also react to direct difficulty button clicks (for panel description sync)
  document.addEventListener('click', e => {
    const btn = e.target.closest('.difficulty-btn');
    if (!btn) return;
    currentLevel = btn.dataset.level === 'all' ? 'beginner' : btn.dataset.level;
    if (currentPlanetId) {
      const planet = PLANETS.find(p => p.id === currentPlanetId);
      if (planet) {
        renderPanelLevelSelector();
        renderPlanetDescription(planet);
      }
    }
  });
}

function filterPlanetsByLevel(level) {
  const showTypes = {
    beginner: ['terrestrial', 'star'],
    intermediate: ['terrestrial', 'star', 'gas-giant'],
  };

  const allowed = showTypes[level] || null; // null = show all

  PLANETS.forEach(planet => {
    const card = document.getElementById(`planet-card-${planet.id}`);
    if (!card) return;
    const visible = !allowed || allowed.includes(planet.type);
    card.hidden = !visible;

    // If the open planet is now hidden, close the panel
    if (!visible && currentPlanetId === planet.id) {
      closePlanetPanel();
    }
  });
}

function renderPlanetGrid(gridEl) {
  gridEl.innerHTML = PLANETS.map(planet => `
    <article
      class="planet-card"
      id="planet-card-${planet.id}"
      data-planet-id="${planet.id}"
      data-planet-type="${planet.type}"
      role="listitem"
      tabindex="0"
      aria-label="${planet.name} — click to explore"
    >
      <div class="planet-card__visual planet-card__visual--loading" id="planet-visual-${planet.id}" aria-hidden="true">
        <span class="planet-card__placeholder" aria-hidden="true"></span>
      </div>
      <h3 class="planet-card__name">${planet.name}</h3>
      <p class="planet-card__type">${formatType(planet.type)}</p>
      <p class="planet-card__order">${formatOrder(planet)}</p>
    </article>
  `).join('');

  // Fetch NASA images for each planet card (non-blocking)
  PLANETS.forEach(planet => loadPlanetCardImage(planet));

  // Event listeners
  gridEl.addEventListener('click', e => {
    const card = e.target.closest('.planet-card');
    if (card) openPlanetPanel(card.dataset.planetId);
  });

  gridEl.addEventListener('keydown', e => {
    const card = e.target.closest('.planet-card');
    if (card && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      openPlanetPanel(card.dataset.planetId);
    }
  });
}

async function loadPlanetCardImage(planet) {
  const visual = document.getElementById(`planet-visual-${planet.id}`);
  if (!visual) return;

  const images = await searchNasaImages(planet.nasaSearchQuery, 1);
  if (images.length > 0) {
    const img = document.createElement('img');
    img.className = 'planet-card__image';
    img.src = images[0].imageUrl;
    img.alt = `${planet.name} from NASA`;
    img.loading = 'lazy';
    img.onload = () => visual.classList.remove('planet-card__visual--loading');
    img.onerror = () => showCardFallback(visual, planet);
    visual.innerHTML = '';
    visual.appendChild(img);
  } else {
    showCardFallback(visual, planet);
  }
}

function showCardFallback(visual, planet) {
  visual.classList.remove('planet-card__visual--loading');
  visual.classList.add('planet-card__visual--fallback');
  visual.innerHTML = `<span class="planet-card__fallback-icon" aria-hidden="true">${getPlanetSymbol(planet.id)}</span>`;
}

async function openPlanetPanel(planetId) {
  const planet = PLANETS.find(p => p.id === planetId);
  if (!planet) return;

  const panel = document.getElementById('planet-panel');
  const backdrop = document.getElementById('planet-panel-backdrop');
  if (!panel) return;

  currentPlanetId = planetId;

  // Mark card as selected
  document.querySelectorAll('.planet-card').forEach(c => c.classList.remove('planet-card--selected'));
  document.getElementById(`planet-card-${planetId}`)?.classList.add('planet-card--selected');

  // Populate panel content immediately
  document.getElementById('planet-panel-name').textContent = planet.name;
  document.getElementById('planet-panel-type').textContent = formatType(planet.type);

  renderPlanetFacts(planet);
  renderPanelLevelSelector();
  renderPlanetDescription(planet);
  renderPlanetFunFact(planet);
  renderPlanetTabs(planet);

  // Make panel accessible but visually hidden while image loads
  panel.hidden = false;
  panel.dataset.closing = 'false';
  panel.classList.remove('planet-panel--open');
  if (backdrop) { backdrop.hidden = false; }

  isOpeningPanel = true;

  // Race image load against a timeout — panel always opens within PANEL_OPEN_TIMEOUT_MS
  try {
    await Promise.race([
      loadPanelImage(planet),
      new Promise(resolve => setTimeout(resolve, PANEL_OPEN_TIMEOUT_MS)),
    ]);
  } catch (err) {
    console.warn('Planet panel image error:', err);
  }

  panel.classList.add('planet-panel--open');
  isOpeningPanel = false;

  // Set focus to close button after panel is visible
  setTimeout(() => document.getElementById('planet-panel-close')?.focus(), 50);
}

async function loadPanelImage(planet) {
  const imageContainer = document.getElementById('planet-panel-image');
  if (!imageContainer) return;

  imageContainer.innerHTML = '<div class="planet-panel__image-loading" aria-label="Loading NASA image"><span class="loading-spinner" aria-hidden="true"></span></div>';

  const images = await searchNasaImages(planet.nasaSearchQuery, 3);

  if (images.length > 0) {
    const img = document.createElement('img');
    img.className = 'planet-panel__image';
    img.src = images[0].imageUrl;
    img.alt = images[0].title || `${planet.name} from NASA`;
    img.loading = 'lazy';
    img.onerror = () => {
      imageContainer.innerHTML = `<p class="planet-panel__image-error">NASA image unavailable for ${planet.name}.</p>`;
    };
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);

    if (images[0].title) {
      const caption = document.createElement('p');
      caption.className = 'planet-panel__image-caption';
      caption.textContent = images[0].title;
      imageContainer.appendChild(caption);
    }
  } else {
    imageContainer.innerHTML = `<p class="planet-panel__image-error">NASA image unavailable for ${planet.name}.</p>`;
  }
}

function renderPlanetFacts(planet) {
  const container = document.getElementById('planet-panel-facts');
  if (!container) return;

  const facts = planet.facts;
  const rows = [
    ['Diameter', facts.diameter],
    ['Distance from Sun', facts.distanceFromSun],
    ['Orbital Period', facts.orbitalPeriod],
    ['Moons', String(facts.moons)],
    ['Surface Temp', facts.surfaceTemp],
    ['Gravity', facts.gravity],
    ['Day Length', facts.dayLength],
  ];

  container.innerHTML = `<dl class="facts-list">
    ${rows.map(([label, value]) => `
      <div class="facts-list__row">
        <dt class="facts-list__label">${label}</dt>
        <dd class="facts-list__value">${value}</dd>
      </div>
    `).join('')}
  </dl>`;
}

function renderPanelLevelSelector() {
  const container = document.getElementById('planet-panel-level-selector');
  if (!container) return;

  const levels = ['beginner', 'intermediate', 'advanced'];
  container.innerHTML = `<div class="planet-panel__levels" role="group" aria-label="Info depth">
    ${levels.map(lvl => `
      <button
        class="planet-panel-level-btn${currentLevel === lvl ? ' planet-panel-level-btn--active' : ''}"
        data-panel-level="${lvl}"
        aria-pressed="${currentLevel === lvl}"
      >${capitalize(lvl)}</button>
    `).join('')}
  </div>`;
}

function renderPlanetDescription(planet) {
  const container = document.getElementById('planet-panel-description');
  if (!container) return;

  const level = ['beginner', 'intermediate', 'advanced'].includes(currentLevel) ? currentLevel : 'beginner';
  const desc = planet.description[level] || planet.description.beginner;
  const levelLabel = capitalize(level);

  container.innerHTML = `
    <div class="planet-desc">
      <span class="level-badge level-badge--${level}">${levelLabel}</span>
      <p class="planet-desc__text">${desc}</p>
    </div>
  `;
}

function renderPlanetTabs(planet) {
  const tabsEl = document.getElementById('planet-panel-tabs');
  const comparePane = document.getElementById('planet-panel-tab-compare');
  if (!tabsEl || !comparePane) return;

  // Earth has nothing to compare itself to — info-only, no tab row.
  // .planet-panel__tabs sets its own `display`, so the [hidden] attribute alone
  // has no visual effect — force it via inline style too.
  if (!planet.earthComparison) {
    tabsEl.hidden = true;
    tabsEl.style.display = 'none';
    tabsEl.innerHTML = '';
    comparePane.hidden = true;
    comparePane.innerHTML = '';
    activateTab('info');
    return;
  }

  tabsEl.hidden = false;
  tabsEl.style.display = '';
  tabsEl.setAttribute('role', 'tablist');
  tabsEl.innerHTML = `
    <button class="planet-panel__tab planet-panel__tab--active" data-tab="info" role="tab" aria-selected="true">Info</button>
    <button class="planet-panel__tab" data-tab="compare" role="tab" aria-selected="false">Compare to Earth</button>
  `;

  comparePane.dataset.photosLoaded = 'false';
  comparePane.innerHTML = renderCompareContent(planet);
  activateTab('info');

  tabsEl.querySelectorAll('.planet-panel__tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activateTab(btn.dataset.tab);
      if (btn.dataset.tab === 'compare' && comparePane.dataset.photosLoaded !== 'true') {
        comparePane.dataset.photosLoaded = 'true';
        loadComparePhotos(planet);
      }
    });
  });
}

function activateTab(tabName) {
  document.querySelectorAll('.planet-panel__tab').forEach(btn => {
    const active = btn.dataset.tab === tabName;
    btn.classList.toggle('planet-panel__tab--active', active);
    btn.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.planet-panel__tab-pane').forEach(pane => {
    pane.classList.toggle('planet-panel__tab-pane--active', pane.dataset.tabPane === tabName);
  });
}

function renderCompareContent(planet) {
  const c = planet.earthComparison;
  const light = shadeColor(c.color || '#38b6ff', 0.35);
  const dark = shadeColor(c.color || '#38b6ff', -0.35);

  const numericRows = [
    ['Size (diameter)', c.sizeRatio],
    ['Mass', c.massRatio],
    ['Gravity', c.gravityRatio],
  ];
  const textRows = [
    ['Atmosphere', c.atmosphere],
    ['Surface Pressure', c.pressure],
    ['Temperature', c.avgTemp],
    ['Day Length', c.dayLength],
    ['Moons', c.moons],
  ];

  return `
    <div class="planet-compare">
      <div class="planet-compare__visual">
        <div class="planet-compare__disc-group">
          <small>Earth</small>
          <div class="planet-compare__disc planet-compare__disc--earth" id="planet-compare-earth-disc"></div>
        </div>
        <div class="planet-compare__disc-group">
          <small>${planet.name}</small>
          <div class="planet-compare__disc planet-compare__disc--planet" id="planet-compare-planet-disc" style="--scale: ${c.sizeRatio}; --planet-light: ${light}; --planet-mid: ${c.color || '#38b6ff'}; --planet-dark: ${dark};"></div>
        </div>
      </div>
      <div class="planet-compare__table">
        <div class="planet-compare__row--header">
          <span>Property</span>
          <span>Earth</span>
          <span>${planet.name}</span>
        </div>
        ${numericRows.map(([label, ratio]) => `
          <div class="planet-compare__row">
            <span>${label}</span>
            <span>1×</span>
            <span class="planet-compare__value--${ratio < 1 ? 'smaller' : 'larger'}">
              ${formatRatio(ratio)}×
              <span class="planet-compare__ratio${ratio < 1 ? ' planet-compare__ratio--smaller' : ''}">×${formatRatio(ratio)}</span>
            </span>
          </div>
        `).join('')}
        ${textRows.map(([label, value]) => `
          <div class="planet-compare__row">
            <span>${label}</span>
            <span style="grid-column: span 2;">${value}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

async function loadComparePhotos(planet) {
  const earthDisc = document.getElementById('planet-compare-earth-disc');
  const planetDisc = document.getElementById('planet-compare-planet-disc');
  if (!earthDisc || !planetDisc) return;

  const earth = PLANETS.find(p => p.id === 'earth');

  const [planetImages, earthImages] = await Promise.all([
    searchNasaImages(planet.nasaSearchQuery, 1),
    earth ? searchNasaImages(earth.nasaSearchQuery, 1) : Promise.resolve([]),
  ]);

  fillComparePhoto(planetDisc, planetImages, planet.name);
  fillComparePhoto(earthDisc, earthImages, 'Earth');
}

function fillComparePhoto(discEl, images, label) {
  // discEl may have been replaced by a re-render for a different planet — bail out.
  if (!document.body.contains(discEl)) return;
  if (!Array.isArray(images) || images.length === 0 || !images[0].imageUrl) return;

  const img = new Image();
  img.className = 'planet-compare__photo';
  img.alt = images[0].title || `${label} from NASA`;
  img.loading = 'lazy';
  img.onload = () => {
    if (document.body.contains(discEl)) discEl.appendChild(img);
  };
  img.src = images[0].imageUrl;
}

function shadeColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  const target = percent < 0 ? 0 : 255;
  const p = Math.abs(percent);
  r = Math.round((target - r) * p) + r;
  g = Math.round((target - g) * p) + g;
  b = Math.round((target - b) * p) + b;
  return `rgb(${r}, ${g}, ${b})`;
}

function formatRatio(n) {
  if (n >= 100) return Math.round(n).toLocaleString();
  if (n >= 10) return n.toFixed(1);
  return n.toFixed(2);
}

function renderPlanetFunFact(planet) {
  const container = document.getElementById('planet-panel-fun-fact');
  if (!container) return;
  const facts = planet.funFacts;
  const fact = Array.isArray(facts) && facts.length > 0
    ? facts[Math.floor(Math.random() * facts.length)]
    : '';
  const p = document.createElement('p');
  p.className = 'fun-fact';
  p.innerHTML = '<strong>Fun fact:</strong> ';
  p.appendChild(document.createTextNode(fact));
  container.innerHTML = '';
  container.appendChild(p);
}

function initPanelControls() {
  const closeBtn = document.getElementById('planet-panel-close');
  const backdrop = document.getElementById('planet-panel-backdrop');
  const levelSelector = document.getElementById('planet-panel-level-selector');

  closeBtn?.addEventListener('click', closePlanetPanel);
  backdrop?.addEventListener('click', closePlanetPanel);

  // Single delegated listener for in-panel difficulty buttons
  levelSelector?.addEventListener('click', e => {
    const btn = e.target.closest('.planet-panel-level-btn');
    if (!btn) return;

    const lvl = btn.dataset.panelLevel;
    currentLevel = lvl;
    sessionStorage.setItem(_STORAGE_KEY, lvl);

    // Refresh panel level buttons
    levelSelector.querySelectorAll('.planet-panel-level-btn').forEach(b => {
      const active = b.dataset.panelLevel === lvl;
      b.classList.toggle('planet-panel-level-btn--active', active);
      b.setAttribute('aria-pressed', String(active));
    });

    // Sync page-level difficulty bar
    document.querySelectorAll('.difficulty-btn').forEach(b => {
      const active = b.dataset.level === lvl;
      b.classList.toggle('difficulty-btn--active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    document.body.dataset.level = lvl;

    if (currentPlanetId) {
      const planet = PLANETS.find(p => p.id === currentPlanetId);
      if (planet) renderPlanetDescription(planet);
    }
  });

  document.addEventListener('keydown', e => {
    const panel = document.getElementById('planet-panel');
    if (e.key === 'Escape' && panel && !panel.hidden) {
      closePlanetPanel();
    }
  });
}

function closePlanetPanel() {
  const panel = document.getElementById('planet-panel');
  const backdrop = document.getElementById('planet-panel-backdrop');

  currentPlanetId = null;

  if (panel) {
    panel.classList.remove('planet-panel--open');
    panel.dataset.closing = 'true';
    setTimeout(() => {
      if (panel.dataset.closing === 'true') panel.hidden = true;
    }, 400);
  }
  if (backdrop) backdrop.hidden = true;

  // Return focus to selected card
  const selectedCard = document.querySelector('.planet-card--selected');
  selectedCard?.focus();
  selectedCard?.classList.remove('planet-card--selected');
}

function formatType(type) {
  const map = {
    'terrestrial': 'Terrestrial Planet',
    'gas-giant': 'Gas Giant',
    'ice-giant': 'Ice Giant',
    'star': 'Star',
  };
  return map[type] || type;
}

function formatOrder(planet) {
  if (planet.type === 'star') return 'Our Star';
  return `Planet ${planet.order}`;
}

function getPlanetSymbol(id) {
  const symbols = {
    sun: '☀',
    mercury: '☿',
    venus: '♀',
    earth: '♁',
    mars: '♂',
    jupiter: '♃',
    saturn: '♄',
    uranus: '⛢',
    neptune: '♆',
  };
  return symbols[id] || '○';
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
