import React from 'react';
import { useAppSelector } from '../../redux/hooks';

const Header = () => {
  const record = useAppSelector((state) => state.record);

  return (
    <>
      <header className="flex max-w-lg py-2 px-3 border-b">
        <div className="flex-auto text-center">
          <h1 className="uppercase font-extrabold text-2xl sm:text-3xl tracking-wider">
            WORDLE
          </h1>
        </div>
      </header>
      <div>Рекорд: {record}</div>
    </>
  );
};

export default Header;
