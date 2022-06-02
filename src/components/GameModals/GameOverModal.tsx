import React from 'react';
import { BG_GREEN } from '../../constants';
import { startNewGame } from '../../redux/gameSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Modal from '../Modal/Modal';
import ModalTitle from '../Modal/ModalTitle';

const GameOverModal = () => {
  const dispatch = useAppDispatch();

  const gameOver = useAppSelector((state) => state.gameOver);
  const record = useAppSelector((state) => state.record);
  const requesting = useAppSelector((state) => state.requesting);

  const handleStartNewGame = () => {
    // todo: сделать санк для старта новой игры
    dispatch(startNewGame()); // просто заглушка
  };

  return (
    <Modal opened={gameOver} onClose={handleStartNewGame}>
      <ModalTitle>Игра окончена</ModalTitle>

      <div>
        <div>У тебя не осталось больше попыток.</div>
        <div>
          Твой рекорд: <strong>{record}</strong>
        </div>
        <div>Можно начать новую игру с нуля.</div>
        <div className="flex justify-center mt-6">
          <button
            onClick={handleStartNewGame}
            type="button"
            className={`${BG_GREEN} p-3 text-white rounded-sm`}
            disabled={requesting}
          >
            Начать заново
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default GameOverModal;
