import { PLANETS } from '../data/planets.js';

// "Your Cosmic Profile" — interactive calculators that reuse the Solar System
// data already in planets.js: your weight on every body (surface-gravity ratio)
// and your age on every planet (orbital period). Renders live as the user types.

const COPY_LABEL = 'Copy my Cosmic Profile';

export function initCosmicProfile(mountEl) {
  if (!mountEl) return;

  mountEl.innerHTML = `
    <h2 class="cosmic-profile__title">Your Cosmic Profile</h2>
    <p class="cosmic-profile__subtitle">See how the Solar System would change you.</p>
    <form class="cosmic-profile__form" id="cp-form">
      <div class="cosmic-profile__field">
        <label class="cosmic-profile__label" for="cp-weight">Your weight</label>
        <div class="cosmic-profile__input-group">
          <input class="cosmic-profile__input" id="cp-weight" type="number" min="0" step="any" inputmode="decimal" placeholder="e.g. 60" />
          <select class="cosmic-profile__unit-select" id="cp-weight-unit" aria-label="Weight unit">
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
        </div>
      </div>
      <div class="cosmic-profile__field">
        <label class="cosmic-profile__label" for="cp-birthday">Your birthday</label>
        <input class="cosmic-profile__input" id="cp-birthday" type="date" />
      </div>
    </form>
    <p class="cosmic-profile__empty">Enter your details above to reveal your cosmic profile.</p>
    <div class="cosmic-profile__results" hidden>
      <div class="cosmic-profile__result-group">
        <h3 class="cosmic-profile__result-title">Your weight across the Solar System</h3>
        <ul class="cosmic-profile__rows" id="cp-weight-rows"></ul>
      </div>
      <div class="cosmic-profile__result-group">
        <h3 class="cosmic-profile__result-title">Your age across the Solar System</h3>
        <ul class="cosmic-profile__rows" id="cp-age-rows"></ul>
      </div>
    </div>
    <button class="cosmic-profile__copy-btn" id="cp-copy" type="button" hidden>${COPY_LABEL}</button>
  `;

  const form = mountEl.querySelector('#cp-form');
  const weightInput = mountEl.querySelector('#cp-weight');
  const unitSelect = mountEl.querySelector('#cp-weight-unit');
  const birthdayInput = mountEl.querySelector('#cp-birthday');
  const emptyEl = mountEl.querySelector('.cosmic-profile__empty');
  const resultsEl = mountEl.querySelector('.cosmic-profile__results');
  const weightRowsEl = mountEl.querySelector('#cp-weight-rows');
  const ageRowsEl = mountEl.querySelector('#cp-age-rows');
  const copyBtn = mountEl.querySelector('#cp-copy');

  let lastData = {};

  form.addEventListener('submit', e => e.preventDefault());

  function render() {
    const weightRaw = parseFloat(weightInput.value);
    const weightValid = isFinite(weightRaw) && weightRaw > 0;
    const unit = unitSelect.value;
    const earthYears = earthYearsFromBirthday(birthdayInput.value);
    const ageValid = earthYears != null;

    weightRowsEl.innerHTML = '';
    if (weightValid) {
      computeWeights(weightRaw, unit).forEach(r => weightRowsEl.appendChild(row(r.name, r.value)));
    } else {
      weightRowsEl.appendChild(hintRow('Enter your weight above to see this.'));
    }

    ageRowsEl.innerHTML = '';
    if (ageValid) {
      computeAges(earthYears).forEach(r => ageRowsEl.appendChild(row(r.name, r.value)));
    } else {
      ageRowsEl.appendChild(hintRow('Enter your birthday above to see this.'));
    }

    const anyValid = weightValid || ageValid;
    resultsEl.hidden = !anyValid;
    emptyEl.hidden = anyValid;
    copyBtn.hidden = !anyValid;

    lastData = { weightValid, ageValid, unit, weightRaw, earthYears };
  }

  function buildCopyText() {
    const lines = ['🌌 My Cosmic Profile — Logic of Universe', ''];
    if (lastData.weightValid) {
      lines.push('⚖️ My weight across the Solar System:');
      computeWeights(lastData.weightRaw, lastData.unit).forEach(r => lines.push(`• ${r.name}: ${r.value}`));
      lines.push('');
    }
    if (lastData.ageValid) {
      lines.push('🎂 My age across the Solar System:');
      computeAges(lastData.earthYears).forEach(r => lines.push(`• ${r.name}: ${r.value}`));
      lines.push('');
    }
    lines.push(location.origin + location.pathname);
    return lines.join('\n');
  }

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(buildCopyText()).then(() => {
      copyBtn.textContent = 'Copied!';
      copyBtn.classList.add('cosmic-profile__copy-btn--copied');
      setTimeout(() => {
        copyBtn.textContent = COPY_LABEL;
        copyBtn.classList.remove('cosmic-profile__copy-btn--copied');
      }, 2000);
    }).catch(() => {
      copyBtn.textContent = 'Copy failed — try again';
      setTimeout(() => { copyBtn.textContent = COPY_LABEL; }, 2000);
    });
  });

  weightInput.addEventListener('input', render);
  unitSelect.addEventListener('change', render);
  birthdayInput.addEventListener('input', render);
  birthdayInput.addEventListener('change', render);

  render(); // initial empty state
}

