import {USER_ENTITIES_RECEIVED, USER_ENTITIES_FAILED, SELECTED_ENTITY_CHANGED, REVENUE_ITEM_CREATED, REVENUE_ITEM_FAILED_CREATION, REVENUE_ITEM_DELETED, REVENUE_ITEM_FAILED_DELETE, INCOME_STATEMENT_RECEIVED, INCOME_STATEMENT_FAILED} from '../constants/ActionTypes.react'
var _ = require('lodash');

const assign = Object.assign || require('object.assign');

const initialState = {
  entities: [
    {
      id: -1,
      revenue: [],
      costs: [],
      operatingExpenses: []
    }
  ],
  selectedIncomeStatement: {},
  selectedEntityIndex: 0
}

export default function entitiesReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ENTITIES_RECEIVED:
      return assign({}, state, {
        entities: action.entities
      });
      break;
    case USER_ENTITIES_FAILED:
      //todo handle this. who cares for now.
      return state;
      break;
    case SELECTED_ENTITY_CHANGED:
      return assign({}, state, {selectedEntityIndex: action.selectedEntity.id});
      break;
    case INCOME_STATEMENT_RECEIVED:
      return assign({}, state, {selectedIncomeStatement: action.incomeStatement});
    case INCOME_STATEMENT_FAILED:
      return state;
    default:
      return state;
  }
}
