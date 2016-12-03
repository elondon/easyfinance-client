import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EntityActions from '../../../../actions/EntityActions.react';
import * as CostActions from '../../../../actions/CostActions.react';
import Clear from 'material-ui/svg-icons/content/clear';
import Edit from 'material-ui/svg-icons/image/edit';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import EditCost from './forms/EditCost.react.js';
import Divider from 'material-ui/Divider';

class Costs extends Component {

  onCreateCost() {
    this.props.actions.createCostItem({entityId: this.props.costParentEntityId, name: 'New Cost', description: '', value: 0.0});
  }

  onDeleteCost(costId) {
    this.props.actions.deleteCostItem(this.props.costParentEntityId, costId);
  }

  onEditCost(cost) {
    console.log(`editing cost ${cost.id}`);
    this.props.actions.decorateCostForm(cost);
    this.props.actions.editCostItem(cost.id);
  }

  onFinishedEditingCostItem() {
    this.props.actions.finishEditingCostItem();
  }

  onSaveCostItem() {
    this.props.actions.changeCostItem(this.props.costForm);
    this.props.actions.finishEditingCostItem();
  }

  renderCostItems() {
    const actions =
      [
        <FlatButton label="Save" primary onTouchTap={this.onSaveCostItem.bind(this)}/>,
        <FlatButton label="Cancel" primary onTouchTap={this.onFinishedEditingCostItem.bind(this)}/>
      ];
    const costItems = this.props.costs.map(function (cost) {
      return (
        <div key={cost.id} className="cost-summary-box">
          <div className="cost-controls">
            <div className="cost-item-clear" onClick={this.onDeleteCost.bind(this, cost.id)}><Clear/></div>
            <div className="cost-item-edit" onClick={this.onEditCost.bind(this, cost)}><Edit/></div>
          </div>
          <div className="widget-details">
            <div className="widget-detail-label">Cost Name:</div>
            <div className="widget-detail-value">{cost.name}</div>
          </div>
          <div className="widget-details">
            <div className="widget-detail-label">Cost:</div>
            <div className="widget-detail-value">{cost.value}</div>
          </div>
          <Dialog title="Edit Cost" actions={actions} modal open={this.props.editingCost}>
            <EditCost/>
          </Dialog>
        </div>
      );
    }, this);

    return costItems;
  }

  render() {
    const costItems = this.renderCostItems();
    return (
      <div className="cost">
        <div className="cost-summary">
          <h3>Cost Summary</h3>
        </div>
        {costItems}
        <Divider/>
        <div onClick={this.onCreateCost.bind(this)} className="add-new-item">
          <h4>+ Add New Cost Item</h4>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    costs: state.cost.costs,
    editingCost: state.cost.editingCost,
    costForm: state.forms.costForm,
    costParentEntityId: state.cost.costParentEntityId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, EntityActions, CostActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Costs);
