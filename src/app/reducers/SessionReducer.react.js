import { REGISTER_SUCCESS, REGISTER_FAIL, CHANGE_REGISTER_FORM } from '../constants/ActionTypes'

const assign = Object.assign || require('object.assign');

const initialState = {
    user: null,
    registerFormState: {
      email: '',
      password: '',
      registerModalOpen: false
  }
}



export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_REGISTER_FORM:
      return assign({}, state, {
        registerFormState: action.newState
      });
      break;
    case REGISTER_SUCCESS:
      break;
    case REGISTER_FAIL:
      break;
    default:
      return state;
  }
}
