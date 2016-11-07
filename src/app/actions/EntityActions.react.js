import {USER_ENTITIES_RECEIVED, USER_ENTITIES_FAILED, ACTIVE_ENTITY_CHANGED, REVENUE_ITEM_CREATED, REVENUE_ITEM_FAILED_CREATION} from '../constants/ActionTypes'
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

export function changeActiveEntity(entity) {
  return {
    type: ACTIVE_ENTITY_CHANGED,
    activeEntity: entity,
    receivedAt: Date.now()
  }
}

// entity revenue
// create revenue item.
export function createRevenueItem(revenue) {
  return dispatch => {
    axios.post('http://localhost:5000/easyfinance/api/v1/entity/' + revenue.entity_id + '/revenue', {
      entity_id: revenue.entity_id,
      unit_name: revenue.unit_name,
      unit_description: revenue.unit_description,
      unit_cost: revenue.unit_cost,
      unit_count: revenue.unit_count
    }).then(function(response) {
      dispatch(revenueItemCreated(response));
    }).catch(function(error) {
      dispatch(revenueItemFailed(error));
    });
  }
}

export function revenueItemCreated(response) {
  console.log(response);
  return {
    type: REVENUE_ITEM_CREATED,
    revenue: response.data.revenue,
    entity_id: response.data.revenue.entity_id,
    receivedAt: Date.now()
  }
}

export function revenueItemFailed(json) {
  return {
    type: REVENUE_ITEM_FAILED_CREATION,
    revenue: null,
    entity_id: null,
    receivedAt: Date.now()
  }
}


// todo implement below. dont need them yet.
// get individual entity
// create entity
// delete entity
