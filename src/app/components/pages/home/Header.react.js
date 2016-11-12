import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import * as NavigationActions from '../../../actions/NavigationActions.react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onShowSideBarMenu.bind(this);
    this.onEntityClick.bind(this);
  }

  onShowSideBarMenu() {
    this.props.actions.showSideBarMenu();
  }

  onEntityClick(entityId) {
    console.log('Booya from ' + entityId);
  }

  renderLoggedIn() {
    return (
      <h3>{this.props.user.username} is logged in.</h3>
    )
  }

  renderNavBarItems() {
    var navBarItems = this.props.entities.map(function(entity) {
      <MenuItem onTouchTap={() => this.onEntityClick(entity.id)}>{entity.name}</MenuItem>
    }, this);
    return navBarItems;
  }

  render() {
    const loggedIn = this.renderLoggedIn();
    const navBarItems = this.renderNavBarItems();
    return (
      <div>
        <AppBar title="Easy Finance" iconElementRight={loggedIn} onLeftIconButtonTouchTap={() => this.onShowSideBarMenu()}/>
        <Drawer
            docked={false}
            width={200}
            open={this.props.sideBarShowing}>
            {navBarItems}
        </Drawer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.session.user, entities: state.entity.entities, sideBarShowing: state.navigation.sideBarShowing}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NavigationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
