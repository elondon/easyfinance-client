import {USER_ENTITIES_RECEIVED, USER_ENTITIES_FAILED, SELECTED_ENTITY_CHANGED, INCOME_STATEMENT_RECEIVED, INCOME_STATEMENT_FAILED} from '../constants/ActionTypes.react'
import axios from 'axios';

///////////////////////////////////////
// Entity Actions
///////////////////////////////////////
export function getUserEntities(userId) {
  return dispatch => {
    axios.get('http://localhost:5000/easyfinance/api/v1/user/' + userId + '/entities').then(function(response) {
      dispatch(userEntitiesReceived(response.data));
      dispatch(getIncomeStatement(response.data.entities[0].id));
      dispatch(changeSelectedEntity(response.data.entities[0]));
    }).catch(function(error) {
      console.log(error);
      dispatch(userEntitiesFailed(error));
    });
  }
}

export function userEntitiesReceived(json) {
  return {type: USER_ENTITIES_RECEIVED, entities: json.entities, receivedAt: Date.now()};
}

export function userEntitiesFailed(json) {
  return {type: USER_ENTITIES_FAILED, entities: null, receivedAt: Date.now()}
}

export function changeSelectedEntity(entity) {
  return {type: SELECTED_ENTITY_CHANGED, selectedEntity: entity, receivedAt: Date.now()}
}

///////////////////////////////////////
// Income Statement Actions
///////////////////////////////////////
export function getIncomeStatement(entityId) {
  return dispatch => {
    axios.get('http://localhost:5000/easyfinance/api/v1/entity/' + entityId + '/incomestatement').then(function(response) {
      dispatch(incomeStatementReceived(response.data));
    }).catch(function(error) {
      console.log(error);
      dispatch(incomeStatementFailed(error));
    });
  }
}

export function incomeStatementReceived(json) {
  return {type: INCOME_STATEMENT_RECEIVED, incomeStatement: json.incomeStatement, receivedAt: Date.now()}
}

export function incomeStatementFailed(json) {
  return {type: INCOME_STATEMENT_FAILED, incomeStatement: null, receivedAt: Date.now()}
}
