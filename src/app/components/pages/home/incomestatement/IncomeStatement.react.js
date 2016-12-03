import React, {Component} from 'react';
import {connect} from 'react-redux';
import IncomeStatementFinancials from './IncomeStatementFinancials.react';
import Revenue from './Revenue.react';
import Cost from './Costs.react';
import OperatingExpenses from './OperatingExpenses.react';

class IncomeStatement extends Component {
  renderDetails() {
    if (this.props.revenueShowing === true) {
      return (<Revenue/>)
    }
    if (this.props.costShowing === true) {
      return (<Cost/>)
    }
    if (this.props.opexShowing === true) {
      return (<OperatingExpenses/>);
    }
  }

  render() {
    const details = this.renderDetails();
    return (
      <div className="income-statement">
        <div className="income-statement-title">
          <h3 className="title">Income Statement</h3>
        </div>
        <IncomeStatementFinancials/>
        {details}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {revenueShowing: state.incomeStatement.revenueShowing, costShowing: state.incomeStatement.costShowing, opexShowing: state.incomeStatement.opexShowing}
}

export default connect(mapStateToProps)(IncomeStatement);
