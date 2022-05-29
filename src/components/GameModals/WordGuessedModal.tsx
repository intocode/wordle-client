import React from 'react';
import { BG_GREEN } from '../../constants';
import { closeWordGuessedModal } from '../../redux/gameSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Modal from '../Modal/Modal';
import ModalTitle from '../Modal/ModalTitle';

const WordGuessedModal = () => {
  const dispatch = useAppDispatch();

  const wordGuessed = useAppSelector((state) => state.wordGuessed);
  const lastWord = useAppSelector(
    (state) => state.attempts[state.attempts.length - 1]
  );
  const record = useAppSelector((state) => state.record);

  const handleCloseModal = () => dispatch(closeWordGuessedModal());

  return (
    <Modal opened={wordGuessed} onClose={handleCloseModal}>
      <ModalTitle>Слово отгадано</ModalTitle>

      <div>
        <div>
          Ты правильно отгадал слово <strong>{lastWord}</strong>.
        </div>
        <div>
          Твой рекорд: <strong>{record}</strong>
        </div>
        <div>Теперь отгадай следующее. Все попытки вовзращены.</div>
        <div className="flex justify-center mt-6">
          <button
            onClick={handleCloseModal}
            type="button"
            className={`${BG_GREEN} p-3 text-white rounded-sm`}
          >
            Продолжить
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default WordGuessedModal;
