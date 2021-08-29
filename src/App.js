import React from 'react';

// Components
import Header from './components/Header';
import Home from './components/Home';

// style
import { GlobalStyle } from './GlobalStyle';

// start test without JSX just for test
// const Star = () =>
//   React.createElement('div', null, 'This is my first ReactComponet');

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
};

export default App;
