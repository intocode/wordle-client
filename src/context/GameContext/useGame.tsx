import { useCallback, useContext } from 'react';
import { GameContext } from './GameContext';

const useGame = () => {
  const { dispatch, state } = useContext(GameContext);

  const { maxAttemptsCount, attempts, wordLength } = state;

  const setMaxAttempts = useCallback(
    (maxAttempts) => {
      dispatch({ type: 'setMaxAttempts', payload: maxAttempts });
    },
    [dispatch]
  );

  return {
    setMaxAttempts,
    maxAttemptsCount,
    attempts,
    wordLength,
  };
};

export default useGame;
