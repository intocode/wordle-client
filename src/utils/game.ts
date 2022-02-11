import { CellProps } from '../components/ui/Cell/Cell';
import { AttemptWordInterface } from '../context/GameContext/GameContext';

interface GetCellPropsInterface {
  (
    attempts: AttemptWordInterface[],
    rowIndex: number,
    cellIndex: number
  ): CellProps;
}

// eslint-disable-next-line import/prefer-default-export
export const getCellProps: GetCellPropsInterface = (
  attempts,
  rowIndex,
  cellIndex
) => {
  const isAttemptOfCurrentRow = !!attempts[rowIndex];

  const cellProps: CellProps = {};

  if (isAttemptOfCurrentRow) {
    const entries = Object.entries(attempts[rowIndex]);

    const [letter, correct] = entries[cellIndex];

    cellProps.value = letter;

    switch (correct) {
      case -1:
        cellProps.className = 'bg-gray-300';
        break;

      case 0:
        cellProps.className = 'bg-orange-300';
        break;

      case 1:
        cellProps.className = 'bg-green-400';
        break;

      default:
    }
  }

  return cellProps;
};
