import React from 'react';

// Components
import Header from './components/Header';

// style
import { GlobalStyle } from './GlobalStyle';

// start test without JSX just for test
// const Star = () =>
//   React.createElement('div', null, 'This is my first ReactComponet');

const App = () => {
  return (
    <div className="App">
      <Header />
      Start here.
      <GlobalStyle />
    </div>
  );
};

export default App;
