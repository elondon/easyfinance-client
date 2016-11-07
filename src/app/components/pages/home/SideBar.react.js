import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';

class SideBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="side-bar">
        <p>
          <FlatButton label="INCOME STATEMENT" primary={true}></FlatButton>
        </p>
      </div>
    );
  }
}

export default SideBar;
