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

axios.defaults.baseURL = 'http://localhost:3030';

// экшен креейтеры ниже вынесены за createSlice потому что используются в санках
// и должны быть объявлены до того как будут использованы

const wordGuessed = createAction('wordGuessed');

const attempted = createAction<AttemptLetterInterface>('attempted');

export const addInfo = createAction<string>('info/add');
export const clearInfo = createAction('info/clear');

const errorOccured = createAsyncThunk(
  'error',
  (error: string, { dispatch }) => {
    dispatch(addInfo(error));

    setTimeout(() => {
      dispatch(clearInfo());
    }, INFO_DISAPPEAR_MS);
  }
);

export const doAttempt = createAsyncThunk(
  'doAttempt',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const { typingWord } = getState() as GameStateInterface;

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

      // произошла какая-то ошибка
      if (data.error) {
        dispatch(errorOccured(data.error));
      }

      return data;
    } catch (e: any) {
      dispatch(errorOccured(e.response.data.error));

      return rejectWithValue(e.response.data.error);
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
  info: null,
  requesting: false,
  maxAttemptsCount: 6,
  wordLength: 5,
  attempts: [],
  letters: [],
  typingWord: '',
  record: 0,
  wordGuessed: false,
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
    builder.addCase(addInfo, (state, action: PayloadAction<string>) => {
      state.info = action.payload;
    });

    builder.addCase(clearInfo, (state) => {
      state.info = null;
    });

    builder.addCase(wordGuessed, (state) => {
      state.typingWord = '';
      state.record += 1;
      state.attempts = [];
      state.letters = [];
      state.wordGuessed = true;
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

    builder.addCase(doAttempt.rejected, (state, action) => {
      state.requesting = false;
      state.info = action.payload as string;
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
