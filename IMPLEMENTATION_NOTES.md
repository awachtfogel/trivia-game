# Trivia Game - CSV Implementation Notes

## Overview
The trivia game has been updated to use dynamic CSV data instead of hardcoded questions. The game now randomly selects from 6 different categories and generates challenges with intelligent filtering rules.

## Implementation Complete ✅

### What Was Built

1. **CSV Parsing System** (`src/utils/csvParser.js`)
   - Loads all CSV files using Vite's `import.meta.glob`
   - Parses with Papa Parse library
   - Handles errors gracefully

2. **Filtering Logic** (`src/utils/filters.js`)
   - **Celebrity Heights**: Ensures 2+ inch (~5cm) gaps between ANY two people
   - **Celebrity Birthdays**: Age-based gaps (3+ years for 40+, 1+ year for younger)
   - **Date-based**: Generic filter for TV shows, movies, songs, inventions (1+ year gaps)

3. **Category Definitions** (`src/data/categories.js`)
   - 6 categories with unique prompts and formatting
   - Custom display logic for each category
   - Intelligent explanations after answers

4. **Updated Components**
   - `App.jsx`: Loads CSV data on mount, generates questions from categories
   - Loading screen while data loads
   - Random category selection with no repeats until all used

## Categories Implemented

### 1. Celebrity Heights
- **CSV**: `celebrity_heights.csv`
- **Columns**: Name, Height (cm), Height (ft/in), Category
- **Filter**: 5cm (≈2 inch) minimum difference between any two people
- **Display**: Celebrity names
- **Explanation**: Shows names with heights in ft/in

### 2. Celebrity Birthdays
- **CSV**: `celebrity_birthdays.csv`
- **Columns**: Name, Birthdate, Category
- **Filter**: Age gaps (3+ years for 40+, 1+ year for under 40)
- **Display**: Name with calculated age (e.g., "Tom Hanks (68 years old)")
- **Explanation**: Lists ages from youngest to oldest

### 3. Famous TV Shows
- **CSV**: `famous_tv_shows.csv`
- **Columns**: Title, Premiered, Ended, Genre, Network/Platform
- **Filter**: 1+ year gap between premiere dates
- **Display**: Show titles
- **Explanation**: Shows with premiere years

### 4. Famous Movies
- **CSV**: `famous_movies.csv`
- **Columns**: name, release_date
- **Filter**: 1+ year gap between releases
- **Display**: Movie names
- **Explanation**: Movies with release years

### 5. Iconic Songs
- **CSV**: `iconic_songs.csv`
- **Columns**: Title, Artist, Year, Genre
- **Filter**: 1+ year gap between releases
- **Display**: "Title - Artist"
- **Explanation**: Songs with artists and years

### 6. Major Inventions
- **CSV**: `major_inventions.csv`
- **Columns**: Invention, Year, Inventor / Creator, Field
- **Filter**: 1+ year gap between invention dates
- **Display**: Invention names
- **Explanation**: Inventions with years

## How It Works

1. **App starts** → Loads all 6 CSV files
2. **User clicks "Start Game"** → Random category selected
3. **Category filter applied** → 4 items selected with proper gaps
4. **Items shuffled** → Displayed to user
5. **User sorts** → Submits answer
6. **Result shown** → Explanation with correct order
7. **Play Again** → New random category (won't repeat until all 6 used)

## CSV File Format Notes

- All CSV files should have headers
- Papa Parse configured with:
  - `header: true` - First row is column names
  - `skipEmptyLines: true` - Ignores blank rows
  - `dynamicTyping: true` - Converts numbers automatically

## Testing

To test the game:
1. Go to `http://localhost:5173/`
2. Click "Start Game"
3. Try sorting items
4. Check the explanation matches the correct order
5. Click "Play Again" multiple times to see different categories
6. Verify filtering rules are working (no people too close in height, proper age gaps, etc.)

## Future Improvements

- Add more categories
- Expand CSV files with more data
- Add difficulty levels (more items, stricter filtering)
- Track statistics across sessions
- Category-specific animations or themes
