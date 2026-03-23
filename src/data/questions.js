export const questions = [
  {
    id: 1,
    prompt: "Order these planets by distance from the Sun (closest to farthest)",
    items: [
      { id: 1, text: "Mercury", correctPosition: 0 },
      { id: 2, text: "Venus", correctPosition: 1 },
      { id: 3, text: "Earth", correctPosition: 2 },
      { id: 4, text: "Mars", correctPosition: 3 }
    ],
    explanation: "The order of the first four planets from the Sun is: Mercury, Venus, Earth, Mars.",
    category: "science",
    difficulty: "easy"
  },
  {
    id: 2,
    prompt: "Order these events chronologically (earliest to latest)",
    items: [
      { id: 1, text: "American Revolution", correctPosition: 0 },
      { id: 2, text: "French Revolution", correctPosition: 1 },
      { id: 3, text: "World War I", correctPosition: 2 },
      { id: 4, text: "World War II", correctPosition: 3 }
    ],
    explanation: "American Revolution (1765-1783), French Revolution (1789-1799), World War I (1914-1918), World War II (1939-1945).",
    category: "history",
    difficulty: "medium"
  },
  {
    id: 3,
    prompt: "Order these countries by population (smallest to largest)",
    items: [
      { id: 1, text: "Iceland", correctPosition: 0 },
      { id: 2, text: "New Zealand", correctPosition: 1 },
      { id: 3, text: "Australia", correctPosition: 2 },
      { id: 4, text: "Canada", correctPosition: 3 }
    ],
    explanation: "Iceland (~370K), New Zealand (~5M), Australia (~26M), Canada (~39M).",
    category: "geography",
    difficulty: "medium"
  },
  {
    id: 4,
    prompt: "Order these smartphone operating systems by release date (oldest to newest)",
    items: [
      { id: 1, text: "Palm OS", correctPosition: 0 },
      { id: 2, text: "BlackBerry OS", correctPosition: 1 },
      { id: 3, text: "iOS", correctPosition: 2 },
      { id: 4, text: "Android", correctPosition: 3 }
    ],
    explanation: "Palm OS (1996), BlackBerry OS (1999), iOS (2007), Android (2008).",
    category: "technology",
    difficulty: "hard"
  },
  {
    id: 5,
    prompt: "Order these movies by box office earnings (lowest to highest)",
    items: [
      { id: 1, text: "Toy Story", correctPosition: 0 },
      { id: 2, text: "Finding Nemo", correctPosition: 1 },
      { id: 3, text: "The Lion King (1994)", correctPosition: 2 },
      { id: 4, text: "Frozen", correctPosition: 3 }
    ],
    explanation: "Toy Story ($373M), Finding Nemo ($871M), The Lion King ($968M), Frozen ($1.3B).",
    category: "entertainment",
    difficulty: "hard"
  },
  {
    id: 6,
    prompt: "Order these layers of Earth's atmosphere (lowest to highest)",
    items: [
      { id: 1, text: "Troposphere", correctPosition: 0 },
      { id: 2, text: "Stratosphere", correctPosition: 1 },
      { id: 3, text: "Mesosphere", correctPosition: 2 },
      { id: 4, text: "Thermosphere", correctPosition: 3 }
    ],
    explanation: "From lowest to highest: Troposphere (0-12km), Stratosphere (12-50km), Mesosphere (50-85km), Thermosphere (85-600km).",
    category: "science",
    difficulty: "medium"
  },
  {
    id: 7,
    prompt: "Order these video game consoles by release date (oldest to newest)",
    items: [
      { id: 1, text: "Nintendo 64", correctPosition: 0 },
      { id: 2, text: "PlayStation 2", correctPosition: 1 },
      { id: 3, text: "Xbox 360", correctPosition: 2 },
      { id: 4, text: "PlayStation 4", correctPosition: 3 }
    ],
    explanation: "Nintendo 64 (1996), PlayStation 2 (2000), Xbox 360 (2005), PlayStation 4 (2013).",
    category: "entertainment",
    difficulty: "medium"
  },
  {
    id: 8,
    prompt: "Order these programming languages by creation date (oldest to newest)",
    items: [
      { id: 1, text: "C", correctPosition: 0 },
      { id: 2, text: "C++", correctPosition: 1 },
      { id: 3, text: "Java", correctPosition: 2 },
      { id: 4, text: "Python", correctPosition: 3 }
    ],
    explanation: "C (1972), C++ (1985), Python (1991), Java (1995).",
    category: "technology",
    difficulty: "medium"
  },
  {
    id: 9,
    prompt: "Order these mountains by height (shortest to tallest)",
    items: [
      { id: 1, text: "Mont Blanc", correctPosition: 0 },
      { id: 2, text: "Mount Kilimanjaro", correctPosition: 1 },
      { id: 3, text: "Mount McKinley", correctPosition: 2 },
      { id: 4, text: "Mount Everest", correctPosition: 3 }
    ],
    explanation: "Mont Blanc (4,808m), Mount Kilimanjaro (5,895m), Mount McKinley/Denali (6,190m), Mount Everest (8,849m).",
    category: "geography",
    difficulty: "easy"
  },
  {
    id: 10,
    prompt: "Order these Harry Potter books by publication date (first to last)",
    items: [
      { id: 1, text: "Philosopher's Stone", correctPosition: 0 },
      { id: 2, text: "Chamber of Secrets", correctPosition: 1 },
      { id: 3, text: "Prisoner of Azkaban", correctPosition: 2 },
      { id: 4, text: "Goblet of Fire", correctPosition: 3 }
    ],
    explanation: "Philosopher's Stone (1997), Chamber of Secrets (1998), Prisoner of Azkaban (1999), Goblet of Fire (2000).",
    category: "entertainment",
    difficulty: "easy"
  },
  {
    id: 11,
    prompt: "Order these oceans by size (smallest to largest)",
    items: [
      { id: 1, text: "Arctic Ocean", correctPosition: 0 },
      { id: 2, text: "Indian Ocean", correctPosition: 1 },
      { id: 3, text: "Atlantic Ocean", correctPosition: 2 },
      { id: 4, text: "Pacific Ocean", correctPosition: 3 }
    ],
    explanation: "Arctic (14M km²), Indian (70M km²), Atlantic (85M km²), Pacific (165M km²).",
    category: "geography",
    difficulty: "easy"
  },
  {
    id: 12,
    prompt: "Order these inventions chronologically (oldest to newest)",
    items: [
      { id: 1, text: "Telegraph", correctPosition: 0 },
      { id: 2, text: "Telephone", correctPosition: 1 },
      { id: 3, text: "Radio", correctPosition: 2 },
      { id: 4, text: "Television", correctPosition: 3 }
    ],
    explanation: "Telegraph (1837), Telephone (1876), Radio (1895), Television (1927).",
    category: "technology",
    difficulty: "medium"
  },
  {
    id: 13,
    prompt: "Order these Marvel Cinematic Universe phases chronologically",
    items: [
      { id: 1, text: "Iron Man", correctPosition: 0 },
      { id: 2, text: "The Avengers", correctPosition: 1 },
      { id: 3, text: "Avengers: Age of Ultron", correctPosition: 2 },
      { id: 4, text: "Avengers: Infinity War", correctPosition: 3 }
    ],
    explanation: "Iron Man (2008), The Avengers (2012), Age of Ultron (2015), Infinity War (2018).",
    category: "entertainment",
    difficulty: "easy"
  },
  {
    id: 14,
    prompt: "Order these stages of human development (earliest to latest)",
    items: [
      { id: 1, text: "Infancy", correctPosition: 0 },
      { id: 2, text: "Childhood", correctPosition: 1 },
      { id: 3, text: "Adolescence", correctPosition: 2 },
      { id: 4, text: "Adulthood", correctPosition: 3 }
    ],
    explanation: "Human development progresses through: Infancy (0-2), Childhood (2-12), Adolescence (12-18), Adulthood (18+).",
    category: "science",
    difficulty: "easy"
  },
  {
    id: 15,
    prompt: "Order these ancient wonders chronologically (oldest to newest construction)",
    items: [
      { id: 1, text: "Great Pyramid of Giza", correctPosition: 0 },
      { id: 2, text: "Hanging Gardens of Babylon", correctPosition: 1 },
      { id: 3, text: "Colossus of Rhodes", correctPosition: 2 },
      { id: 4, text: "Lighthouse of Alexandria", correctPosition: 3 }
    ],
    explanation: "Great Pyramid (~2560 BC), Hanging Gardens (~600 BC), Colossus (~280 BC), Lighthouse (~280 BC).",
    category: "history",
    difficulty: "hard"
  },
  {
    id: 16,
    prompt: "Order these chemical elements by atomic number (lowest to highest)",
    items: [
      { id: 1, text: "Hydrogen", correctPosition: 0 },
      { id: 2, text: "Carbon", correctPosition: 1 },
      { id: 3, text: "Oxygen", correctPosition: 2 },
      { id: 4, text: "Iron", correctPosition: 3 }
    ],
    explanation: "Hydrogen (1), Carbon (6), Oxygen (8), Iron (26).",
    category: "science",
    difficulty: "medium"
  },
  {
    id: 17,
    prompt: "Order these social media platforms by launch date (oldest to newest)",
    items: [
      { id: 1, text: "Facebook", correctPosition: 0 },
      { id: 2, text: "Twitter/X", correctPosition: 1 },
      { id: 3, text: "Instagram", correctPosition: 2 },
      { id: 4, text: "TikTok", correctPosition: 3 }
    ],
    explanation: "Facebook (2004), Twitter (2006), Instagram (2010), TikTok (2016 internationally).",
    category: "technology",
    difficulty: "easy"
  },
  {
    id: 18,
    prompt: "Order these Star Wars movies by release date (original trilogy + first prequel)",
    items: [
      { id: 1, text: "A New Hope", correctPosition: 0 },
      { id: 2, text: "The Empire Strikes Back", correctPosition: 1 },
      { id: 3, text: "Return of the Jedi", correctPosition: 2 },
      { id: 4, text: "The Phantom Menace", correctPosition: 3 }
    ],
    explanation: "A New Hope (1977), The Empire Strikes Back (1980), Return of the Jedi (1983), The Phantom Menace (1999).",
    category: "entertainment",
    difficulty: "easy"
  },
  {
    id: 19,
    prompt: "Order these US states by the date they joined the Union (earliest to latest)",
    items: [
      { id: 1, text: "Delaware", correctPosition: 0 },
      { id: 2, text: "Pennsylvania", correctPosition: 1 },
      { id: 3, text: "New Jersey", correctPosition: 2 },
      { id: 4, text: "Georgia", correctPosition: 3 }
    ],
    explanation: "Delaware (Dec 7, 1787), Pennsylvania (Dec 12, 1787), New Jersey (Dec 18, 1787), Georgia (Jan 2, 1788).",
    category: "history",
    difficulty: "hard"
  },
  {
    id: 20,
    prompt: "Order these stages of cellular respiration",
    items: [
      { id: 1, text: "Glycolysis", correctPosition: 0 },
      { id: 2, text: "Pyruvate Oxidation", correctPosition: 1 },
      { id: 3, text: "Citric Acid Cycle", correctPosition: 2 },
      { id: 4, text: "Electron Transport Chain", correctPosition: 3 }
    ],
    explanation: "The stages of cellular respiration occur in order: Glycolysis → Pyruvate Oxidation → Citric Acid Cycle → Electron Transport Chain.",
    category: "science",
    difficulty: "hard"
  },
  {
    id: 21,
    prompt: "Order these countries by land area (smallest to largest)",
    items: [
      { id: 1, text: "Japan", correctPosition: 0 },
      { id: 2, text: "Germany", correctPosition: 1 },
      { id: 3, text: "Brazil", correctPosition: 2 },
      { id: 4, text: "Russia", correctPosition: 3 }
    ],
    explanation: "Japan (377K km²), Germany (357K km²), Brazil (8.5M km²), Russia (17M km²).",
    category: "geography",
    difficulty: "medium"
  },
  {
    id: 22,
    prompt: "Order these website browsers by initial release date (oldest to newest)",
    items: [
      { id: 1, text: "Internet Explorer", correctPosition: 0 },
      { id: 2, text: "Firefox", correctPosition: 1 },
      { id: 3, text: "Chrome", correctPosition: 2 },
      { id: 4, text: "Edge", correctPosition: 3 }
    ],
    explanation: "Internet Explorer (1995), Firefox (2004), Chrome (2008), Edge (2015).",
    category: "technology",
    difficulty: "medium"
  },
  {
    id: 23,
    prompt: "Order these Olympic Games by year (earliest to latest)",
    items: [
      { id: 1, text: "Barcelona", correctPosition: 0 },
      { id: 2, text: "Sydney", correctPosition: 1 },
      { id: 3, text: "Beijing", correctPosition: 2 },
      { id: 4, text: "London", correctPosition: 3 }
    ],
    explanation: "Barcelona (1992), Sydney (2000), Beijing (2008), London (2012).",
    category: "sports",
    difficulty: "medium"
  },
  {
    id: 24,
    prompt: "Order these dinosaurs by size (smallest to largest)",
    items: [
      { id: 1, text: "Velociraptor", correctPosition: 0 },
      { id: 2, text: "Triceratops", correctPosition: 1 },
      { id: 3, text: "T-Rex", correctPosition: 2 },
      { id: 4, text: "Brachiosaurus", correctPosition: 3 }
    ],
    explanation: "Velociraptor (~2m long), Triceratops (~9m), T-Rex (~12m), Brachiosaurus (~25m).",
    category: "science",
    difficulty: "easy"
  },
  {
    id: 25,
    prompt: "Order these Apple products by release year (oldest to newest)",
    items: [
      { id: 1, text: "iPod", correctPosition: 0 },
      { id: 2, text: "iPhone", correctPosition: 1 },
      { id: 3, text: "iPad", correctPosition: 2 },
      { id: 4, text: "Apple Watch", correctPosition: 3 }
    ],
    explanation: "iPod (2001), iPhone (2007), iPad (2010), Apple Watch (2015).",
    category: "technology",
    difficulty: "easy"
  }
];

export function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

export function shuffleItems(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
