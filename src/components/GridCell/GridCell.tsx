import React from 'react';
import useGame from '../../context/GameContext/useGame';
import LineCell from '../LineCell/LineCell';

const GridCell = () => {
  const game = useGame();

  const maxAttempts = new Array(game.maxAttemptsCount).fill(null);

  return (
    <div className="w-full p-6">
      {maxAttempts.map(() => {
        return <LineCell />;
      })}
    </div>
  );
};

export default GridCell;
