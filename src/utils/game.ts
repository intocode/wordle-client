import { BG_GRAY, BG_GREEN, BG_ORANGE, BG_SLATE } from '../constants';
import { AttemptLetterInterface } from '../types';

// todo: добавить комментарии для всего кода ниже

interface T {
  (
    oldLetters: AttemptLetterInterface,
    receivedLetters: AttemptLetterInterface
  ): AttemptLetterInterface;
}

export const concatAttemptLetters: T = (oldLetters, receivedLetters) => {
  return receivedLetters.reduce((acc, received) => {
    const oldIndex = acc.findIndex((item) => item[0] === received[0]);

    // если такой буквы ранее не было вообще, то просто добавляем её
    if (oldIndex === -1) {
      return [...acc, received];
    }
    // else

    // если старая инфа и новая совпадают, то ничего не изменяем
    if (acc[oldIndex][1] === received[1]) {
      return acc;
    }

    // если ранее был 0, но сейчас узнали точную позицию
    if (acc[oldIndex][1] === 0 && received[1] > 0) {
      // то заменяем старое на новое
      return [
        ...acc.filter((_, i) => i !== oldIndex), // filter чтобы не мутировать
        received,
      ];
    }

    return acc;
  }, oldLetters);
};

export const getClassNameByLetterState = (
  letter: string,
  letters: AttemptLetterInterface,
  position?: number
) => {
  const letterState = letters.filter((state) => state[0] === letter);
  if (!letterState.length) {
    return BG_SLATE;
  }

  let className = '';

  letterState.forEach((state) => {
    const currentState = state[1];

    if (position) {
      if (currentState > 0) {
        className = BG_ORANGE;
      }

      if (currentState === position) {
        className = BG_GREEN;
      }
    }

    if (!position && currentState > 0) {
      className = BG_GREEN;
    }

    if (currentState === 0) {
      className = BG_ORANGE;
    }

    if (currentState === -1) {
      className = BG_GRAY;
    }
  });

  return `${className} text-white border-0`;
};

export const getKeysVisualName = (key: string) => {
  switch (key) {
    case 'Backspace':
      return '⌫';

    case 'Enter':
      return '⏎';

    default:
      return key;
  }
};
