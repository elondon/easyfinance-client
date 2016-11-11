import {USER_ENTITIES_RECEIVED, USER_ENTITIES_FAILED, ACTIVE_ENTITY_CHANGED, REVENUE_ITEM_CREATED, REVENUE_ITEM_FAILED_CREATION} from '../constants/ActionTypes'
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
  activeEntityIndex: 0
}

export default function entitiesReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ENTITIES_RECEIVED:
      return assign({}, state, {
        entities: action.entities,
        activeEntityIndex: 0 //todo obviously this is not what we want. For now we'll leave it.
      });
      break;
    case USER_ENTITIES_FAILED:
      //todo handle this. who cares for now.
      return state;
      break;
    case ACTIVE_ENTITY_CHANGED:
      return assign({}, state, {activeEntityIndex: action.activeEntityIndex});
      break;
    case REVENUE_ITEM_CREATED:
      var newEntities = _.cloneDeep(state.entities);
      var mutatedEntity = _.find(newEntities, {'id': action.entityId});
      mutatedEntity.revenue.push(action.revenue);
      return assign({}, state, {entities: newEntities});
      break;
    case REVENUE_ITEM_FAILED_CREATION:
      return state;
      break;
    default:
      return state;
  }
}
