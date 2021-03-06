import {OPEX_ITEM_CHANGED, OPEX_ITEM_CHANGE_FAILED, OPEX_ITEM_CREATED, OPEX_ITEM_FAILED_CREATION, OPEX_ITEM_DELETED, OPEX_ITEM_FAILED_DELETE, EDIT_OPEX_ITEM, FINISH_EDITING_OPEX_ITEM} from '../constants/ActionTypes.react';
import {actions} from 'react-redux-form';
import axios from 'axios';
import {getIncomeStatement} from './EntityActions.react';

const _ = require('lodash');

export function createOpexItem(opex) {
  return dispatch => {
    axios.post(`http://localhost:5000/easyfinance/api/v1/entity/${opex.entityId}/opex`, {
      entityId: opex.entityId,
      name: opex.name,
      description: opex.description,
      value: opex.value
    }).then(response => {
      dispatch(opexItemCreated(response.data));
      dispatch(getIncomeStatement(opex.entityId));
    }).catch(error => {
      dispatch(opexItemFailed(error));
    });
  };
}

export function opexItemCreated(json) {
  return {type: OPEX_ITEM_CREATED, opex: json.operatingExpense, entityId: json.operatingExpense.entityId, receivedAt: Date.now()};
}

export function opexItemFailed(error) {
  console.log(error);
  return {type: OPEX_ITEM_FAILED_CREATION, opex: null, entityId: null, receivedAt: Date.now()}
}

export function deleteOpexItem(entityId, opexId) {
  return dispatch => {
    axios.delete(`http://localhost:5000/easyfinance/api/v1/entity/${entityId}/opex/${opexId}`, {
    }).then(response => {
      dispatch(opexItemDeleted(response.data));
      dispatch(getIncomeStatement(entityId));
    }).catch(error => {
      dispatch(opexItemDeleteFailed(error));
    });
  };
}

export function opexItemDeleted(json) {
  return {type: OPEX_ITEM_DELETED, opexId: json.operatingExpenseId, entityId: json.entityId, receivedAt: Date.now()};
}

export function opexItemDeleteFailed(error) {
  console.log(error);
}

export function decorateOpexForm(opex) {
  return dispatch => {
    dispatch(actions.change('opexForm.id', opex.id));
    dispatch(actions.change('opexForm.entityId', opex.entityId));
  };
}

export function changeOpexItem(opexForm) {
  return dispatch => {
    axios.put(`http://localhost:5000/easyfinance/api/v1/entity/${opexForm.entityId}/opex/${opexForm.id}`, {
      entityId: opexForm.entityId,
      name: opexForm.name,
      description: opexForm.description,
      value: opexForm.value
    }).then(response => {
      dispatch(opexItemChanged(response.data.operatingExpense));
      dispatch(getIncomeStatement(opexForm.entityId));
    }).then(error => {
      dispatch(opexItemChangeFailed(error));
    });
  };
}

export function opexItemChanged(opex) {
  return {type: OPEX_ITEM_CHANGED, opex, receivedAt: Date.now()};
}

export function opexItemChangeFailed(error) {
  console.log(error);
  return {type: OPEX_ITEM_CHANGE_FAILED, opex: null, receivedAt: Date.now()};
}

export function editOpexItem(opexId) {
  return {type: EDIT_OPEX_ITEM, opexId, receivedAt: Date.now()};
}

export function finishEditingOpexItem() {
  return {type: FINISH_EDITING_OPEX_ITEM, receivedAt: Date.now};
}
