import {CHANGE_SELECTED_ENTITY,SHOW_INCOME_STATEMENT_REVENUE, SHOW_INCOME_STATEMENT_COSTS, SHOW_INCOMESTATEMENT_OPEX} from '../constants/ActionTypes.react';

const assign = Object.assign || require('object.assign');

const initialState = {
  revenueShowing: true,
  costShowing: false,
  opexShowing: false
}

export default function incomeStatementReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_SELECTED_ENTITY:
      return assign({}, state, {
        revenueShowing: true,
        costShowing: false,
        opexShowing: false
      });
    case SHOW_INCOME_STATEMENT_REVENUE:
      return assign({}, state, {
        revenueShowing: true,
        costShowing: false,
        opexShowing: false
      });
    case SHOW_INCOME_STATEMENT_COSTS:
      return assign({}, state, {
        revenueShowing: false,
        costShowing: true,
        opexShowing: false
      });
    case SHOW_INCOMESTATEMENT_OPEX:
      return assign({}, state, {
        revenueShowing: false,
        costShowing: false,
        opexShowing: true
      });
    default:
      return state;
  }
}
