import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EntityActions from '../../../../actions/EntityActions.react';
import Clear from 'material-ui/svg-icons/content/clear';

class Revenue extends Component {
    constructor(props) {
        super(props);
    }

    _handleCreateRevenue() {
      this.props.actions.createRevenueItem( {
        entity_id: this.props.active_entity.id,
        unit_name: 'New Widget',
        unit_description: '',
        unit_cost: 0.0,
        unit_count: 0
      })
    }

    _handleDeleteRevenue(revenue_id) {
      console.log(revenue_id);
      /*this.props.actions.deleteRevenueItem( {
        revenue_id: revenue_id
      })*/
    }

    render() {
      var revenueItems = this.props.active_entity.revenue.map(function(revenue) {
        return (
          <div key={revenue.id} className="revenue-summary-box">
              <div className="revenue-item-clear" onClick={this._handleDeleteRevenue.bind(this, revenue.id)}><Clear/></div>
              <h4>Widget Units: {revenue.unit_count}</h4>
              <h4>Widget Price Per Unit: {revenue.unit_cost}</h4>
              <h4>Total Widget Revenue: {revenue.unit_count * revenue.unit_cost}</h4>
          </div>
        )
      }, this);
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
    active_entity: state.entity.entities[state.entity.active_entity_index]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(EntityActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(Revenue);
