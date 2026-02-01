import { useSelector } from "react-redux";
import "./Stats.css";

const Stats = () => {
  const { booksRead, totalPages } = useSelector(state => state.stats);

  return (
    <div className="stats-page">
      <div className="stats-card">
        <h2 className="stats-title">Statistics</h2>

        <p className="stat-item">
          Books read
          <span className="stat-value">{booksRead}</span>
        </p>

        <div className="stats-divider"></div>

        <p className="stat-item">
          Pages read
          <span className="stat-value">{totalPages}</span>
        </p>
      </div>
    </div>
  );
};

export default Stats;
