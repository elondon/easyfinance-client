import {COST_ITEM_CHANGED, COST_ITEM_CHANGE_FAILED,COST_ITEM_CREATED, SELECTED_ENTITY_CHANGED, COST_ITEM_FAILED_CREATION, COST_ITEM_DELETED, COST_ITEM_FAILED_DELETE, EDIT_COST_ITEM, FINISH_EDITING_COST_ITEM} from '../constants/ActionTypes.react';

var _ = require('lodash');

const assign = Object.assign || require('object.assign');

const initialState = {
  cost: [],
  costParentEntityId: -1,
  editingCost: false
}

export default function costReducer(state = initialState, action) {
  let mutatedCost = [];
  switch(action.type) {
    case SELECTED_ENTITY_CHANGED:
      return assign({}, state, {
        cost: action.selectedEntity.cost,
        costParentEntityId: action.selectedEntity.id
      });
    case COST_ITEM_CREATED:
      if(action.entityId !== state.costParentEntityId) {
        return state;
      }

      mutatedCost = _.clone(state.cost);
      mutatedCost.push(action.cost);
      return assign({}, state, {cost: mutatedCost});
      break;
    case COST_ITEM_FAILED_CREATION:
      return state;
      break;
    case COST_ITEM_DELETED:
      if(action.entityId !== state.costParentEntityId) {
        return state;
      }
      mutatedCost = _.clone(state.cost);
      _.remove(mutatedCost, {
          id: action.costId
      });
      return assign({}, state, {cost: mutatedCost});
      break;
    case COST_ITEM_FAILED_DELETE:
      return state;
      break;
    case EDIT_COST_ITEM:
      return assign({}, state, {editingCost: true});
    case FINISH_EDITING_COST_ITEM:
      return assign({}, state, {editingCost: false});
    case COST_ITEM_CHANGED:
      if(action.cost.entityId !== state.costParentEntityId) {
        return state;
      }
      mutatedCost = _.cloneDeep(state.cost);
      let costItem = _.find(mutatedCost, {'id': action.cost.id});
      //todo need the JS way of doing this. I'm sure assign would work.
      costItem.costName = action.cost.costName;
      costItem.costDescription = action.cost.costDescription;
      costItem.costValue = action.cost.costValue;
      return assign({}, state, {cost: mutatedCost});
    case COST_ITEM_CHANGE_FAILED:
      return state;
    default:
      return state;
  }
}
