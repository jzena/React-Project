import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import App from './App';
import Lista from './Lista';
import './index.css';

ReactDOM.render(
  //<App counter={new Counter()} />,
  <Lista/>,
  document.getElementById('root')
);
