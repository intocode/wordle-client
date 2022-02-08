import React from 'react';

type CellProps = {
  value: string;
  color: string;
};

export const Cell = ({ value, color }: CellProps) => {
  const classNameColor = `w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded ${color}`;

  return (
    <div className={classNameColor}>
      <div>{value}</div>
    </div>
  );
};

export default Cell;
