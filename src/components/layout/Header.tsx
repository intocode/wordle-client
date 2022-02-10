import React from 'react';
import HelpIcon from '../icons/HelpIcon';
import RatingIcon from '../icons/RatingIcon';
import SettingsIcon from '../icons/SettingsIcon';
import '../../App.css';
import useGame from '../../context/GameContext/useGame';

const Header = () => {
  const game = useGame();

  return (
    <>
      <header className="flex flex-row m-auto max-w-lg py-2 px-3 border-b dark:border-neutral-700">
        <button type="button" className="m-0 mr-2 sm:my-2 flex-none">
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
      <div className="text-center text-sm">
        test: {game.maxAttemptsCount} попыток, {game.wordLength} длина
      </div>
      <div>
        <button
          className="bg-lime-600 p-2"
          type="button"
          onClick={() => game.setMaxAttempts(game.maxAttemptsCount + 1)}
        >
          +
        </button>
        <button
          className="bg-amber-300 p-2"
          type="button"
          onClick={() => game.setMaxAttempts(game.maxAttemptsCount - 1)}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Header;
