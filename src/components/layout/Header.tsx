import React from 'react';
import HelpIcon from '../icons/HelpIcon';
import RatingIcon from '../icons/RatingIcon';
import SettingsIcon from '../icons/SettingsIcon';
import '../../App.css';

const Header = () => {
  return (
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
  );
};

export default Header;
