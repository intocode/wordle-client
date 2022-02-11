import React from 'react';
import useGame from '../../context/GameContext/useGame';
import Cell from '../ui/Cell/Cell';
import { getCellProps } from '../../utils/game';

type LineCellProps = {
  index: number;
};

const GridRow = ({ index }: LineCellProps) => {
  const { attempts, wordLength } = useGame();

  const cells = Array(wordLength).fill(null);

  const row: JSX.Element[] = cells.map((_, cellIndex) => {
    const cellProps = getCellProps(attempts, index, cellIndex);

    // eslint-disable-next-line react/jsx-props-no-spreading, react/no-array-index-key
    return <Cell key={`${index}-${cellIndex}`} {...cellProps} />;
  });

  return <div className="flex w-full mb-1 justify-center">{row}</div>;
};

export default GridRow;
