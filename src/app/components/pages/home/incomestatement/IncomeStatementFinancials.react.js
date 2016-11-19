import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EntityActions from '../../../../actions/EntityActions.react';
import * as IncomeStatementActions from '../../../../actions/IncomeStatementActions.react';

var _ = require('lodash');

class IncomeStatementFinancials extends Component {
  constructor(props) {
    super(props);
  }

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
        <div className="revenue-summary-box" onClick={this.onShowRevenue.bind(this)}>
          <h3>Revenue: ${statement.totalRevenue}</h3>
          <h5>{statement.totalRevenueItems} line item</h5>
        </div>
        <div className="costs-summary-box" onClick={this.onShowCosts.bind(this)}>
          <h3>Costs: ${statement.totalCosts}</h3>
          <h5>{statement.totalCostItems} line item</h5>
        </div>
        <div className="gross-profit-box">
          <h3>Gross Profit: ${statement.grossProfit}</h3>
          <h5>0%</h5>
        </div>
        <div className="operating-expenses-box" onClick={this.onShowOperatingExpenses.bind(this)}>
          <h3>Operating Expenses: ${statement.totalOpex}</h3>
          <h5>{statement.totalOpexItems} line items</h5>
        </div>
        <div className="ebitda-box">
          <h3>EPITDA: ${statement.ebitda}</h3>
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
