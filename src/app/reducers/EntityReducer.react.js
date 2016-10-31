import {USER_ENTITIES_RECEIVED, USER_ENTITIES_FAILED} from '../constants/ActionTypes'

const assign = Object.assign || require('object.assign');

const initialState = {
  entities : []
}

export default function entitiesReducer(state = initialState, action) {
  switch(action.type) {
    case USER_ENTITIES_RECEIVED:
      return assign({}, state, {
        entities: action.entities
      });
      break;
    case USER_ENTITIES_FAILED:
      //todo handle this. who cares for now.
      return state;
      break;
    default:
      return state;
  }
}
