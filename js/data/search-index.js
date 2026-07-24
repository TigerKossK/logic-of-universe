import { STARS_CONTENT } from './stars-content.js';
import { STELLAR_CONTENT } from './stellar-content.js';
import { BLACKHOLES_CONTENT } from './blackholes-content.js';
import { EXPLOSIONS_CONTENT } from './explosions-content.js';
import { PLANETS } from './planets.js';

// Flatten all content into a single searchable index
const contentEntries = [
  ...STARS_CONTENT,
  ...STELLAR_CONTENT,
  ...BLACKHOLES_CONTENT,
  ...EXPLOSIONS_CONTENT,
].map(item => ({
  title: item.title,
  excerpt: item.excerpt,
  page: item.page,
  sectionId: item.id,
  level: item.level,
  keywords: item.keywords,
}));

// Add planet entries pointing to solar-system.html
const planetEntries = PLANETS.map(planet => ({
  title: planet.name,
  excerpt: planet.description.beginner,
  page: 'solar-system.html',
  sectionId: `planet-card-${planet.id}`,
  level: 'beginner',
  keywords: planet.keywords,
}));

export const SEARCH_INDEX = [...contentEntries, ...planetEntries];
