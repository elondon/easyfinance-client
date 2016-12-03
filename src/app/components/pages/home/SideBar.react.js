import React, {Component} from 'react';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
          <List>
            <Subheader inset>Models</Subheader>
            <ListItem leftAvatar={< Avatar icon={< FileFolder/>}/>} rightIcon={< ActionInfo/>} primaryText="INCOME STATEMENT"/>
          </List>
      </div>
    );
  }
}

export default SideBar;
