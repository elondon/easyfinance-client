import {combineReducers} from 'redux';
import session from './SessionReducer.react'
import entity from './EntityReducer.react'
import navigation from './NavigationReducer.react'
import { combineForms } from 'react-redux-form';

// react-redux-forms
// todo there is definitely a better place for this.
const initialRevenueState = {
  widgetName: '',
  widgetCost: 0,
  widgetCount: 0
}

const formsReducers = combineForms({
  revenue: initialRevenueState,
});
const rootReducer = combineReducers({
  session,
  entity,
  navigation,
  formsReducers
});

export default rootReducer;
