import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EntityActions from '../../../../actions/EntityActions.react';
import * as RevenueActions from '../../../../actions/RevenueActions.react';
import Clear from 'material-ui/svg-icons/content/clear';
import Edit from 'material-ui/svg-icons/image/edit';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import EditRevenue from './forms/EditRevenue.react.js';
import Divider from 'material-ui/Divider';

class Revenue extends Component {
  constructor(props) {
    super(props);
  }

  onCreateRevenue() {
    this.props.actions.createRevenueItem({entityId: this.props.revenueParentEntityId, unitName: 'New Widget', unitDescription: '', unitCost: 0.0, unitCount: 0});
  }

  onDeleteRevenue(revenueId) {
    this.props.actions.deleteRevenueItem(this.props.revenueParentEntityId, revenueId);
  }

  onEditRevenue(revenue) {
    console.log(`editing revenue ${revenue.id}`);
    this.props.actions.decorateRevenueForm(revenue);
    this.props.actions.editRevenueItem(revenue.id);
  }

  onFinishedEditingRevenueItem() {
    this.props.actions.finishEditingRevenueItem();
  }

  onSaveRevenueItem() {
    this.props.actions.changeRevenueItem(this.props.revenueForm);
    this.props.actions.finishEditingRevenueItem();
  }

  renderRevenueItems() {
    const actions =
      [
        <FlatButton label="Save" primary onTouchTap={this.onSaveRevenueItem.bind(this)}/>,
        <FlatButton label="Cancel" primary onTouchTap={this.onFinishedEditingRevenueItem.bind(this)}/>
      ];
    const revenueItems = this.props.revenue.map(function (revenue) {
      return (
        <div key={revenue.id} className="revenue-summary-box">
          <div className="revenue-controls">
            <div className="revenue-item-clear" onClick={this.onDeleteRevenue.bind(this, revenue.id)}><Clear/></div>
            <div className="revenue-item-edit" onClick={this.onEditRevenue.bind(this, revenue)}><Edit/></div>
          </div>
          <div className="widget-details">
            <div className="widget-detail-label">{revenue.unitName} Units:</div>
            <div className="widget-detail-value">{revenue.unitCount}</div>
          </div>
          <div className="widget-details">
            <div className="widget-detail-label">{revenue.unitName} Price Per Unit:</div>
            <div className="widget-detail-value">{revenue.unitCost}</div>
          </div>
          <div className="widget-details">
            <div className="widget-detail-label">Total {revenue.unitName} Revenue:</div>
            <div className="widget-detail-value">{revenue.unitCount * revenue.unitCost}</div>
          </div>
          <Dialog title="Edit Revenue" actions={actions} modal open={this.props.editingRevenue}>
            <EditRevenue/>
          </Dialog>
        </div>
      );
    }, this);

    return revenueItems;
  }

  render() {
    const revenueItems = this.renderRevenueItems();
    return (
      <div className="revenue">
        <div className="revenue-summary">
          <h3>Revenue Summary</h3>
        </div>
        {revenueItems}
        <Divider/>
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
    revenueForm: state.forms.revenueForm,
    revenueParentEntityId: state.revenue.revenueParentEntityId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, EntityActions, RevenueActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Revenue);
