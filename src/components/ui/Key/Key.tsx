import React from 'react';

interface KeyProps extends React.ComponentPropsWithoutRef<'button'> {
  value: string;
  className?: string;
}

const Key = ({ value, className, ...props }: KeyProps) => {
  // todo заменить пикселы на рэмы
  const classNameColor = `
    flex-1 mr-[4px] mb-[4px] rounded uppercase font-bold h-12 w-10 
    text-sm cursor-pointer select-none text-black bg-slate-200 ${className}
  `;

  return (
    <button type="button" className={classNameColor} {...props}>
      {value}
    </button>
  );
};

export default Key;
