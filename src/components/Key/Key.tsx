import React from 'react';

type KeyProprs = {
  value: string;
};

export const Key = ({ value }: KeyProprs) => {
  return (
    <button
      type="button"
      className="flex items-center py-7 px-5 uppercase justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none text-black bg-slate-200"
    >
      {value}
    </button>
  );
};

export default Key;
