import 'babel-polyfill';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';
import rootReducer from './app/reducers';
import axios from 'axios';

import './index.scss';

const loggerMiddleware = createLogger()

axios.defaults.baseURL = 'http://localhost:5000/easyfinance/api/v1';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
