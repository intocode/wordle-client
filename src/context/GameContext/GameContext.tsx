import React, { useMemo, useReducer } from 'react';

type GameProviderProps = {
  children: React.ReactNode;
};

export interface AttemptWordInterface {
  [key: string]: -1 | 0 | 1;
}

interface GameStateInterface {
  maxAttemptsCount: number;
  wordLength: number;
  attempts: AttemptWordInterface[];
}

interface ActionType {
  type: string;
  payload?: any;
}

interface GameContextInterface {
  state: GameStateInterface;
  dispatch: React.Dispatch<ActionType>;
}

const defaultValue = {
  maxAttemptsCount: 6,
  wordLength: 5,
  attempts: [{ к: 1, о: 1, б: -1, р: -1, а: 0 }],
} as GameStateInterface;

const gameReducer = (
  state: GameStateInterface,
  action: ActionType
): GameStateInterface => {
  switch (action.type) {
    case 'setMaxAttempts':
      return {
        ...state,
        maxAttemptsCount: action.payload,
      };
    default:
      return defaultValue;
  }
};

const GameContext = React.createContext<GameContextInterface>(
  {} as GameContextInterface
);

const GameProvider = ({ children }: GameProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, defaultValue);

  const contextValue = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state, dispatch]);

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export { GameContext, GameProvider };
