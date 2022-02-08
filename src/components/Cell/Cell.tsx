import React from 'react';

export type CellProps = {
  value: string;
  color: string;
};

export const Cell = ({ value, color }: CellProps) => {
  const classColor = `w-14 h-14 p-5 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded ${color}`;

  return (
    <div className={classColor}>
      <div>{value}</div>
    </div>
  );
};

export default Cell;
