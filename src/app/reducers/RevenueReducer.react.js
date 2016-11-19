import {REVENUE_ITEM_CREATED, SELECTED_ENTITY_CHANGED, REVENUE_ITEM_FAILED_CREATION, REVENUE_ITEM_DELETED, REVENUE_ITEM_FAILED_DELETE, EDIT_REVENUE_ITEM, FINISH_EDITING_REVENUE_ITEM} from '../constants/ActionTypes.react';

var _ = require('lodash');

const assign = Object.assign || require('object.assign');

const initialState = {
  revenue: [],
  revenueParentEntityId: -1,
  editingRevenue: false
}

export default function revenueReducer(state = initialState, action) {
  let mutatedRevenue = [];
  switch(action.type) {
    case SELECTED_ENTITY_CHANGED:
      return assign({}, state, {
        revenue: action.selectedEntity.revenue,
        revenueParentEntityId: action.selectedEntity.id
      });
    case REVENUE_ITEM_CREATED:
      if(action.entityId !== state.revenueParentEntityId) {
        return state;
      }

      mutatedRevenue = _.clone(state.revenue);
      mutatedRevenue.push(action.revenue);
      return assign({}, state, {revenue: mutatedRevenue});
      break;
    case REVENUE_ITEM_FAILED_CREATION:
      return state;
      break;
    case REVENUE_ITEM_DELETED:
      if(action.entityId !== state.revenueParentEntityId) {
        return state;
      }
      mutatedRevenue = _.clone(state.revenue);
      _.remove(mutatedRevenue, {
          id: action.revenueId
      });
      return assign({}, state, {revenue: mutatedRevenue});
      break;
    case REVENUE_ITEM_FAILED_DELETE:
      return state;
      break;
    case EDIT_REVENUE_ITEM:
      return state;
    case FINISH_EDITING_REVENUE_ITEM:
      return state;
    default:
      return state;
  }
}
