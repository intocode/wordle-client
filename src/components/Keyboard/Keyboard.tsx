import React, { useCallback, useEffect } from 'react';
import { backspace, doAttempt, typeLetter } from '../../redux/gameSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getClassNameByLetterState } from '../../utils/game';
import Key from './Key';

const keys = [
  ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
  ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
  ['Backspace', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'Enter'],
];

const flatKeys = keys.flat(1);

const Keyboard = () => {
  const requesting = useAppSelector((state) => state.requesting);
  const letters = useAppSelector((state) => state.letters);

  const dispatch = useAppDispatch();

  const opacity = requesting ? 'opacity-50' : '';

  const handlePressKey = useCallback(
    (key: string) => {
      if (!flatKeys.includes(key)) return;

      switch (key) {
        case 'Backspace':
          dispatch(backspace());
          break;
        case 'Enter':
          dispatch(doAttempt());
          break;
        default:
          dispatch(typeLetter(key));
      }
    },
    [dispatch]
  );

  // возможность набирать буквы с клавиатуры
  // todo: предусмотреть букву ё
  useEffect(() => {
    const nativeKeyboardListener = (e: KeyboardEvent) => {
      handlePressKey(e.key);
    };

    window.addEventListener('keyup', nativeKeyboardListener);

    return () => window.removeEventListener('keyup', nativeKeyboardListener);
  }, [dispatch, handlePressKey]);

  return (
    <div className={`p-2 ${opacity}`}>
      {keys.map((item) => (
        <div key={item[0]} className="flex">
          {item.map((letter) => {
            const letterClassName = getClassNameByLetterState(letter, letters);

            return (
              <Key
                key={letter}
                value={letter}
                onPress={handlePressKey}
                letterClassName={letterClassName}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
