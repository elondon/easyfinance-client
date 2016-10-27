import axios from 'axios';

// get user
export function getUserEntities(userId) {
  return dispatch => {
    axios.post('http://localhost:5000/easyfinance/api/v1/user/' + userId + '/entities')
    .then(function(response) {
      dispatch(userDataReceived(response.data));
    })
    .catch(function (error) {
      dispatch(userDataFailed(response));
    });
  }
}

export function userDataReceived(json) {
  return {
    type: USER_ENTITIES_RECEIVED,
    entities: json.data.children.map(child => child.data.entities),
    receivedAt: Date.now()
  };
}

export function userDataFailed(json) {
  return {
    type: USER_ENTITIES_FAILED,
    entities: null,
    receivedAt: Date.now()
  }
}
