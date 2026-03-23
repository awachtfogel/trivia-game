import Papa from 'papaparse';

/**
 * Load and parse a CSV file
 * @param {string} filename - Name of CSV file in src/data/
 * @returns {Promise<Array>} Parsed CSV data
 */
export async function loadCSV(filename) {
  try {
    // Use fetch in development, import in production
    const isDev = import.meta.env.DEV;
    let csvText;

    if (isDev) {
      // Development: fetch from public/dev path
      const response = await fetch(`/src/data/${filename}`);
      if (!response.ok) {
        throw new Error(`Failed to load ${filename}: ${response.statusText}`);
      }
      csvText = await response.text();
    } else {
      // Production: use dynamic import
      const modules = import.meta.glob('../data/*.csv', { query: '?raw', import: 'default' });
      const modulePath = `../data/${filename}`;

      if (modules[modulePath]) {
        csvText = await modules[modulePath]();
      } else {
        throw new Error(`CSV module not found: ${filename}`);
      }
    }

    // Remove BOM if present
    if (csvText.charCodeAt(0) === 0xFEFF) {
      csvText = csvText.slice(1);
    }

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
