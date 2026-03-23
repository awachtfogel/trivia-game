import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
  pointerWithin,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableItem from './SortableItem';
import StatsDisplay from './StatsDisplay';
import { validateAnswer, getCorrectOrder } from '../utils/scoring';
import { updateStats } from '../utils/statsManager';
import './GameScreen.css';

function GameScreen({ question, onRestart, gameState, setGameState }) {
  const [items, setItems] = useState(question.items);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationResult, setValidationResult] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 50,        // Reduced from 100ms for faster response
        tolerance: 3,     // Reduced from 5px for easier activation
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleSubmit = () => {
    const correctOrder = getCorrectOrder(question.items);
    const result = validateAnswer(items, correctOrder);
    setValidationResult(result);
    setIsSubmitted(true);
    setGameState('result');

    // Update statistics
    updateStats(question.categoryId, result.correct);
  };

  const handlePlayAgain = () => {
    setItems(question.items);
    setIsSubmitted(false);
    setValidationResult(null);
    onRestart();
  };

  return (
    <div className="game-screen">
      <div className="game-container">
        <div className="question-card">
          <h2 className="question-prompt">{question.prompt}</h2>
        </div>

        <div className="sortable-area">
          <DndContext
            sensors={sensors}
            collisionDetection={pointerWithin}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items.map((item) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              {items.map((item, index) => {
                let isCorrect = false;
                let correctPosition = null;

                if (isSubmitted && validationResult) {
                  const correctOrder = validationResult.correctOrder;
                  const correctItem = correctOrder[index];
                  isCorrect = item.id === correctItem.id;
                  if (!isCorrect) {
                    correctPosition = correctOrder.findIndex(
                      (ci) => ci.id === item.id
                    );
                  }
                }

                return (
                  <SortableItem
                    key={item.id}
                    item={item}
                    index={index}
                    isSubmitted={isSubmitted}
                    isCorrect={isCorrect}
                    correctPosition={correctPosition}
                  />
                );
              })}
            </SortableContext>
          </DndContext>
        </div>

        {!isSubmitted ? (
          <button className="submit-button" onClick={handleSubmit}>
            Submit Answer
          </button>
        ) : (
          <div className="result-section">
            <div
              className={`result-message ${
                validationResult.correct ? 'correct' : 'incorrect'
              }`}
            >
              {validationResult.correct ? (
                <>
                  <span className="result-icon">🎉</span>
                  <h3>Correct! Great job!</h3>
                </>
              ) : (
                <>
                  <span className="result-icon">💭</span>
                  <h3>Not quite right</h3>
                </>
              )}
            </div>

            <div className="explanation">
              <p>{question.explanation}</p>
            </div>

            <StatsDisplay />

            <button className="play-again-button" onClick={handlePlayAgain}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameScreen;
