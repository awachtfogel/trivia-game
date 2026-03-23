import { getCategoryStats, getOverallStats, getCategoryName } from '../utils/statsManager';
import './StatsDisplay.css';

function StatsDisplay() {
  const overallStats = getOverallStats();
  const categoryStats = getCategoryStats();

  // Only show if user has played at least one game
  if (overallStats.totalGames === 0) {
    return null;
  }

  // Get stars based on percentage
  const getStars = (percentage) => {
    if (percentage >= 80) return '★★★★★';
    if (percentage >= 60) return '★★★★☆';
    if (percentage >= 40) return '★★★☆☆';
    if (percentage >= 20) return '★★☆☆☆';
    return '★☆☆☆☆';
  };

  return (
    <div className="stats-display">
      <h3 className="stats-title">📊 Your Progress</h3>

      <div className="stats-overall">
        <p className="stats-summary">
          You've played <strong>{overallStats.totalGames}</strong> {overallStats.totalGames === 1 ? 'game' : 'games'}
        </p>
        <p className="stats-record">
          <span className="stat-correct">{overallStats.correct} correct</span>
          {' • '}
          <span className="stat-incorrect">{overallStats.incorrect} incorrect</span>
        </p>
        <p className="stats-percentage">
          Win rate: <strong>{overallStats.winPercentage}%</strong>
        </p>
      </div>

      {categoryStats.some(cat => cat.played > 0) && (
        <div className="stats-categories">
          {categoryStats.map((cat) => {
            if (cat.played === 0) return null;

            return (
              <div key={cat.id} className="category-stat">
                <span className="category-name">{getCategoryName(cat.id)}</span>
                <span className="category-percentage">{cat.percentage}%</span>
                <span className="category-stars">{getStars(cat.percentage)}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default StatsDisplay;
