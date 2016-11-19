import {OPEX_ITEM_CHANGED, OPEX_ITEM_CHANGE_FAILED,OPEX_ITEM_CREATED, SELECTED_ENTITY_CHANGED, OPEX_ITEM_FAILED_CREATION, OPEX_ITEM_DELETED, OPEX_ITEM_FAILED_DELETE, EDIT_OPEX_ITEM, FINISH_EDITING_OPEX_ITEM} from '../constants/ActionTypes.react';

var _ = require('lodash');

const assign = Object.assign || require('object.assign');

const initialState = {
  opexs: [],
  costParentEntityId: -1,
  editingOpex: false
}

export default function costReducer(state = initialState, action) {
  let mutatedOpexs = [];
  switch(action.type) {
    case SELECTED_ENTITY_CHANGED:
      return assign({}, state, {
        opexs: action.selectedEntity.opexs,
        costParentEntityId: action.selectedEntity.id
      });
    case OPEX_ITEM_CREATED:
      if(action.entityId !== state.costParentEntityId) {
        return state;
      }

      mutatedOpexs = _.clone(state.opexs);
      mutatedOpexs.push(action.cost);
      return assign({}, state, {opexs: mutatedOpexs});
      break;
    case OPEX_ITEM_FAILED_CREATION:
      return state;
      break;
    case OPEX_ITEM_DELETED:
      if(action.entityId !== state.costParentEntityId) {
        return state;
      }
      mutatedOpexs = _.clone(state.opexs);
      _.remove(mutatedOpexs, {
          id: action.costId
      });
      return assign({}, state, {opexs: mutatedOpexs});
      break;
    case OPEX_ITEM_FAILED_DELETE:
      return state;
      break;
    case EDIT_OPEX_ITEM:
      return assign({}, state, {editingOpex: true});
    case FINISH_EDITING_OPEX_ITEM:
      return assign({}, state, {editingOpex: false});
    case OPEX_ITEM_CHANGED:
      if(action.cost.entityId !== state.costParentEntityId) {
        return state;
      }
      mutatedOpexs = _.cloneDeep(state.opexs);
      let costItem = _.find(mutatedOpexs, {'id': action.cost.id});
      //todo need the JS way of doing this. I'm sure assign would work.
      costItem.name = action.cost.name;
      costItem.description = action.cost.description;
      costItem.value = action.cost.value;
      return assign({}, state, {opexs: mutatedOpexs});
    case OPEX_ITEM_CHANGE_FAILED:
      return state;
    default:
      return state;
  }
}
