import {combineReducers} from 'redux';
import session from './SessionReducer.react'
import entity from './EntityReducer.react'

const rootReducer = combineReducers({
  session,
  entity
});

export default rootReducer;
