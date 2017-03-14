import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//import Counter from './Counter';
//import App from './App';
import Lienzo from './Lienzo';
import Platillos from './Platillos';
import Bebidas from './Bebidas';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const direcciones = (
  <Router history={browserHistory} >
    <Route path="/" component={Lienzo}>
      {<IndexRoute component={Platillos} ></IndexRoute>}
      {<Route path="bebidas" component={Bebidas}></Route>}
    </Route>
  </Router>
);

ReactDOM.render(
  //<App counter={new Counter()} />,
  direcciones,
  document.getElementById('root')
);
