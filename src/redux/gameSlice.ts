import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { AttemptLetterInterface, GameStateInterface } from '../types';
import { INFO_DISAPPEAR_MS, LS_TOKEN_KEY } from '../constants';
import { concatAttemptLetters } from '../utils/game';

// экшен креейтеры ниже вынесены за createSlice потому что используются в санках
// и должны быть объявлены до того как будут использованы

const wordGuessed = createAction('wordGuessed');

export const closeWordGuessedModal = createAction('closeWordGuessedModal');

const attempted = createAction<AttemptLetterInterface>('attempted');
const gameOver = createAction('gameOver');

export const unshiftInfo = createAction<string>('info/unshift');
export const popInfo = createAction('info/pop');

const errorOccured = createAsyncThunk(
  'error',
  (error: string, { dispatch }) => {
    dispatch(unshiftInfo(error));

    setTimeout(() => {
      dispatch(popInfo());
    }, INFO_DISAPPEAR_MS);
  }
);

export const startNewGame = createAsyncThunk(
  'startNewGame',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/token/restart', {
        token: localStorage.getItem(LS_TOKEN_KEY),
      });

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(`Произошла непредвиденная ошибка: ${e}`);
    }
  }
);

export const doAttempt = createAsyncThunk(
  'doAttempt',
  // eslint-disable-next-line consistent-return
  async (_, { getState, dispatch }) => {
    const { typingWord, wordLength } = getState() as GameStateInterface;

    if (typingWord.length !== wordLength) {
      dispatch(errorOccured('Слишком короткое слово'));
    } else {
      try {
        const response = await axios.post('/word', {
          token: localStorage.getItem(LS_TOKEN_KEY),
          word: typingWord,
        });

        const { data } = response;

        // попытка прошла, пришла схема
        if (data.schema) {
          dispatch(attempted(data.schema));
        }

        // слово отгадано верно
        if (data.guessed) {
          dispatch(wordGuessed());
        }

        // это была последняя попытка
        if (data.gameOver) {
          dispatch(gameOver());
        }

        // произошла какая-то ошибка
        if (data.error) {
          dispatch(errorOccured(data.error));
        }

        return data;
      } catch (e: any) {
        let errorMsg = `Ошибка сети: ${e.toString()}`;

        if (e.response?.data?.error) {
          errorMsg = e.response.data.error;
        }

        dispatch(errorOccured(errorMsg));

        return Promise.reject();
      }
    }
  }
);

// todo: добавить комментарии для всего кода ниже

export const getNewToken = createAsyncThunk(
  'getNewToken',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/token');

      const { token } = response.data;

      if (token) {
        localStorage.setItem(LS_TOKEN_KEY, token);

        return token;
      }
      return thunkAPI.rejectWithValue('Не удалось получить токен');
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState: GameStateInterface = {
  info: [],
  requesting: false,
  maxAttemptsCount: 6,
  wordLength: 5,
  attempts: [],
  letters: [],
  typingWord: '',
  record: 0,
  wordGuessed: false,
  gameOver: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    typeLetter: (state: GameStateInterface, action: PayloadAction<string>) => {
      if (state.typingWord.length < state.wordLength) {
        state.typingWord = `${state.typingWord}${action.payload}`;
      }
    },

    backspace: (state: GameStateInterface) => {
      state.typingWord = state.typingWord.slice(0, -1);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(startNewGame.pending, (state) => {
      state.requesting = true;
    });

    builder.addCase(startNewGame.fulfilled, (state) => {
      state.requesting = false;
      state.typingWord = '';
      state.attempts = [];
      state.gameOver = false;
      state.letters = [];
    });

    builder.addCase(
      startNewGame.rejected,
      (state, action: PayloadAction<any>) => {
        state.info = action.payload;
        state.requesting = false;
      }
    );

    builder.addCase(gameOver, (state) => {
      state.gameOver = true;
    });

    builder.addCase(unshiftInfo, (state, action: PayloadAction<string>) => {
      state.info.unshift(action.payload);
    });

    builder.addCase(popInfo, (state) => {
      state.info.pop();
    });

    builder.addCase(wordGuessed, (state) => {
      state.record += 1;
      state.wordGuessed = true;
    });

    builder.addCase(closeWordGuessedModal, (state) => {
      state.attempts = [];
      state.letters = [];
      state.wordGuessed = false;
    });

    builder.addCase(
      attempted,
      (state: GameStateInterface, action: PayloadAction<any>) => {
        state.attempts.push(state.typingWord);
        state.letters = concatAttemptLetters(state.letters, action.payload);
        state.typingWord = '';
      }
    );

    builder.addCase(doAttempt.pending, (state) => {
      state.requesting = true;
    });

    builder.addCase(doAttempt.fulfilled, (state) => {
      state.requesting = false;
    });

    builder.addCase(doAttempt.rejected, (state) => {
      state.requesting = false;
    });

    builder.addCase(getNewToken.pending, (state) => {
      state.requesting = true;
    });

    builder.addCase(getNewToken.fulfilled, (state) => {
      state.requesting = false;
      state.letters = [];
      state.attempts = [];
      state.typingWord = '';
    });
  },
});

export default gameSlice.reducer;
export const { typeLetter, backspace } = gameSlice.actions;
