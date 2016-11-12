import {combineReducers} from 'redux';
import session from './SessionReducer.react'
import entity from './EntityReducer.react'
import navigation from './NavigationReducer.react'

const rootReducer = combineReducers({
  session,
  entity,
  navigation
});

export default rootReducer;
