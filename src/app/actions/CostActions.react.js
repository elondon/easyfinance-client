import {COST_ITEM_CHANGED, COST_ITEM_CHANGE_FAILED, COST_ITEM_CREATED, COST_ITEM_FAILED_CREATION, COST_ITEM_DELETED, COST_ITEM_FAILED_DELETE, EDIT_COST_ITEM, FINISH_EDITING_COST_ITEM} from '../constants/ActionTypes.react';
import { actions } from 'react-redux-form';
import axios from 'axios';
import {getIncomeStatement} from './EntityActions.react';

var _ = require('lodash');

const assign = Object.assign || require('object.assign');

export function createCostItem(cost) {
  return dispatch => {
    axios.post('http://localhost:5000/easyfinance/api/v1/entity/' + cost.entityId + '/cost', {
      entityId: cost.entityId,
      costName: cost.costName,
      costDescription: cost.costDescription,
      costValue: cost.costValue
    }).then(function(response) {
      dispatch(costItemCreated(response.data));
      dispatch(getIncomeStatement(cost.entityId));
    }).catch(function(error) {
      dispatch(costItemFailed(error));
    });
  }
}

export function costItemCreated(json) {
  return {type: COST_ITEM_CREATED, cost: json.cost, entityId: json.cost.entityId, receivedAt: Date.now()}
}

export function costItemFailed(json) {
  return {type: COST_ITEM_FAILED_CREATION, cost: null, entityId: null, receivedAt: Date.now()}
}

export function deleteCostItem(entityId, costId) {
  return dispatch => {
    axios.delete('http://localhost:5000/easyfinance/api/v1/entity/' + costId + '/cost/' + costId, {
    }).then(function(response) {
      dispatch(costItemDeleted(response.data));
      dispatch(getIncomeStatement(entityId));
    }).catch(function(error) {
      dispatch(costItemDeleteFailed(error));
    });
  }
}

export function costItemDeleted(json) {
  return {type: COST_ITEM_DELETED, costId: json.costId, entityId: json.entityId, receivedAt: Date.now()}
}

export function costItemDeleteFailed(json) {

}

export function decorateCostForm(cost) {
  return dispatch => {
    dispatch(actions.change('costForm.id', cost.id));
    dispatch(actions.change('costForm.entityId', cost.entityId));
  }
}

export function changeCostItem(costForm) {
  return dispatch => {
    axios.put('http://localhost:5000/easyfinance/api/v1/entity/' + costForm.entityId + '/cost/' + costForm.id, {
      entityId: cost.entityId,
      costName: cost.costName,
      costDescription: cost.costDescription,
      costValue: cost.costValue
    }).then(function(response) {
      dispatch(costItemChanged(response.data.cost));
      dispatch(getIncomeStatement(costForm.entityId));
    }).then(function(error) {
      dispatch(costItemChangeFailed(error));
    });
  }
}

export function costItemChanged(cost) {
  return {type: COST_ITEM_CHANGED, cost: cost, receivedAt: Date.now()}
}

export function costItemChangeFailed(cost) {
  return {type: COST_ITEM_CHANGE_FAILED, cost: null, receivedAt: Date.now()}
}

export function editCostItem(costId) {
  return {type: EDIT_COST_ITEM, costId: costId, receivedAt: Date.now()}
}

export function finishEditingCostItem() {
  return {type: FINISH_EDITING_COST_ITEM, receivedAt: Date.now}
}
