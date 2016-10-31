import axios from 'axios';

var Config = require('Config')

// create revenue item.
export function createRevenueItem(entityId, name, description, value) {
  return dispatch => {
    axios.post(API_URL + '/entityId', {
      entityId: entityId,
      name: name,
      description: description,
      value: value
    });
  }
}

export function revenueItemCreated(json) {
  return {
    type: REVENUE_ITEM_CREATED,
    revenue: json.children.map(child => child.data.revenue),
    receivedAt: Date.now();
  }
}

export function revenueItemFailed(json) {
  return {
    type: REVENUE_ITEM_FAILED_CREATION,
    revenue: null,
    receivedAt: Date.now();
  }
}
