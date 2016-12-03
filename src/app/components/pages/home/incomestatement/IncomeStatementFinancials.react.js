import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EntityActions from '../../../../actions/EntityActions.react';
import * as IncomeStatementActions from '../../../../actions/IncomeStatementActions.react';
import Divider from 'material-ui/Divider';

const _ = require('lodash');
const plusSign = require('../../../../../assets/images/plus-sign-64.png');
const minusSign = require('../../../../../assets/images/minus-sign-64.png');
const equalsSign = require('../../../../../assets/images/equal-sign-64.png');

class IncomeStatementFinancials extends Component {

  onShowRevenue() {
    this.props.actions.showRevenue();
  }

  onShowCosts() {
    this.props.actions.showCosts();
  }

  onShowOperatingExpenses() {
    this.props.actions.showOpEx();
  }

  render() {
    const statement = this.props.selectedIncomeStatement;
    return (
      <div className="income-statement-financials">
        <div className="revenue-summary">
          <img className="math-symbol" src={plusSign}/>
          <div className="revenue-summary-box" onClick={this.onShowRevenue.bind(this)}>
            <h3>Revenue: ${statement.totalRevenue}</h3>
            <h5>{statement.totalRevenueItems} line item</h5>
          </div>
        </div>
        <div className="cost-summary">
          <img className="math-symbol" src={minusSign}/>
          <div className="costs-summary-box" onClick={this.onShowCosts.bind(this)}>
            <h3>Costs: ${statement.totalCosts}</h3>
            <h5>{statement.totalCostItems} line item</h5>
          </div>
        </div>
        <Divider/>
        <div className="gross-profit">
          <img className="math-symbol" src={equalsSign}/>
          <div className="gross-profit-box">
            <h3>Gross Profit: ${statement.grossProfit}</h3>
            <h5>0%</h5>
          </div>
        </div>
        <div className="operating-expenses">
          <img className="math-symbol" src={minusSign}/>
          <div className="operating-expenses-box" onClick={this.onShowOperatingExpenses.bind(this)}>
            <h3>Operating Expenses: ${statement.totalOpex}</h3>
            <h5>{statement.totalOpexItems} line items</h5>
          </div>
        </div>
        <Divider/>
        <div className="ebitda">
          <img className="math-symbol" src={equalsSign}/>
          <div className="ebitda-box">
            <h3>EPITDA: ${statement.ebitda}</h3>
            <h5>{statement.totalRevenueItems + statement.totalCostItems + statement.totalOpexItems} total line items</h5>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {selectedIncomeStatement: state.entity.selectedIncomeStatement}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, EntityActions, IncomeStatementActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IncomeStatementFinancials);
