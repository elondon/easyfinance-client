import {USER_ENTITIES_RECEIVED, USER_ENTITIES_FAILED} from '../constants/ActionTypes'
import axios from 'axios';

// get user entities
export function getUserEntities(userId) {
  return dispatch => {
    axios.get('http://localhost:5000/easyfinance/api/v1/user/' + userId + '/entities')
    .then(function(response) {
      dispatch(userEntitiesReceived(response));
    })
    .catch(function (error) {
      console.log(error);
      dispatch(userEntitiesFailed(error));
    });
  }
}

export function userEntitiesReceived(json) {
  return {
    type: USER_ENTITIES_RECEIVED,
    entities: json.data.entities,
    receivedAt: Date.now()
  };
}

export function userEntitiesFailed(json) {
  return {
    type: USER_ENTITIES_FAILED,
    entities: null,
    receivedAt: Date.now()
  }
}

// todo implement below. dont need them yet.
// get individual entity
// create entity
// delete entity
