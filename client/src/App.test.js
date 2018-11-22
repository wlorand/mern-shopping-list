// libs
import React from 'react';
import ReactDOM from 'react-dom';

// local components
import App from './App';

// test 1
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  // where is the expect and the matcher ?
});
