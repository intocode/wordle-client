import React, { useEffect } from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Header from './components/layout/Header';
import Grid from './components/Grid/Grid';
import { LS_TOKEN_KEY } from './constants';
import { useAppDispatch } from './redux/hooks';
import { getNewToken } from './redux/gameSlice';
import GameModals from './components/GameModals/GameModals';
import Popovers from './components/Popovers/Popovers';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem(LS_TOKEN_KEY);

    if (!token) {
      dispatch(getNewToken());
    }
  }, [dispatch]);

  return (
    <div className="mx-auto max-w-md flex flex-col h-full justify-between relative">
      <Header />
      <Grid />
      <Keyboard />
      <GameModals />
      <Popovers />
    </div>
  );
}

export default App;
