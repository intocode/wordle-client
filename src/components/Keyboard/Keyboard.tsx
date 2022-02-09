import React from 'react';
import Key from '../Key/Key';

const Keyboard = () => {
  return (
    <div>
      <div className="flex justify-center mb-1">
        {['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'].map(
          (letter) => {
            return <Key value={letter} />;
          }
        )}
      </div>
      <div className="flex justify-center mb-1">
        {['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'].map(
          (letter) => {
            return <Key value={letter} />;
          }
        )}
      </div>
      <div className="flex justify-center">
        {['⌫', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ввод'].map(
          (letter) => {
            return <Key value={letter} />;
          }
        )}
      </div>
    </div>
  );
};

export default Keyboard;
