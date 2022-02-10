import React from 'react';
import Keyboard from './components/Keyboard/Keyboard';
import Header from './components/layout/Header';
import Main from './components/layout/Main/Main';

function App() {
  return (
    <div className="App">
      <div className="mx-auto max-w-md">
        <Header />
        <Main />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
