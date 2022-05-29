import React, { useEffect } from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Header from './components/layout/Header';
import Grid from './components/Grid/Grid';
import { INFO_DISAPPEAR_MS, LS_TOKEN_KEY } from './constants';
import { useAppDispatch } from './redux/hooks';
import { clearInfo, getNewToken } from './redux/gameSlice';
import GameModals from './components/GameModals/GameModals';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem(LS_TOKEN_KEY);

    if (!token) {
      dispatch(getNewToken());
    }
  }, [dispatch]);

  useEffect(() => {
    /**
     * Всё состояние редакс-стейта сохраняется в localStorage. Если на момент закрытия страницы
     * было info-сообщение, то оно не удалится после открытия страницы. Данный эффект запускает
     * процесс очищения сообщения вручную после открытия игры
     */
    setTimeout(() => dispatch(clearInfo()), INFO_DISAPPEAR_MS);
  });

  return (
    <div className="App">
      <div className="mx-auto max-w-md">
        <Header />
        <Grid />
        <Keyboard />
        <GameModals />
      </div>
    </div>
  );
}

export default App;
