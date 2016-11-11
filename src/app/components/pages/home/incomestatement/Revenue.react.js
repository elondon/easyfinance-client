import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EntityActions from '../../../../actions/EntityActions.react';
import Clear from 'material-ui/svg-icons/content/clear';

class Revenue extends Component {
    constructor(props) {
        super(props);
    }

    onCreateRevenue() {
      this.props.actions.createRevenueItem( {
        entityId: this.props.activeEntity.id,
        unitName: 'New Widget',
        unitDescription: '',
        unitCost: 0.0,
        unitCount: 0
      })
    }

    onDeleteRevenue(revenueId) {
      this.props.actions.deleteRevenueItem( {
        revenueId: revenueId
      })
    }

    render() {
      var revenueItems = this.props.activeEntity.revenue.map(function(revenue) {
        return (
          <div key={revenue.id} className="revenue-summary-box">
              <div className="revenue-item-clear" onClick={this.onDeleteRevenue.bind(this, revenue.id)}><Clear/></div>
              <h4>Widget Units: {revenue.unitCount}</h4>
              <h4>Widget Price Per Unit: {revenue.unitCost}</h4>
              <h4>Total Widget Revenue: {revenue.unitCount * revenue.unitCost}</h4>
          </div>
        )
      }, this);
      return (
        <div className="revenue">
          <div className="revenue-summary">
            <h3>Revenue Summary</h3>
          </div>
          {revenueItems}
          <div onClick={this.onCreateRevenue.bind(this)} className="add-new-item">
            <h4>+ Add New Revenue Item</h4>
          </div>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    activeEntity: state.entity.entities[state.entity.activeEntityIndex]
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
