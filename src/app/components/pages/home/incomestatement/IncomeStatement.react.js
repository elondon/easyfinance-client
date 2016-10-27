import React, {PropTypes, Component} from 'react';
import IncomeStatementFinancials from './IncomeStatementFinancials.react'
import Revenue from './Revenue.react'

class IncomeStatement extends Component {
      constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="income-statement">
                 <IncomeStatementFinancials/>
                 <Revenue/>
            </div>
        );
    }
}

export default IncomeStatement;
