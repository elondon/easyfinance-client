import {combineReducers} from 'redux';
import session from './SessionReducer.react';
import entity from './EntityReducer.react';
import revenue from './revenueReducer.react';
import navigation from './NavigationReducer.react';
import cost from './costReducer.react';
import { combineForms } from 'react-redux-form';

// react-redux-forms
// todo there is definitely a better place for this.
const initialRevenueState = {
  id: -1,
  entityId: -1,
  unitName: '',
  unitDescription: '',
  unitCost: 0,
  unitCount: 0
}

const initialCostState = {
  id: -1,
  entityId: -1,
  costName: '',
  costDescription: '',
  costValue: 0
}

const forms = combineForms({
  revenueForm: initialRevenueState,
  costForm: initialCostState
});
const rootReducer = combineReducers({
  session,
  entity,
  revenue,
  cost,
  navigation,
  forms
});

export default rootReducer;
