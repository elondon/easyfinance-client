import * as types from '../constants/ActionTypes';
import * as API from '../constants/EndPoints';

export function

export function requestRegisterUser(email, password) {
  return {type: types.REGISTER_USER, email, password};
}

export function userRegistered(json) {
  return {
    type: USER_REGISTERED,
    user: json.data.children.map(child => child.data),
    received_at: Date.now()
  }
}

function registerUser(email, password) {
  return dispatch => {
    dispatch(requestRegisterUser(username,password))
    return axios.post(API + '/auth/register?username=username&password=password')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export function loginUser(username, email, password) {
  return {type: types.LOGIN_USER. username, email, password};
}

export function userLoggedIn(json) {
  return {
    type: USER_LOGGED_IN,
    user: json.data.children.map(child => child.data),
    received_at: Date.now()
  }
}
