import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getClassNameByLetterState } from '../../utils/game';
import GridCell from './GridCell';

type LineCellProps = {
  index: number;
};

const GridRow = ({ index }: LineCellProps) => {
  const attempts = useAppSelector((state) => state.attempts);
  const wordLength = useAppSelector((state) => state.wordLength);
  const letters = useAppSelector((state) => state.letters);
  const typingWord = useAppSelector((state) => state.typingWord);

  // пустые ячейки, для мэппинга ниже, чтобы заполнить буквами
  const cells = Array(wordLength).fill(null);

  // текущее слово
  const word = attempts[index];

  const row: JSX.Element[] = cells.map((_, cellIndex) => {
    let letter;
    let className;

    if (word) {
      letter = word[cellIndex];
      className = getClassNameByLetterState(letter, letters, cellIndex + 1);
    }

    if (index === attempts.length) {
      letter = typingWord[cellIndex];
    }

    return (
      <GridCell
        // eslint-disable-next-line react/no-array-index-key
        key={`${index}-${cellIndex}`}
        value={letter}
        className={className}
      />
    );
  });

  return <div className="flex w-full mb-1 justify-center">{row}</div>;
};

export default GridRow;
