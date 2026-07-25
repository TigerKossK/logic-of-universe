import { fetchNearEarthObjects } from './nasa.js';

// "Happening now" homepage widget: near-Earth asteroids passing this week,
// pulled live from NASA's NeoWs feed. Renders one of three states into the
// mount element — loading, a sorted list of cards, or a calm fallback notice.

const MAX_CARDS = 5;

export async function initLiveFeed(mountEl) {
  if (!mountEl) return;

  // Persistent header + initial loading state.
  mountEl.innerHTML = `
    <h2 class="live-feed__title">Happening Now — Near-Earth Asteroids</h2>
    <p class="live-feed__subtitle">Space rocks passing Earth this week, live from NASA.</p>
    <div class="live-feed__loading"><span class="loading-spinner" aria-hidden="true"></span></div>
  `;
  const stateEl = mountEl.querySelector('.live-feed__loading');

  const start = todayUTC();
  const end = offsetUTC(start, 6); // NeoWs caps the range at 7 days
  const feed = await fetchNearEarthObjects(window.NASA_API_KEY || 'DEMO_KEY', start, end);

  stateEl.replaceWith(buildState(feed));
}

function buildState(feed) {
  if (!feed || feed.error) {
    return notice(
      feed?.error === 'rate-limit'
        ? 'NASA data limit reached — asteroid data will be back soon. A free NASA API key raises the limit.'
        : 'Could not load near-Earth asteroid data right now. Please try again later.'
    );
  }

  const groups = feed.near_earth_objects || {};
  const all = Object.values(groups)
    .flat()
    .filter(n => n.close_approach_data?.length);

  all.sort((a, b) =>
    Number(a.close_approach_data[0].miss_distance.kilometers) -
    Number(b.close_approach_data[0].miss_distance.kilometers)
  );

  const top = all.slice(0, MAX_CARDS);
  if (top.length === 0) {
    return notice('Good news — no asteroids are making close approaches to Earth this week.');
  }

  const ul = document.createElement('ul');
  ul.className = 'live-feed__list';
  top.forEach(neo => ul.appendChild(buildCard(neo)));
  return ul;
}

function buildCard(neo) {
  const ca = neo.close_approach_data[0];
  const hazardous = !!neo.is_potentially_hazardous_asteroid;

  const li = document.createElement('li');
  li.className = 'live-feed__card' + (hazardous ? ' live-feed__card--hazardous' : '');

  const name = document.createElement('h3');
  name.className = 'live-feed__card-name';
  // Untrusted external string — textContent only, never innerHTML.
  name.textContent = String(neo.name || 'Unknown asteroid').replace(/[()]/g, '').trim() + ' ';
  if (hazardous) {
    const badge = document.createElement('span');
    badge.className = 'live-feed__badge';
    badge.textContent = 'Potentially hazardous';
    name.appendChild(badge);
  }
  li.appendChild(name);

  const dia = neo.estimated_diameter?.meters;
  const stats = document.createElement('div');
  stats.className = 'live-feed__stats';
  stats.appendChild(stat('Closest approach', formatDate(ca.close_approach_date)));
  stats.appendChild(stat('Miss distance',
    `${compactKm(Number(ca.miss_distance.kilometers))} · ${Number(ca.miss_distance.lunar).toFixed(1)} lunar`));
  stats.appendChild(stat('Size', dia
    ? `${Math.round(dia.estimated_diameter_min)}–${Math.round(dia.estimated_diameter_max)} m`
    : '—'));
  stats.appendChild(stat('Speed',
    `${Math.round(Number(ca.relative_velocity.kilometers_per_hour)).toLocaleString('en-US')} km/h`));
  li.appendChild(stats);

  return li;
}

function stat(label, value) {
  const wrap = document.createElement('div');
  wrap.className = 'live-feed__stat';
  const l = document.createElement('span');
  l.className = 'live-feed__stat-label';
  l.textContent = label;
  const v = document.createElement('span');
  v.className = 'live-feed__stat-value';
  v.textContent = value;
  wrap.append(l, v);
  return wrap;
}

function notice(msg) {
  const p = document.createElement('p');
  p.className = 'live-feed__notice';
  p.textContent = msg;
  return p;
}

// --- formatting helpers ---

function compactKm(km) {
  if (!isFinite(km)) return '—';
  if (km >= 1e9) return `${(km / 1e9).toFixed(1)}B km`;
  if (km >= 1e6) return `${(km / 1e6).toFixed(1)}M km`;
  if (km >= 1e3) return `${Math.round(km / 1e3).toLocaleString('en-US')}k km`;
  return `${Math.round(km)} km`;
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr + 'T12:00:00Z');
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function todayUTC() {
  const d = new Date();
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}

function offsetUTC(dateStr, days) {
  const d = new Date(dateStr + 'T12:00:00Z');
  d.setUTCDate(d.getUTCDate() + days);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}
