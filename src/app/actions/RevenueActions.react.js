import {REVENUE_ITEM_CHANGED, REVENUE_ITEM_CHANGE_FAILED, REVENUE_ITEM_CREATED, REVENUE_ITEM_FAILED_CREATION, REVENUE_ITEM_DELETED, REVENUE_ITEM_FAILED_DELETE, EDIT_REVENUE_ITEM, FINISH_EDITING_REVENUE_ITEM} from '../constants/ActionTypes.react';
import { actions } from 'react-redux-form';
import axios from 'axios';

export function createRevenueItem(revenue) {
  return dispatch => {
    axios.post('http://localhost:5000/easyfinance/api/v1/entity/' + revenue.entityId + '/revenue', {
      entityId: revenue.entityId,
      unitName: revenue.unitName,
      unitDescription: revenue.unitDescription,
      unitCost: revenue.unitCost,
      unitCount: revenue.unitCount
    }).then(function(response) {
      dispatch(revenueItemCreated(response.data));
    }).catch(function(error) {
      dispatch(revenueItemFailed(error));
    });
  }
}

export function revenueItemCreated(json) {
  return {type: REVENUE_ITEM_CREATED, revenue: json.revenue, entityId: json.revenue.entityId, receivedAt: Date.now()}
}

export function revenueItemFailed(json) {
  return {type: REVENUE_ITEM_FAILED_CREATION, revenue: null, entityId: null, receivedAt: Date.now()}
}

export function deleteRevenueItem(entityId, revenueId) {
  return dispatch => {
    axios.delete('http://localhost:5000/easyfinance/api/v1/entity/' + entityId + '/revenue/' + revenueId, {
    }).then(function(response) {
      dispatch(revenueItemDeleted(response.data));
    }).catch(function(error) {
      dispatch(revenueItemDeleteFailed(error));
    });
  }
}

export function decorateRevenueForm(revenue) {
  return dispatch => {
    dispatch(actions.change('revenueForm.id', revenue.id));
    dispatch(actions.change('revenueForm.entityId', revenue.entityId));
  }
}

export function changeRevenueItem(revenueForm) {
  return dispatch => {
    axios.put('http://localhost:5000/easyfinance/api/v1/entity/' + revenueForm.entityId + '/revenue/' + revenueForm.id, {
      unitName: revenueForm.unitName,
      unitDescription: revenueForm.unitDescription,
      unitCost: revenueForm.unitCost,
      unitCount: revenueForm.unitCount
    }).then(function(response) {
      dispatch(revenueItemChanged(response.data.revenue));
    }).then(function(error) {
      dispatch(revenueItemChangeFailed(error));
    });
  }
}

export function revenueItemChanged(revenue) {
  return {type: REVENUE_ITEM_CHANGED, revenue: revenue, receivedAt: Date.now()}
}

export function revenueItemChangeFailed(revenue) {
  return {type: REVENUE_ITEM_CHANGE_FAILED, revenue: null, receivedAt: Date.now()}
}

export function revenueItemDeleted(json) {
  return {type: REVENUE_ITEM_DELETED, revenueId: json.revenueId, entityId: json.entityId, receivedAt: Date.now()}
}

export function revenueItemDeleteFailed(json) {

}

export function editRevenueItem(revenueId) {
  return {type: EDIT_REVENUE_ITEM, revenueId: revenueId, receivedAt: Date.now()}
}

export function finishEditingRevenueItem() {
  return {type: FINISH_EDITING_REVENUE_ITEM, receivedAt: Date.now}
}
