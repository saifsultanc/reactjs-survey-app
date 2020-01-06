import React, { useState } from "react";

const Scoreboard = () => {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div class="scoreboard" handleScore={updateScore}>
      <h2 class="score">Score</h2>
      <span class="score fancy-text">{score}</span>
    </div>
  );
};

export default Scoreboard;
