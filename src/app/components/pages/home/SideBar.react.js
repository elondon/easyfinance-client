import React, {Component, PropTypes} from 'react';

var DefaultButton = require('pui-react-buttons').DefaultButton;

class SideBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="side-bar">
        <p>
          <DefaultButton>Income Statement</DefaultButton>
        </p>
      </div>
    );
  }
}

export default SideBar;
