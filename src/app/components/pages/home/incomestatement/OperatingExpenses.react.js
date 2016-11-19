import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as EntityActions from '../../../../actions/EntityActions.react';
import * as OpexActions from '../../../../actions/OpexActions.react';
import Clear from 'material-ui/svg-icons/content/clear';
import Edit from 'material-ui/svg-icons/image/edit';
import TextField from 'material-ui/TextField';
import {blue50} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import EditCost from './forms/EditCost.react.js';

class OperatingExpenses extends Component {
  constructor(props) {
    super(props);
  }

  onCreateOpex() {
    this.props.actions.createOpexItem({entityId: this.props.opexParentEntityId, name: 'New Opex', description: '', value: 0.0})
  }

  onDeleteOpex(opexId) {
    this.props.actions.deleteOpexItem(this.props.opexParentEntityId, opexId)
  }

  onEditOpex(opex) {
    console.log('editing opex ' + opex.id);
    this.props.actions.decorateOpexForm(opex);
    this.props.actions.editOpexItem(opex.id);
  }

  onFinishedEditingOpexItem() {
    this.props.actions.finishEditingOpexItem();
  };

  onSaveOpexItem() {
    this.props.actions.changeOpexItem(this.props.opexForm);
    this.props.actions.finishEditingOpexItem();
  }

  renderOpexItems() {
    const actions =
    [
      <FlatButton label = "Save" primary = {true} onTouchTap = {this.onSaveOpexItem.bind(this)}/>,
      <FlatButton label = "Cancel" primary = {true} onTouchTap = {this.onFinishedEditingOpexItem.bind(this)}/>
    ];
    var opexItems = this.props.opexs.map(function(opex) {
      return (
        <div key={opex.id} className="opex-summary-box">
          <div className="opex-controls">
            <div className="opex-item-clear" onClick={this.onDeleteOpex.bind(this, opex.id)}><Clear/></div>
            <div className="opex-item-edit" onClick={this.onEditOpex.bind(this, opex)}><Edit/></div>
          </div>
          <div className="widget-details">
            <div className="widget-detail-label">Opex Name:</div>
            <div className="widget-detail-value">{opex.name}</div>
          </div>
          <div className="widget-details">
            <div className="widget-detail-label">Opex:</div>
            <div className="widget-detail-value">{opex.value}</div>
          </div>
          <Dialog title="Edit Opex" actions={actions} modal={true} open={this.props.editingOpex}>
            <EditOpex/>
          </Dialog>
        </div>
      )
    }, this);

    return opexItems;
  }

  render() {
    const opexItems = this.renderOpexItems()
    return (
      <div className="opex">
        <div className="opex-summary">
          <h3>Opex Summary</h3>
        </div>
        {opexItems}
        <div onClick={this.onCreateOpex.bind(this)} className="add-new-item">
          <h4>+ Add New Opex Item</h4>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    opexs: state.opex.opexs,
    editingOpex: state.opex.editingOpex,
    opexForm: state.forms.opexForm,
    opexParentEntityId: state.opex.opexParentEntityId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, EntityActions, OpexActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OperatingExpenses);
