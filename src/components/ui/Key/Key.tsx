import React from 'react';

type KeyProps = {
  value: string;
  className?: string;
};

const Key = ({ value, className }: KeyProps) => {
  const classNameColor = `flex-1 mr-[4px] mb-[4px] rounded uppercase font-bold h-12 w-10 text-sm cursor-pointer select-none text-black bg-slate-200 ${className}`;

  return (
    <button type="button" className={classNameColor}>
      {value}
    </button>
  );
};

export default Key;
