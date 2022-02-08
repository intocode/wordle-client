import React from 'react';

type CellProps = {
  value: string;
};

export const Cell = ({ value }: CellProps) => {
  return (
    <div className="w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-black">
      <div>{value}</div>
    </div>
  );
};

export default Cell;
