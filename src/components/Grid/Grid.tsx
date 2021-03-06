import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import GridRow from './GridRow';

const Grid = () => {
  const maxAttemptsCount = useAppSelector((state) => state.maxAttemptsCount);

  /**
   * Нужно сгенерировать столько строк, сколько указано максимальное количество попыток
   */
  const maxAttempts = Array(maxAttemptsCount).fill(null);

  // todo: исправить -300px (сделать более универсальным)
  return (
    <div className="overflow-y-scroll flex-1 flex justify-center">
      <div className="flex flex-auto justify-center items-center">
        <div className="w-full p-6">
          {maxAttempts.map((_, index) => (
            <GridRow
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
