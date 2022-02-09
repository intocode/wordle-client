import React from 'react';

type CellProps = {
  value?: string;
  className?: string;
};

export const Cell = ({ value, className }: CellProps) => {
  const classNameColor = `w-16 h-16 uppercase flex items-center justify-center mx-0.5 text-4xl font-bold rounded ${className}`;

  return (
    <div className={classNameColor}>
      <div>{value}</div>
    </div>
  );
};

export default Cell;
