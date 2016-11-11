import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onShowSideBarMenu.bind(this);
  }

  onShowSideBarMenu() {}

  renderLoggedIn() {
    return (
      <h3>{this.props.user.username}
        is logged in.</h3>
    )
  }

  render() {
    const loggedIn = this.renderLoggedIn();
    return (<AppBar title="Easy Finance" iconElementRight={loggedIn} onLeftIconButtonTouchTap={() => this.onShowSideBarMenu()}/>)
  }
}

function mapStateToProps(state) {
  return {user: state.session.user, entities: state.entity.entities}
}

export default connect(mapStateToProps)(Header);
