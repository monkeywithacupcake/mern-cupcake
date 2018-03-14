import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { AUTH_USER } from './actions/types';

import 'materialize-css/dist/css/materialize.min.css';

import App from './components/App';
import reducers from './reducers';
import axios from 'axios';
window.axios = axios;

const loggerMiddleware = createLogger();
const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk, loggerMiddleware)
);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
    // we need to update application state
    store.dispatch({ type: AUTH_USER });
}

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
