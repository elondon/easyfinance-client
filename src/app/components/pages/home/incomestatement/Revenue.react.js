import React, {PropTypes, Component} from 'react';

class Revenue extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="revenue">
                <div className="revenue-summary">
                    <h3>Revenue Summary</h3>
                </div>
                <div className="revenue-summary-box">
                    <h4>Widget Units: 7</h4>
                    <h4>Widget Price Per Unit: $100</h4> 
                    <h4>Total Widget Revenue: $500</h4>
                </div>
                <div className="add-new-item">
                    <h4>+ Add New Revenue Item</h4>
                </div>
            </div>
        );
    }
}

export default Revenue;