import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

class Revenue extends Component {
    constructor(props) {
        super(props);
    }

    _handleCreateRevenue() {
      console.log('click!!');
    }

    render() {
      var revenueItems = this.props.activeEntity.revenue.map(function(revenue) {
        return (
          <div className="revenue-summary-box">
              <h4>Widget Units: {revenue.unit_count}</h4>
              <h4>Widget Price Per Unit: {revenue.unit_cost}</h4>
              <h4>Total Widget Revenue: {revenue.unit_count * revenue.unit_cost}</h4>
          </div>
        )
      });
      return (
        <div className="revenue">
          <div className="revenue-summary">
            <h3>Revenue Summary</h3>
          </div>
          {revenueItems}
          <div onClick={this._handleCreateRevenue.bind(this)} className="add-new-item">
            <h4>+ Add New Revenue Item</h4>
          </div>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    activeEntity: state.entity.activeEntity
  }
}

export default connect(
  mapStateToProps
)
(Revenue);
