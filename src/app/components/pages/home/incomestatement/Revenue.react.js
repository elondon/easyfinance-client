import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EntityActions from '../../../../actions/EntityActions.react';
import * as RevenueActions from '../../../../actions/RevenueActions.react';
import Clear from 'material-ui/svg-icons/content/clear';
import Edit from 'material-ui/svg-icons/image/edit';
import TextField from 'material-ui/TextField';
import {blue50} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import EditRevenue from './forms/EditRevenue.react.js';

class Revenue extends Component {
  constructor(props) {
    super(props);

    this.onEditRevenue.bind(this);
    this.handleEditorClose.bind(this);
    this.setState.bind(this);
  }

  handleEditorClose() {

  };

  onCreateRevenue() {
    this.props.actions.createRevenueItem({entityId: this.props.revenueParentEntityId, unitName: 'New Widget', unitDescription: '', unitCost: 0.0, unitCount: 0})
  }

  onDeleteRevenue(revenueId) {
    this.props.actions.deleteRevenueItem(this.props.revenueParentEntityId, revenueId)
  }

  onEditRevenue(revenue) {
    this.setState({open: true});
  }

  renderRevenueItems() {
    const actions =
    [
      <FlatButton label = "Cancel" primary = {true} onTouchTap = {this.handleEditorClose.bind(this)}/>
    ];
    var revenueItems = this.props.revenue.map(function(revenue) {
      return (
        <div key={revenue.id} className="revenue-summary-box">
          <div className="revenue-controls">
            <div className="revenue-item-clear" onClick={this.onDeleteRevenue.bind(this, revenue.id)}><Clear/></div>
            <div className="revenue-item-edit" onClick={this.onEditRevenue.bind(this, revenue)}><Edit/></div>
          </div>
          <div className="widget-details">
            <div className="widget-detail-label">Widget Units:</div>
            <div className="widget-detail-value">{revenue.unitCount}</div>
          </div>
          <div className="widget-details">
            <div className="widget-detail-label">Widget Price Per Unit:</div>
            <div className="widget-detail-value">{revenue.unitCost}</div>
          </div>
          <div className="widget-details">
            <div className="widget-detail-label">Total Widget Revenue:</div>
            <div className="widget-detail-value">{revenue.unitCount * revenue.unitCost}</div>
          </div>
          <Dialog title="Edit Revenue Item" actions={actions} modal={true} open={this.props.editingRevenue}>
            <EditRevenue/>
          </Dialog>
        </div>
      )
    }, this);

    return revenueItems;
  }

  render() {
    const revenueItems = this.renderRevenueItems()
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
    revenue: state.revenue.revenue,
    editingRevenue: state.revenue.editingRevenue,
    revenueParentEntityId: state.revenue.revenueParentEntityId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, EntityActions, RevenueActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Revenue);
