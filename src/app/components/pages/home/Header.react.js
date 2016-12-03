import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

  onHideSideBarMenu() {
    console.log('hi');
    this.props.actions.hideSideBarMenu();
  }

  onEntityClick(entityId) {
    console.log(`Booya from ${entityId}`);
    this.onHideSideBarMenu();
  }

  renderLoggedIn() {
    return (
      <h3>{this.props.user.username} is logged in.</h3>
    );
  }

  renderNavBarItems() {
    const navBarItems = this.props.entities.map(function (entity) {
      return (
        <MenuItem onTouchTap={() => this.onEntityClick(entity.id)}>{entity.name}</MenuItem>
      );
    }, this);
    return navBarItems;
  }

  render() {
    const loggedIn = this.renderLoggedIn();
    const navBarItems = this.renderNavBarItems();
    return (
      <div>
        <AppBar title="Easy Finance" iconElementRight={loggedIn} onLeftIconButtonTouchTap={() => this.onShowSideBarMenu()}/>
        <Drawer docked={false} width={300} open={this.props.sideBarShowing} onRequestChange={req => this.onHideSideBarMenu.bind(this)}>
            {navBarItems}
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {user: state.session.user, entities: state.entity.entities, sideBarShowing: state.navigation.sideBarShowing};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NavigationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
