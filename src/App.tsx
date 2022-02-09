import React from 'react';
import Header from './components/layout/Header';
import Main from './components/layout/Main/Main';

function App() {
  return (
    <div className="App">
      <div className="container max-w-xl m-auto">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
