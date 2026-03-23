const STATS_KEY = 'trivia-game-stats';

const defaultStats = {
  overall: {
    totalGames: 0,
    correct: 0,
    incorrect: 0,
    winPercentage: 0
  },
  byCategory: {
    'celebrity_heights': { played: 0, correct: 0 },
    'celebrity_birthdays': { played: 0, correct: 0 },
    'famous_tv_shows': { played: 0, correct: 0 },
    'famous_movies': { played: 0, correct: 0 },
    'iconic_songs': { played: 0, correct: 0 },
    'major_inventions': { played: 0, correct: 0 }
  },
  lastUpdated: Date.now()
};

/**
 * Load statistics from localStorage
 * @returns {Object} Statistics object
 */
export function loadStats() {
  try {
    const stored = localStorage.getItem(STATS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading stats:', error);
  }
  return { ...defaultStats };
}

/**
 * Save statistics to localStorage
 * @param {Object} stats - Statistics object to save
 */
export function saveStats(stats) {
  try {
    stats.lastUpdated = Date.now();
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error('Error saving stats:', error);
  }
}

/**
 * Update statistics after a game
 * @param {string} categoryId - Category ID
 * @param {boolean} isCorrect - Whether the answer was correct
 * @returns {Object} Updated statistics
 */
export function updateStats(categoryId, isCorrect) {
  const stats = loadStats();

  // Update overall stats
  stats.overall.totalGames++;
  if (isCorrect) {
    stats.overall.correct++;
  } else {
    stats.overall.incorrect++;
  }
  stats.overall.winPercentage =
    Math.round((stats.overall.correct / stats.overall.totalGames) * 100);

  // Update category stats
  if (stats.byCategory[categoryId]) {
    stats.byCategory[categoryId].played++;
    if (isCorrect) {
      stats.byCategory[categoryId].correct++;
    }
  }

  saveStats(stats);
  return stats;
}

/**
 * Get overall statistics
 * @returns {Object} Overall stats
 */
export function getOverallStats() {
  const stats = loadStats();
  return stats.overall;
}

/**
 * Get category statistics
 * @returns {Object} Category stats with percentages
 */
export function getCategoryStats() {
  const stats = loadStats();
  const categoryStats = [];

  Object.entries(stats.byCategory).forEach(([id, data]) => {
    const percentage = data.played > 0
      ? Math.round((data.correct / data.played) * 100)
      : 0;

    categoryStats.push({
      id,
      played: data.played,
      correct: data.correct,
      incorrect: data.played - data.correct,
      percentage
    });
  });

  // Sort by percentage (best first)
  return categoryStats.sort((a, b) => b.percentage - a.percentage);
}

/**
 * Reset all statistics
 */
export function resetStats() {
  try {
    localStorage.removeItem(STATS_KEY);
  } catch (error) {
    console.error('Error resetting stats:', error);
  }
}

/**
 * Get category name from ID
 * @param {string} categoryId - Category ID
 * @returns {string} Human-readable category name
 */
export function getCategoryName(categoryId) {
  const names = {
    'celebrity_heights': 'Heights',
    'celebrity_birthdays': 'Birthdays',
    'famous_tv_shows': 'TV Shows',
    'famous_movies': 'Movies',
    'iconic_songs': 'Songs',
    'major_inventions': 'Inventions'
  };
  return names[categoryId] || categoryId;
}
