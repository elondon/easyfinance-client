import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';

class SideBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="side-bar">
          <List>
            <Subheader inset={true}>Models</Subheader>
            <ListItem leftAvatar={< Avatar icon = { < FileFolder />} />} rightIcon={< ActionInfo />} primaryText="INCOME STATEMENT"/>
          </List>
      </div>
    );
  }
}

export default SideBar;
