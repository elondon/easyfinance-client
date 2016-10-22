import { CHANGE_REGISTER_FORM } from '../../constants/ActionTypes';
import axios from 'axios';

export function changeRegisterForm(newState) {
  return { type: CHANGE_REGISTER_FORM, newState};
}

export function userRegistered(json) {
  return {
    type: USER_REGISTERED,
    user: json.data.children.map(child => child.data),
    received_at: Date.now()
  }
}

export function registerUser(email, password) {
  return dispatch => {
    return axios.post('http://localhost:5000/easyfinance/api/v1/auth/register?username=' + email + '&password=' + password)
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
