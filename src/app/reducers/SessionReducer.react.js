import { REGISTER_SUCCESS, REGISTER_FAIL, CHANGE_REGISTER_FORM, LOGIN_SUCCESS, LOGIN_FAIL, CHANGE_LOGIN_FORM } from '../constants/ActionTypes'

const assign = Object.assign || require('object.assign');

const initialState = {
    user: null,
    registerForm: {
      email: '',
      password: '',
      registerModalOpen: false
    },
    loginForm: {
      email: '',
      password: ''
    }
}

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_REGISTER_FORM:
      return assign({}, state, {
        registerForm: action.newState
      });
      break;
    case REGISTER_SUCCESS:
      break;
    case REGISTER_FAIL:
      break;
    case LOGIN_SUCCESS:
      return assign({}, state, {
        user: action.user
      });
    case LOGIN_FAIL:
      break;
    case CHANGE_LOGIN_FORM:
      return assign({}, state, {
        loginForm: action.newState
      });
      break;
    default:
      return state;
  }
}
