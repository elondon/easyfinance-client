import React, {PropTypes, Component} from 'react';
import {changeRegisterForm, changeLoginForm, loginUser, registerUser} from '../../../actions/SessionActions.react'
import {connect} from 'react-redux';

const assign = Object.assign || require('object.assign');

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
          value={this.props.data.loginForm.email}
          onChange={this._onLoginEmailChanged.bind(this)}
          />
        <input
          type="text"
          placeholder="Password"
          value={this.props.data.loginForm.password}
          onChange={this._onLoginPasswordChanged.bind(this)}
          />
        <HighlightButton onClick={this._onLogin.bind(this)}>Login</HighlightButton>
        <HighlightButton onClick={this._onOpenRegister.bind(this)}>Register</HighlightButton>
        <BaseModal title='Register'
                   className='optional-custom-class'
                   show={this.props.data.registerForm.registerModalOpen}
                   onHide={this._onCloseRegister.bind(this)}>
          <ModalBody>
            <p>
              <input
                type="text"
                placeholder="First Name"
                value={this.props.data.registerForm.first_name}
                />
            </p>
            <p>
              <input
                type="text"
                placeholder="Last Name"
                value={this.props.data.registerForm.last_name}
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="E-mail Address"
                value={this.props.data.registerForm.email}
                onChange={this._onEmailChange.bind(this)}
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="Password"
                value={this.props.data.registerForm.password}
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

  _mergeWithCurrentState(change) {
    return assign(this.props.data.loginForm, change);
  }

  //////////////////////////////////////
  // Login
  //////////////////////////////////////
  _onLogin() {
    console.log(this.props);
    this.props.dispatch(loginUser(this.props.data.loginForm.email, this.props.data.loginForm.password));
  }

  _onLoginEmailChanged(event) {
    var newState = this._mergeWithCurrentState({
        email: event.target.value
    });
    this._emitLoginFormChange(newState);
  }

  _onLoginPasswordChanged(event) {
    var newState = this._mergeWithCurrentState({
        password: event.target.value
    });
    this._emitLoginFormChange(newState);
  }

  _emitLoginFormChange(newState) {
    console.log(newState);
    this.props.dispatch(changeLoginForm(newState));
  }

  //////////////////////////////////////
  // Registration
  //////////////////////////////////////
  _onRegister() {
    this.props.dispatch(registerUser(this.props.data.email, this.props.data.password))
  }

  _onOpenRegister() {
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
      loginForm: {
        email: state.session.loginForm.email,
        password: state.session.loginForm.password,
      },
      registerForm: {
        email: state.session.registerForm.email,
        password: state.session.registerForm.password,
        registerModalOpen: state.session.registerForm.registerModalOpen
      }
    }
  };
}

export default connect(
  mapStateToProps
)(LandingHeader);
