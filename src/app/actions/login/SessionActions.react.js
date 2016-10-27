import {CHANGE_REGISTER_FORM, CHANGE_LOGIN_FORM, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_FAIL, REGISTER_SUCCESS, USER_REGISTERED} from '../../constants/ActionTypes';
import axios from 'axios';

// Register
export function changeRegisterForm(newState) {
  return { type: CHANGE_REGISTER_FORM, newState};
}

export function userRegistered(json) {
  return {
    type: USER_REGISTERED,
    user: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}

export function registerUser(email, password) {
  return dispatch => {
      axios.post('http://localhost:5000/easyfinance/api/v1/auth/register?username=' + email + '&password=' + password)
      .then(function (response) {
        dispatch(userRegistered(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export function loginUser(email, password) {
  console.log('hello');
  console.log(email + password);
  return dispatch => {
     axios.post('http://localhost:5000/easyfinance/api/v1/auth/login?username=' + email + '&password=' + password)
      .then(function (response) {
        dispatch(userLoggedIn(response.data));
      })
      .catch(function (error) {
        //todo add fails;
      });
    }
}

export function changeLoginForm(newState) {
  return { type: CHANGE_LOGIN_FORM, newState };
}

export function changeRegisterForm(newState) {
  return { type: CHANGE_REGISTER_FORM, newState};
}

export function userLoggedIn(json) {
  return {
    type: LOGIN_SUCCESS,
    user: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}