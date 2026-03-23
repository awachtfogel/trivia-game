import { useState, useEffect } from 'react';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
import { loadAllCategories } from '../utils/csvParser';
import { getRandomCategory } from '../data/categories';
import '../styles/global.css';
import './App.css';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [gameState, setGameState] = useState('loading'); // 'loading' | 'start' | 'playing' | 'result'
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [usedCategories, setUsedCategories] = useState([]);

  // Load CSV data on mount
  useEffect(() => {
    const loadData = async () => {
      console.log('Loading CSV data...');
      const data = await loadAllCategories();
      setCategoryData(data);
      setGameState('start');
      console.log('CSV data loaded successfully');
    };
    loadData();
  }, []);

  const generateQuestion = () => {
    if (!categoryData) return null;

    // Get random category
    let category = getRandomCategory();

    // If we've used all categories, reset
    if (usedCategories.length >= 6) {
      setUsedCategories([]);
    }

    // Try to find unused category
    let attempts = 0;
    while (usedCategories.includes(category.id) && attempts < 20) {
      category = getRandomCategory();
      attempts++;
    }

    // Get data for this category
    const data = categoryData[category.dataKey];
    if (!data || data.length === 0) {
      console.error(`No data found for category: ${category.id}`);
      return null;
    }

    // Apply category-specific filtering
    const filteredItems = category.filterFunction(data);
    if (!filteredItems || filteredItems.length < 4) {
      console.error(`Insufficient items after filtering for category: ${category.id}`);
      return null;
    }

    // Create items with correct positions
    const items = filteredItems.map((item, index) => ({
      id: index + 1,
      text: category.formatDisplay(item),
      correctPosition: index,
      rawData: item
    }));

    // Shuffle items for display
    const shuffledItems = shuffleArray(items);

    return {
      id: Date.now(),
      categoryId: category.id,
      prompt: category.prompt,
      items: shuffledItems,
      explanation: category.formatExplanation(filteredItems),
      category: category
    };
  };

  const handleStart = () => {
    const question = generateQuestion();
    if (question) {
      setCurrentQuestion(question);
      setUsedCategories([question.categoryId]);
      setGameState('playing');
    } else {
      console.error('Failed to generate question');
    }
  };

  const handleRestart = () => {
    const question = generateQuestion();
    if (question) {
      setCurrentQuestion(question);
      setUsedCategories([...usedCategories, question.categoryId]);
      setGameState('playing');
    } else {
      console.error('Failed to generate question');
    }
  };

  return (
    <div className="app">
      {gameState === 'loading' && (
        <div className="loading-screen">
          <div className="loading-content">
            <h2>Loading trivia data...</h2>
            <p>Please wait while we prepare your questions</p>
          </div>
        </div>
      )}
      {gameState === 'start' && <StartScreen onStart={handleStart} />}
      {(gameState === 'playing' || gameState === 'result') && currentQuestion && (
        <GameScreen
          key={currentQuestion.id}
          question={currentQuestion}
          onRestart={handleRestart}
          gameState={gameState}
          setGameState={setGameState}
        />
      )}
    </div>
  );
}

export default App;
