const IMAGE_API_BASE = 'https://images-api.nasa.gov';
const APOD_BASE = 'https://api.nasa.gov/planetary/apod';
const NEO_BASE = 'https://api.nasa.gov/neo/rest/v1/feed';
const CACHE_PREFIX = 'lou-nasa-';
const APOD_CACHE_PREFIX = 'lou-apod-';
const NEO_CACHE_PREFIX = 'lou-neo-';
const TIMEOUT_MS = 8000;
const RETRY_DELAY_MS = 1500;

// Persistent cache (localStorage) — survives across sessions so repeat views are
// instant and don't spend the API's limited daily quota.
function readCache(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCache(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage full */ }
}

function todayUTC() {
  const d = new Date();
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}

async function fetchWithRetry(url, retries = 1) {
  const attempt = async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      return res;
    } catch (err) {
      clearTimeout(timeoutId);
      throw err;
    }
  };

  try {
    return await attempt();
  } catch (err) {
    if (retries > 0) {
      await new Promise(r => setTimeout(r, RETRY_DELAY_MS));
      return attempt();
    }
    throw err;
  }
}

/**
 * Search NASA Image Library for images matching a query.
 * Results are cached persistently in localStorage across sessions.
 * Returns an array of { title, imageUrl, description } on success,
 * or { error: 'rate-limit' | 'network' } on failure.
 */
export async function searchNasaImages(query, limit = 5) {
  const cacheKey = `${CACHE_PREFIX}${query}|${limit}`;
  const cached = readCache(cacheKey);
  if (cached) return cached;

  let result = await runImageSearch(query, limit);

  // Long, over-specific queries can AND their way to zero results — retry
  // once with just the first 3 words before giving up.
  if (Array.isArray(result) && result.length === 0) {
    const trimmed = query.split(/\s+/).slice(0, 3).join(' ');
    if (trimmed && trimmed !== query) {
      result = await runImageSearch(trimmed, limit);
    }
  }

  if (Array.isArray(result)) writeCache(cacheKey, result);
  return result;
}

async function runImageSearch(query, limit) {
  try {
    const url = `${IMAGE_API_BASE}/search?q=${encodeURIComponent(query)}&media_type=image&page_size=${limit}`;
    const res = await fetchWithRetry(url);
    if (!res.ok) {
      console.warn(`NASA Image API error ${res.status} for query: "${query}"`);
      if (res.status === 429) return { error: 'rate-limit' };
      return { error: 'network' };
    }

    const data = await res.json();
    const items = data?.collection?.items ?? [];

    return items.slice(0, limit).map(item => ({
      title: item.data?.[0]?.title ?? '',
      description: item.data?.[0]?.description ?? '',
      imageUrl: item.links?.[0]?.href ?? null,
    })).filter(img => img.imageUrl);
  } catch (err) {
    console.warn(`NASA Image API fetch failed for "${query}":`, err.message);
    return { error: 'network' };
  }
}

/**
 * Fetch an Astronomy Picture of the Day.
 * Pass date as 'YYYY-MM-DD' for a specific day, or omit for today.
 * Returns APOD object on success, or { error: 'rate-limit' | 'not-found' | 'network' } on failure.
 */
export async function fetchAPOD(apiKey = 'DEMO_KEY', date = null) {
  // APOD for a given date is immutable, so a cached hit is served instantly
  // and never re-spends the API quota.
  const resolvedDate = date || todayUTC();
  const cacheKey = `${APOD_CACHE_PREFIX}${resolvedDate}`;
  const cached = readCache(cacheKey);
  if (cached) return cached;

  try {
    const dateParam = date ? `&date=${encodeURIComponent(date)}` : '';
    const url = `${APOD_BASE}?api_key=${encodeURIComponent(apiKey)}${dateParam}`;
    const res = await fetchWithRetry(url);
    if (!res.ok) {
      console.warn(`APOD API error ${res.status} — check your NASA_API_KEY`);
      if (res.status === 429) return { error: 'rate-limit' };
      if (res.status === 404) return { error: 'not-found' };
      return { error: 'network', status: res.status };
    }
    const data = await res.json();
    writeCache(cacheKey, data); // only successful responses are cached
    return data;
  } catch (err) {
    console.warn('APOD fetch failed:', err.message);
    return { error: 'network' };
  }
}

/**
 * Fetch near-Earth objects (asteroids) for a date range from NASA's NeoWs feed.
 * The range is inclusive and NeoWs caps it at 7 days. Dates are 'YYYY-MM-DD'.
 * Cached persistently per date range so the day's feed is fetched once and doesn't
 * burn the shared DEMO_KEY quota on every homepage visit.
 * Returns the raw feed object on success, or { error: 'rate-limit' | 'not-found' | 'network' }.
 */
export async function fetchNearEarthObjects(apiKey = 'DEMO_KEY', startDate, endDate) {
  const start = startDate || todayUTC();
  const end = endDate || start;
  const cacheKey = `${NEO_CACHE_PREFIX}${start}|${end}`;
  const cached = readCache(cacheKey);
  if (cached) return cached;

  try {
    const url = `${NEO_BASE}?start_date=${encodeURIComponent(start)}&end_date=${encodeURIComponent(end)}&api_key=${encodeURIComponent(apiKey)}`;
    const res = await fetchWithRetry(url);
    if (!res.ok) {
      console.warn(`NeoWs API error ${res.status} — check your NASA_API_KEY`);
      if (res.status === 429) return { error: 'rate-limit' };
      if (res.status === 404) return { error: 'not-found' };
      return { error: 'network', status: res.status };
    }
    const data = await res.json();
    writeCache(cacheKey, data); // only successful responses are cached
    return data;
  } catch (err) {
    console.warn('NeoWs fetch failed:', err.message);
    return { error: 'network' };
  }
}
