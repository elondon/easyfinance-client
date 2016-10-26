import React, {Component, PropTypes} from 'react';
import LandingHeader from './LandingHeader.react';
import LandingMain from './LandingMain.react';
import LandingFooter from './LandingFooter.react';

class Landing extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <LandingHeader/>
        <LandingMain/>
        <LandingFooter/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // what here?
  }
}

export default Landing;
