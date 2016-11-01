import {USER_ENTITIES_RECEIVED, USER_ENTITIES_FAILED, ACTIVE_ENTITY_CHANGED} from '../constants/ActionTypes'

const assign = Object.assign || require('object.assign');

const initialState = {
  entities : [],
  activeEntity: {
    revenue: [],
    costs: [],
    operating_expenses: []
  }
}

export default function entitiesReducer(state = initialState, action) {
  switch(action.type) {
    case USER_ENTITIES_RECEIVED:
      return assign({}, state, {
        entities: action.entities,
        activeEntity: entities[0] //todo obviously this is not what we want. For now we'll leave it.
      });
      break;
    case USER_ENTITIES_FAILED:
      //todo handle this. who cares for now.
      return state;
      break;
    case ACTIVE_ENTITY_CHANGED:
      return assign({}, state, {
        activeEntity: action.activeEntity
      });
      break;
    default:
      return state;
  }
}
