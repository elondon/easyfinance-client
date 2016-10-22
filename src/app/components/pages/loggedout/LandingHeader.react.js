import React, {PropTypes, Component} from 'react';
import { registerUser } from '../../../actions/session/SessionActions.react'
import { changeRegisterForm } from '../../../actions/session/SessionActions.react'
import {connect} from 'react-redux';

const assign = Object.assign || require('object.assign');

//todo why import this way?
var HighlightButton = require('pui-react-buttons').HighlightButton;
var BaseModal = require('pui-react-modals').BaseModal;
var ModalBody = require('pui-react-modals').ModalBody;
var ModalFooter = require('pui-react-modals').ModalFooter;
var DefaultButton = require('pui-react-buttons').DefaultButton;

class LandingHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <input
          type="text"
          placeholder="Email"
          autoFocus="true"
          value={this.props.data.email}
          />
        <input
          type="text"
          placeholder="Password"
          onKeyDown={this._onLogin}
          value={this.props.data.password}
          />
        <HighlightButton onClick={this._onLogin.bind(this)}>Login</HighlightButton>
        <HighlightButton onClick={this._onOpenRegister.bind(this)}>Register</HighlightButton>
        <BaseModal title='Register'
                   className='optional-custom-class'
                   show={this.props.data.registerModalOpen}
                   onHide={this._onCloseRegister.bind(this)}>
          <ModalBody>
            <p>
              <input
                type="text"
                placeholder="First Name"
                value={this.props.data.first_name}
                />
            </p>
            <p>
              <input
                type="text"
                placeholder="Last Name"
                value={this.props.data.last_name}
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="E-mail Address"
                value={this.props.data.email}
                onChange={this._onEmailChange.bind(this)}
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="Password"
                value={this.props.data.password}
                onChange={this._onPasswordChange.bind(this)}
              />
            </p>
            <p>
              <HighlightButton onClick={this._onRegister.bind(this)}>Ok</HighlightButton>
            </p>
          </ModalBody>
          <ModalFooter>
            <DefaultButton onClick={this._onCloseRegister.bind(this)}>
              Close
            </DefaultButton>
          </ModalFooter>
        </BaseModal>
      </header>
    );
  }

  _onOpenRegister() {
    console.log(this);
    var newState = this._mergeWithCurrentState({
      registerModalOpen: true
    });
    this._emitChange(newState);
  }

  _onCloseRegister() {
    var newState = this._mergeWithCurrentState({
      registerModalOpen: false
    });
    this._emitChange(newState);
  }

  _onLogin() {

  }

  _onRegister() {
    this.props.dispatch(registerUser(this.props.data.email, this.props.data.password))
  }

  _onEmailChange(event) {
    var newState = this._mergeWithCurrentState({
      email: event.target.value
    });
    this._emitChange(newState);
  }

  _onPasswordChange(event) {
    var newState = this._mergeWithCurrentState({
      password: event.target.value
    });
    this._emitChange(newState);
  }

  _mergeWithCurrentState(change) {
    return assign(this.props.data, change);
  }

  _emitChange(newState) {
    this.props.dispatch(changeRegisterForm(newState));
  }
}

LandingHeader.propTypes = {
  //_onRegister: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    data: {
      email: state.session.registerFormState.email,
      password: state.session.registerFormState.password,
      registerModalOpen: state.session.registerFormState.registerModalOpen
    }
  };
}

export default connect(
  mapStateToProps
)(LandingHeader);
