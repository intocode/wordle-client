import React from 'react';

type CellProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
  className: string;
};

export const Cell = ({ value, className }: CellProps) => {
  const classNameColor = `w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded ${className}`;

  return (
    <div className={classNameColor}>
      <div>{value}</div>
    </div>
  );
};

export default Cell;
