import { filterHeights, filterBirthdays, filterByDate } from '../utils/filters';

/**
 * Category definitions for the trivia game
 * Each category specifies how to load, filter, display, and explain data
 */
export const categories = [
  {
    id: 'celebrity_heights',
    name: 'Celebrity Heights',
    dataKey: 'celebrity_heights',
    prompt: 'Order these celebrities by height (shortest to tallest)',
    sortKey: 'Height (cm)',
    displayField: 'Name',
    filterFunction: (data) => filterHeights(data, 4),
    formatDisplay: (item) => item.Name || item.name || 'Unknown',
    formatExplanation: (items) => {
      const heights = items.map(item =>
        `${item.Name || item.name} (${item['Height (ft/in)']})`
      ).join(', ');
      return `Heights from shortest to tallest: ${heights}`;
    },
    sortOrder: 'asc'
  },
  {
    id: 'celebrity_birthdays',
    name: 'Celebrity Birthdays',
    dataKey: 'celebrity_birthdays',
    prompt: 'Order these celebrities by age (youngest to oldest)',
    sortKey: 'age',
    displayField: 'Name',
    filterFunction: (data) => filterBirthdays(data, 4),
    formatDisplay: (item) => item.Name || item.name || 'Unknown',
    formatExplanation: (items) => {
      const ages = items.map(item =>
        `${item.Name || item.name} is ${item.age} years old`
      ).join(', ');
      return `Ages from youngest to oldest: ${ages}`;
    },
    sortOrder: 'asc'
  },
  {
    id: 'famous_tv_shows',
    name: 'Famous TV Shows',
    dataKey: 'famous_tv_shows',
    prompt: 'Order these TV shows by premiere date (oldest to newest)',
    sortKey: 'Premiered',
    displayField: 'Title',
    filterFunction: (data) => filterByDate(data, 'Premiered', 4),
    formatDisplay: (item) => item.Title || item.title || 'Unknown',
    formatExplanation: (items) => {
      const shows = items.map(item => {
        const year = typeof item.Premiered === 'number' ? item.Premiered : new Date(item.Premiered).getFullYear();
        return `${item.Title || item.title} (${year})`;
      }).join(', ');
      return `Premiere dates from oldest to newest: ${shows}`;
    },
    sortOrder: 'asc'
  },
  {
    id: 'famous_movies',
    name: 'Famous Movies',
    dataKey: 'famous_movies',
    prompt: 'Order these movies by release year (oldest to newest)',
    sortKey: 'Year',
    displayField: 'Title',
    filterFunction: (data) => filterByDate(data, 'Year', 4),
    formatDisplay: (item) => item.Title || item.title || 'Unknown',
    formatExplanation: (items) => {
      const movies = items.map(item =>
        `${item.Title || item.title} (${item.Year})`
      ).join(', ');
      return `Release years from oldest to newest: ${movies}`;
    },
    sortOrder: 'asc'
  },
  {
    id: 'iconic_songs',
    name: 'Iconic Songs',
    dataKey: 'iconic_songs',
    prompt: 'Order these songs by release year (oldest to newest)',
    sortKey: 'Year',
    displayField: 'Title',
    filterFunction: (data) => filterByDate(data, 'Year', 4),
    formatDisplay: (item) => `${item.Title || item.title || 'Unknown'} - ${item.Artist || 'Unknown'}`,
    formatExplanation: (items) => {
      const songs = items.map(item =>
        `"${item.Title || item.title}" by ${item.Artist} (${item.Year})`
      ).join(', ');
      return `Release years from oldest to newest: ${songs}`;
    },
    sortOrder: 'asc'
  },
  {
    id: 'major_inventions',
    name: 'Major Inventions',
    dataKey: 'major_inventions',
    prompt: 'Order these inventions by year (oldest to newest)',
    sortKey: 'Year',
    displayField: 'Invention',
    filterFunction: (data) => filterByDate(data, 'Year', 4),
    formatDisplay: (item) => item.Invention || item.invention || 'Unknown',
    formatExplanation: (items) => {
      const inventions = items.map(item =>
        `${item.Invention || item.invention} (${item.Year})`
      ).join(', ');
      return `Invention years from oldest to newest: ${inventions}`;
    },
    sortOrder: 'asc'
  }
];

/**
 * Get a random category with weighted selection
 * Heights appear only 5% of the time, others 19% each
 * @returns {Object} Random category definition
 */
export function getRandomCategory() {
  // Define weights for each category (total = 100)
  const weights = {
    'celebrity_heights': 5,      // 5% chance
    'celebrity_birthdays': 19,   // 19% chance
    'famous_tv_shows': 19,       // 19% chance
    'famous_movies': 19,         // 19% chance
    'iconic_songs': 19,          // 19% chance
    'major_inventions': 19       // 19% chance
  };

  // Generate random number between 0 and 100
  let random = Math.random() * 100;

  // Select category based on weights
  for (const category of categories) {
    const weight = weights[category.id];
    if (random < weight) {
      return category;
    }
    random -= weight;
  }

  // Fallback (should never reach here)
  return categories[1]; // Return birthdays as safe fallback
}

/**
 * Get category by ID
 * @param {string} id - Category ID
 * @returns {Object} Category definition
 */
export function getCategoryById(id) {
  return categories.find(cat => cat.id === id);
}
