import {REVENUE_ITEM_CHANGED, REVENUE_ITEM_CHANGE_FAILED, REVENUE_ITEM_CREATED, REVENUE_ITEM_FAILED_CREATION, REVENUE_ITEM_DELETED, REVENUE_ITEM_FAILED_DELETE, EDIT_REVENUE_ITEM, FINISH_EDITING_REVENUE_ITEM} from '../constants/ActionTypes.react';
import {actions} from 'react-redux-form';
import axios from 'axios';
import {getIncomeStatement} from './EntityActions.react';

export function createRevenueItem(revenue) {
  return dispatch => {
    axios.post(`http://localhost:5000/easyfinance/api/v1/entity/${revenue.entityId}/revenue`, {
      entityId: revenue.entityId,
      unitName: revenue.unitName,
      unitDescription: revenue.unitDescription,
      unitCost: revenue.unitCost,
      unitCount: revenue.unitCount
    }).then(response => {
      dispatch(revenueItemCreated(response.data));
      dispatch(getIncomeStatement(revenue.entityId));
    }).catch(error => {
      dispatch(revenueItemFailed(error));
    });
  };
}

export function revenueItemCreated(json) {
  return {type: REVENUE_ITEM_CREATED, revenue: json.revenue, entityId: json.revenue.entityId, receivedAt: Date.now()};
}

export function revenueItemFailed(error) {
  console.log(error);
  return {type: REVENUE_ITEM_FAILED_CREATION, revenue: null, entityId: null, receivedAt: Date.now()};
}

export function deleteRevenueItem(entityId, revenueId) {
  return dispatch => {
    axios.delete(`http://localhost:5000/easyfinance/api/v1/entity/${entityId}/revenue/${revenueId}`, {
    }).then(response => {
      dispatch(revenueItemDeleted(response.data));
      dispatch(getIncomeStatement(entityId));
    }).catch(error => {
      dispatch(revenueItemDeleteFailed(error));
    });
  };
}

export function revenueItemDeleted(json) {
  return {type: REVENUE_ITEM_DELETED, revenueId: json.revenueId, entityId: json.entityId, receivedAt: Date.now()}
}

export function revenueItemDeleteFailed(error) {
  console.log(error);
}

export function decorateRevenueForm(revenue) {
  return dispatch => {
    dispatch(actions.change('revenueForm.id', revenue.id));
    dispatch(actions.change('revenueForm.entityId', revenue.entityId));
  };
}

export function changeRevenueItem(revenueForm) {
  return dispatch => {
    axios.put(`http://localhost:5000/easyfinance/api/v1/entity/${revenueForm.entityId}/revenue/${revenueForm.id}`, {
      unitName: revenueForm.unitName,
      unitDescription: revenueForm.unitDescription,
      unitCost: revenueForm.unitCost,
      unitCount: revenueForm.unitCount
    }).then(response => {
      dispatch(revenueItemChanged(response.data.revenue));
      dispatch(getIncomeStatement(revenueForm.entityId));
    }).then(error => {
      dispatch(revenueItemChangeFailed(error));
    });
  };
}

export function revenueItemChanged(revenue) {
  return {type: REVENUE_ITEM_CHANGED, revenue, receivedAt: Date.now()};
}

export function revenueItemChangeFailed(error) {
  console.log(error);
  return {type: REVENUE_ITEM_CHANGE_FAILED, revenue: null, receivedAt: Date.now()};
}

export function editRevenueItem(revenueId) {
  return {type: EDIT_REVENUE_ITEM, revenueId, receivedAt: Date.now()};
}

export function finishEditingRevenueItem() {
  return {type: FINISH_EDITING_REVENUE_ITEM, receivedAt: Date.now};
}
