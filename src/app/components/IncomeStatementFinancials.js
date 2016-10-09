import React, {PropTypes, Component} from 'react';

class IncomeStatementFinancials extends Component {
      constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="income-statement-financials">
                <div className="financial-summary-box">
                    <h3>Revenue: $500</h3>
                    <h5>1 line item</h5>
                </div>
            </div>
        );
    }
}

export default IncomeStatementFinancials;