// --- calculators ---

function computeWeights(weight, unit) {
  return PLANETS.map(b => {
    const ratio = b.id === 'earth' ? 1 : b.earthComparison?.gravityRatio;
    if (ratio == null) return null;
    return { name: b.name, value: formatWeight(weight * ratio, unit) };
  }).filter(Boolean);
}

function computeAges(earthYears) {
  return PLANETS.map(b => {
    const periodYears = parseOrbitalYears(b.facts?.orbitalPeriod);
    if (periodYears == null) return null; // e.g. the Sun ('N/A')
    return { name: b.name, value: formatAge(earthYears / periodYears) };
  }).filter(Boolean);
}

/** Parse strings like "88 Earth days", "365.25 days", "11.9 Earth years" → years. */
function parseOrbitalYears(str) {
  if (!str) return null;
  const m = String(str).match(/([\d.]+)\s*(?:earth\s*)?(day|year)/i);
  if (!m) return null;
  const n = parseFloat(m[1]);
  if (!isFinite(n) || n <= 0) return null;
  return /day/i.test(m[2]) ? n / 365.25 : n;
}

function earthYearsFromBirthday(value) {
  if (!value) return null;
  const bd = new Date(value + 'T12:00:00Z');
  if (isNaN(bd.getTime())) return null;
  const ms = Date.now() - bd.getTime();
  if (ms <= 0) return null; // future / today
  return ms / (365.25 * 24 * 3600 * 1000);
}

// --- formatting ---

function formatWeight(v, unit) {
  const n = v >= 1000 ? Math.round(v).toLocaleString('en-US')
    : v >= 10 ? v.toFixed(1)
    : v.toFixed(2);
  return `${n} ${unit}`;
}

function formatAge(a) {
  const n = a >= 1000 ? Math.round(a).toLocaleString('en-US')
    : a >= 100 ? String(Math.round(a))
    : a >= 1 ? a.toFixed(1)
    : a.toFixed(2);
  return `${n} yr`;
}

// --- DOM helpers ---

function row(name, value) {
  const li = document.createElement('li');
  li.className = 'cosmic-profile__row';
  const b = document.createElement('span');
  b.className = 'cosmic-profile__row-body';
  b.textContent = name;
  const v = document.createElement('span');
  v.className = 'cosmic-profile__row-value';
  v.textContent = value;
  li.append(b, v);
  return li;
}

function hintRow(text) {
  const li = document.createElement('li');
  li.className = 'cosmic-profile__row';
  const b = document.createElement('span');
  b.className = 'cosmic-profile__row-body';
  b.textContent = text;
  li.appendChild(b);
  return li;
}
