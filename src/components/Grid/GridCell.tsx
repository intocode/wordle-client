import React from 'react';

// todo: правильно типизировать
export type CellProps = {
  value?: string;
  className?: string;
};

const Cell = ({ value, className }: CellProps) => {
  // todo: пиксели заменить на rem'ы
  // todo чекнуть правильность использованных классов
  const classNameColor = `
      w-[64px] h-[72px] border-2 uppercase flex items-center justify-center 
      mx-0.5 text-4xl font-bold ${className}`;

  return (
    <div className={classNameColor}>
      <div>{value}</div>
    </div>
  );
};

// todo: чекнуть необходимость использования memo
export default React.memo(Cell);
