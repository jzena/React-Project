import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state, action) => {
    return state;
}

const state = {
    cantidad: 2
}

const store = createStore(reducer, state);

ReactDOM.render(
    // I. Implementar el PROVIDER
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
