import 'babel-polyfill';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory, hashHistory} from 'react-router';
import rootReducer from './app/reducers';
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.scss';

const loggerMiddleware = createLogger()
injectTapEventPlugin();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}/>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
