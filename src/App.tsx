import React from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Header from './components/layout/Header';
import Grid from './components/layout/Grid/Grid';

function App() {
  return (
    <div className="App">
      <div className="mx-auto max-w-md">
        <Header />
        <Grid />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
