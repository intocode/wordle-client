import React from 'react';
import { getKeysVisualName } from '../../utils/game';

interface KeyProps extends React.ComponentPropsWithoutRef<'button'> {
  value: string;
  letterClassName: string;
  onPress: (value: string) => void;
}

const Key = ({ value, onPress, letterClassName }: KeyProps) => {
  // todo заменить пикселы на рэмы
  const classNameColor = `
    flex-1 mr-[4px] mb-[4px] rounded uppercase font-bold h-12 w-10 
    text-sm cursor-pointer select-none ${letterClassName}
  `;

  const handleClick = () => onPress(value);

  const keyName = getKeysVisualName(value);

  return (
    <button type="button" className={classNameColor} onClick={handleClick}>
      {keyName}
    </button>
  );
};

export default React.memo(Key);
