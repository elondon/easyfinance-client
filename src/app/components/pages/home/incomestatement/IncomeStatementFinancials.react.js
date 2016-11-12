import React, {PropTypes, Component} from 'react';

class IncomeStatementFinancials extends Component {
      constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="income-statement-financials">
                <div className="revenue-summary-box">
                    <h3>Revenue: $500</h3>
                    <h5>1 line item</h5>
                </div>
                <div className="costs-summary-box">
                    <h3>Costs: $500</h3>
                    <h5>1 line item</h5>
                </div>
                <div className="gross-profit-box">
                    <h3>Gross Profit: $0</h3>
                    <h5>0%</h5>
                </div>
                <div className="operating-expenses-box">
                    <h3>Operating Expenses: $200</h3>
                    <h5>5 line items</h5>
                </div>
                <div className="ebitda-box">
                    <h3>EPITDA: ($200)</h3>
                    <h5>5 line items</h5>
                </div>
            </div>
        );
    }
}

export default IncomeStatementFinancials;
