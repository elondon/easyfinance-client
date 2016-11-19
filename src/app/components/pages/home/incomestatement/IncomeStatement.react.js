import React, {PropTypes, Component} from 'react';
import IncomeStatementFinancials from './IncomeStatementFinancials.react'
import Revenue from './Revenue.react'
import Cost from './Cost.react'
import Opex from './Opex.react'

class IncomeStatement extends Component {
  constructor(props) {
    super(props);
  }

  renderDetails() {
    if (this.props.revenueShowing) {
      return (<Revenue/>)
    }
    if (this.props.costShowing) {
      return (<Cost/>)
    }
    if (this.props.opexShowing) {
      return (<Opex/>)
    }
  }

  render() {
    const details = this.renderDetails();
    return (
      <div className="income-statement">
        <IncomeStatementFinancials/>
        {details}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {revenueShowing: state.incomeStatement.revenueShowing, costShowing: state.incomeStatement.costShowing, opexShowing: state.incomeStatement.opexShowing}
}

export default IncomeStatement;
