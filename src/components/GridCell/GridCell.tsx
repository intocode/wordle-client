import React from 'react';
import LineCell from '../LineCell/LineCell';

const GridCell = () => {
  const maxAttempts = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {maxAttempts.map(() => {
        return <LineCell />;
      })}
    </div>
  );
};

export default GridCell;
