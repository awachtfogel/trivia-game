import Papa from 'papaparse';

/**
 * Load and parse a CSV file
 * @param {string} filename - Name of CSV file in src/data/
 * @returns {Promise<Array>} Parsed CSV data
 */
export async function loadCSV(filename) {
  try {
    // Try to dynamically import the CSV file
    const modules = import.meta.glob('../data/*.csv', { as: 'raw', eager: false });
    const modulePath = `../data/${filename}`;

    if (modules[modulePath]) {
      const csvText = await modules[modulePath]();

      return new Promise((resolve, reject) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true,
          complete: (results) => {
            if (results.errors.length > 0) {
              console.error(`Errors parsing ${filename}:`, results.errors);
            }
            console.log(`Successfully loaded ${filename}: ${results.data.length} rows`);
            resolve(results.data);
          },
          error: (error) => {
            console.error(`Papa Parse error for ${filename}:`, error);
            reject(error);
          }
        });
      });
    } else {
      console.error(`CSV module not found: ${filename}`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading CSV ${filename}:`, error);
    return [];
  }
}

/**
 * Load all category CSV files
 * @returns {Promise<Object>} Object with category data
 */
export async function loadAllCategories() {
  const categories = {
    celebrity_heights: await loadCSV('celebrity_heights.csv'),
    celebrity_birthdays: await loadCSV('celebrity_birthdays.csv'),
    famous_tv_shows: await loadCSV('famous_tv_shows.csv'),
    famous_movies: await loadCSV('famous_movies.csv'),
    iconic_songs: await loadCSV('iconic_songs.csv'),
    major_inventions: await loadCSV('major_inventions.csv')
  };

  // Log loaded data for debugging
  Object.keys(categories).forEach(key => {
    console.log(`Loaded ${key}: ${categories[key].length} items`);
  });

  return categories;
}
