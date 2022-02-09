import React from 'react';
import Cell from '../Cell/Cell';

type LineCellProps = {
  word?: string;
};

export const LineCell = ({ word }: LineCellProps) => {
  return (
    <div className="flex mb-1">
      {word
        ? word.split('').map((item) => {
            return <Cell value={item} className="text-black border-2" />;
          })
        : [1, 2, 3, 4, 5].map(() => {
            return <Cell className="text-black border-2" />;
          })}
    </div>
  );
};

export default LineCell;
