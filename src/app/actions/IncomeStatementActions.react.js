import {SHOW_INCOME_STATEMENT_REVENUE, SHOW_INCOME_STATEMENT_COSTS, SHOW_INCOMESTATEMENT_OPEX} from '../constants/ActionTypes.react';

export function showRevenue() {
  return {type: SHOW_INCOME_STATEMENT_REVENUE, receivedAt: Date.now()};
}

export function showCosts() {
  return {type: SHOW_INCOME_STATEMENT_COSTS, receivedAt: Date.now()};
}

export function showOpEx() {
  return {type: SHOW_INCOMESTATEMENT_OPEX, receivedAt: Date.now()};
}
