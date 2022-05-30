import React from 'react';
import GameOverModal from './GameOverModal';
import WordGuessedModal from './WordGuessedModal';

const GameModals = () => {
  return (
    <>
      <GameOverModal />
      <WordGuessedModal />
    </>
  );
};

export default GameModals;
