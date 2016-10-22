import React, {PropTypes, Component} from 'react';

//todo why import this way?
var HighlightButton = require('pui-react-buttons').HighlightButton;
var BaseModal = require('pui-react-modals').BaseModal;
var ModalBody = require('pui-react-modals').ModalBody;
var ModalFooter = require('pui-react-modals').ModalFooter;
var DefaultButton = require('pui-react-buttons').DefaultButton;

class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <header className="header">
        <h1>{this.props.user.username} is logged in.</h1>
      </header>
    )
  }
}

export default Header;
