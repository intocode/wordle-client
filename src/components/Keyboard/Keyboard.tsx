import React from 'react';
import Key from '../ui/Key/Key';

const Keyboard = () => {
  const keys = [
    ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
    ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
    ['⌫', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ввод'],
  ];

  return (
    <div className="fixed bottom-1 max-w-md w-full p-4">
      {keys.map((item) => {
        return (
          <div className="flex">
            {item.map((letter) => {
              return <Key value={letter} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
