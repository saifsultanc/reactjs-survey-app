import React, { useState } from "react";

const Scoreboard = () => {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="scoreboard">
      <h2 className="score">Score</h2>
      <span className="score fancy-text">{score}</span>
    </div>
  );
};

export default Scoreboard;
