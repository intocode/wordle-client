import React from 'react';
import HelpIcon from '../icons/HelpIcon';
import RatingIcon from '../icons/RatingIcon';
import SettingsIcon from '../icons/SettingsIcon';
import '../../App.css';
import { useAppSelector } from '../../redux/hooks';

const Header = () => {
  const record = useAppSelector((state) => state.record);
  const info = useAppSelector((state) => state.info);
  const wordGuessed = useAppSelector((state) => state.wordGuessed);

  return (
    <>
      <header className="flex max-w-lg py-2 px-3 border-b">
        <button type="button" className="m-0 mr-2 sm:my-2">
          <HelpIcon />
        </button>
        <div className="flex-auto text-center">
          <h1 className="uppercase font-extrabold text-2xl sm:text-3xl tracking-wider">
            WORDLE
          </h1>
        </div>
        <button type="button" className="m-0 mr-2 sm:my-2 flex-none">
          <RatingIcon />
        </button>
        <button type="button" className="m-0 sm:my-2 flex-none">
          <SettingsIcon />
        </button>
      </header>
      <div>Рекорд: {record}</div>
      <div>{info}</div>
      <div>{wordGuessed && <div>Слово отгадано верно. Играем дальше</div>}</div>
    </>
  );
};

export default Header;
