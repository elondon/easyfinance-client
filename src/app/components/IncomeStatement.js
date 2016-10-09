import React, {PropTypes, Component} from 'react';
import IncomeStatementFinancials from './IncomeStatementFinancials'
import Revenue from './Revenue'

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