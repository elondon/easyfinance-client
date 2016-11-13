import {USER_ENTITIES_RECEIVED, USER_ENTITIES_FAILED, ACTIVE_ENTITY_CHANGED, REVENUE_ITEM_CREATED, REVENUE_ITEM_FAILED_CREATION, REVENUE_ITEM_DELETED, REVENUE_ITEM_FAILED_DELETE, INCOME_STATEMENT_RECEIVED, INCOME_STATEMENT_FAILED} from '../constants/ActionTypes'
import axios from 'axios';

///////////////////////////////////////
// Entity Actions
///////////////////////////////////////
export function getUserEntities(userId) {
  return dispatch => {
    axios.get('http://localhost:5000/easyfinance/api/v1/user/' + userId + '/entities').then(function(response) {
      dispatch(userEntitiesReceived(response.data));
      dispatch(getIncomeStatement(response.data.entities[0].id)); //todo this obviously shouldnt be here either.
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

export function changeActiveEntity(entity) {
  return {type: ACTIVE_ENTITY_CHANGED, activeEntity: entity, receivedAt: Date.now()}
}

///////////////////////////////////////
// Revenue Actions
///////////////////////////////////////
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

export function revenueItemDeleted(json) {
  return {type: REVENUE_ITEM_DELETED, revenueId: parseInt(json.revenueId), entityId: json.entityId, receivedAt: Date.now()}
}

export function revenueItemDeleteFailed(json) {

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
