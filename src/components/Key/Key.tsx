import React from 'react';

type KeyProprs = {
  value: string;
  className?: string;
};

export const Key = ({ value, className }: KeyProprs) => {
  const classNameColor = `flex items-center py-3 px-3 uppercase justify-center rounded mx-0.5 text-[18px] font-bold cursor-pointer select-none text-black bg-slate-200 text-black ${className}`;

  return (
    <button type="button" className={classNameColor}>
      {value}
    </button>
  );
};

export default Key;
