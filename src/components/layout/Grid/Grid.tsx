import React from 'react';
import useGame from '../../../context/GameContext/useGame';
import GridRow from '../../GridRow/GridRow';

const Grid = () => {
  const { maxAttemptsCount } = useGame();

  // количество строк = максимальное количество попыток
  const maxAttempts = Array(maxAttemptsCount).fill(null);

  // todo: исправить -300px (сделать более универсальным)
  return (
    <div className="h-[calc(100vh-300px)] overflow-y-scroll">
      <div className="flex flex-auto justify-center items-center">
        <div className="w-full p-6">
          {maxAttempts.map((_, index) => (
            <GridRow index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Grid;
