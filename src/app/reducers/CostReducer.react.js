import {COST_ITEM_CHANGED, COST_ITEM_CHANGE_FAILED,COST_ITEM_CREATED, SELECTED_ENTITY_CHANGED, COST_ITEM_FAILED_CREATION, COST_ITEM_DELETED, COST_ITEM_FAILED_DELETE, EDIT_COST_ITEM, FINISH_EDITING_COST_ITEM} from '../constants/ActionTypes.react';

var _ = require('lodash');

const assign = Object.assign || require('object.assign');

const initialState = {
  costs: [],
  costParentEntityId: -1,
  editingCost: false
}

export default function costReducer(state = initialState, action) {
  let mutatedCosts = [];
  switch(action.type) {
    case SELECTED_ENTITY_CHANGED:
      return assign({}, state, {
        costs: action.selectedEntity.costs,
        costParentEntityId: action.selectedEntity.id
      });
    case COST_ITEM_CREATED:
      if(action.entityId !== state.costParentEntityId) {
        return state;
      }

      mutatedCosts = _.clone(state.costs);
      mutatedCosts.push(action.cost);
      return assign({}, state, {costs: mutatedCosts});
      break;
    case COST_ITEM_FAILED_CREATION:
      return state;
      break;
    case COST_ITEM_DELETED:
      if(action.entityId !== state.costParentEntityId) {
        return state;
      }
      mutatedCosts = _.clone(state.costs);
      _.remove(mutatedCosts, {
          id: action.costId
      });
      return assign({}, state, {costs: mutatedCosts});
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
      mutatedCosts = _.cloneDeep(state.costs);
      let costItem = _.find(mutatedCosts, {'id': action.cost.id});
      //todo need the JS way of doing this. I'm sure assign would work.
      costItem.name = action.cost.name;
      costItem.description = action.cost.description;
      costItem.value = action.cost.value;
      return assign({}, state, {costs: mutatedCosts});
    case COST_ITEM_CHANGE_FAILED:
      return state;
    default:
      return state;
  }
}
