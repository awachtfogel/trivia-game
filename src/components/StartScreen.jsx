import './StartScreen.css';

function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <div className="start-content">
        <h1 className="game-title">Sort It Out!</h1>
        <p className="game-tagline">Can you put these in order?</p>
        <p className="game-description">
          Test your knowledge by arranging items in the correct order.
          <br />
          Drag and drop to sort, then submit your answer!
        </p>
        <button className="start-button" onClick={onStart}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
