import {combineReducers} from 'redux';
import todos from './todos';
import session from './SessionReducer.react'

const rootReducer = combineReducers({
  todos,
  session
});

export default rootReducer;
