/**
 * Filter celebrity heights to ensure at least 2 inches difference between ANY two people
 * @param {Array} data - Array of {Name, "Height (cm)"}
 * @param {number} count - Number of items to select
 * @returns {Array} Filtered array of items
 */
export function filterHeights(data, count = 4) {
  if (!data || data.length < count) {
    console.warn('Insufficient data for height filtering');
    return data || [];
  }

  // Filter out items with missing name or height
  const validData = data.filter(item =>
    (item.Name || item.name) && item['Height (cm)'] && !isNaN(item['Height (cm)'])
  );

  if (validData.length < count) {
    console.warn('Insufficient valid height data after filtering');
    return validData;
  }

  // Sort by height (cm)
  const sorted = [...validData].sort((a, b) => a['Height (cm)'] - b['Height (cm)']);

  const minDiffCm = 5; // ~2 inches

  const maxAttempts = 100;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    // Random sampling approach
    const selected = [];
    const available = [...sorted];

    while (selected.length < count && available.length > 0) {
      const randomIndex = Math.floor(Math.random() * available.length);
      const candidate = available[randomIndex];

      // Check if candidate maintains 2+ inch (~5cm) gap with all selected
      const isValid = selected.every(item =>
        Math.abs(candidate['Height (cm)'] - item['Height (cm)']) >= minDiffCm
      );

      if (isValid || selected.length === 0) {
        selected.push(candidate);
      }

      available.splice(randomIndex, 1);
    }

    if (selected.length === count) {
      // Sort by height for correct order (shortest to tallest)
      return selected.sort((a, b) => a['Height (cm)'] - b['Height (cm)']);
    }
  }

  // Fallback: use sliding window approach
  const step = Math.floor(sorted.length / count);
  const result = [];
  for (let i = 0; i < count && i * step < sorted.length; i++) {
    result.push(sorted[i * step]);
  }
  return result;
}

/**
 * Calculate age from birthdate
 * @param {string} birthdate - Date string (e.g., "May 31, 1930" or "1930-05-31")
 * @returns {number} Age in years
 */
function calculateAge(birthdate) {
  const birth = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

/**
 * Filter celebrity birthdays with age gap rules
 * @param {Array} data - Array of {Name, Birthdate, Category}
 * @param {number} count - Number of items to select
 * @returns {Array} Filtered array with ages calculated
 */
export function filterBirthdays(data, count = 4) {
  if (!data || data.length < count) {
    console.warn('Insufficient data for birthday filtering');
    return data || [];
  }

  // Filter out items with missing name or birthdate
  const validData = data.filter(item =>
    (item.Name || item.name) && item.Birthdate
  );

  if (validData.length < count) {
    console.warn('Insufficient valid birthday data after filtering');
    return validData;
  }

  // Calculate ages
  const withAges = validData.map(item => ({
    ...item,
    age: calculateAge(item.Birthdate)
  }));

  // Sort by age (youngest to oldest)
  const sorted = withAges.sort((a, b) => a.age - b.age);

  const maxAttempts = 100;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const selected = [];
    const available = [...sorted];

    while (selected.length < count && available.length > 0) {
      const randomIndex = Math.floor(Math.random() * available.length);
      const candidate = available[randomIndex];

      // Check age gap rules: 3+ years for 40+, 1+ year for under 40
      const isValid = selected.every(item => {
        const ageDiff = Math.abs(candidate.age - item.age);
        const minGap = (candidate.age >= 40 && item.age >= 40) ? 3 : 1;
        return ageDiff >= minGap;
      });

      if (isValid || selected.length === 0) {
        selected.push(candidate);
      }

      available.splice(randomIndex, 1);
    }

    if (selected.length === count) {
      // Sort by age (youngest to oldest)
      return selected.sort((a, b) => a.age - b.age);
    }
  }

  // Fallback: evenly spaced ages
  const step = Math.floor(sorted.length / count);
  const result = [];
  for (let i = 0; i < count && i * step < sorted.length; i++) {
    result.push(sorted[i * step]);
  }
  return result;
}

/**
 * Filter items by date (generic for movies, TV shows, songs, inventions)
 * @param {Array} data - Array with date/year field
 * @param {string} dateField - Name of the date field
 * @param {number} count - Number of items to select
 * @returns {Array} Filtered array sorted by date
 */
export function filterByDate(data, dateField, count = 4) {
  if (!data || data.length < count) {
    console.warn(`Insufficient data for ${dateField} filtering`);
    return data || [];
  }

  // Filter out items with invalid dates/years or missing display fields
  const validData = data.filter(item => {
    // Check for required display field (Title, name, Invention, etc.)
    const hasName = item.Title || item.name || item.Invention;
    if (!hasName) return false;

    const dateValue = item[dateField];
    if (!dateValue) return false;

    // Handle both year numbers and date strings
    if (typeof dateValue === 'number') {
      return dateValue > 0;
    }
    return !isNaN(new Date(dateValue).getTime());
  });

  if (validData.length < count) {
    return validData;
  }

  // Sort by date/year
  const sorted = validData.sort((a, b) => {
    const aValue = typeof a[dateField] === 'number' ? a[dateField] : new Date(a[dateField]).getFullYear();
    const bValue = typeof b[dateField] === 'number' ? b[dateField] : new Date(b[dateField]).getFullYear();
    return aValue - bValue;
  });

  // Simple random selection with spread
  const maxAttempts = 50;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const selected = [];
    const available = [...sorted];

    while (selected.length < count && available.length > 0) {
      const randomIndex = Math.floor(Math.random() * available.length);
      const candidate = available[randomIndex];

      // Ensure at least 1 year gap between items
      const isValid = selected.every(item => {
        const candidateYear = typeof candidate[dateField] === 'number'
          ? candidate[dateField]
          : new Date(candidate[dateField]).getFullYear();
        const itemYear = typeof item[dateField] === 'number'
          ? item[dateField]
          : new Date(item[dateField]).getFullYear();
        const diff = Math.abs(candidateYear - itemYear);
        return diff >= 1;
      });

      if (isValid || selected.length === 0) {
        selected.push(candidate);
      }

      available.splice(randomIndex, 1);
    }

    if (selected.length === count) {
      return selected.sort((a, b) => {
        const aValue = typeof a[dateField] === 'number' ? a[dateField] : new Date(a[dateField]).getFullYear();
        const bValue = typeof b[dateField] === 'number' ? b[dateField] : new Date(b[dateField]).getFullYear();
        return aValue - bValue;
      });
    }
  }

  // Fallback: evenly spaced
  const step = Math.floor(sorted.length / count);
  const result = [];
  for (let i = 0; i < count && i * step < sorted.length; i++) {
    result.push(sorted[i * step]);
  }
  return result;
}
