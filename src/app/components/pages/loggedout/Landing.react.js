import React, {Component} from 'react';
import LandingHeader from './LandingHeader.react';
import LandingMain from './LandingMain.react';
import LandingFooter from './LandingFooter.react';

class Landing extends Component {
  render() {
    return (
      <div>
        <LandingHeader/>
        <LandingMain/>
        <LandingFooter/>
      </div>
    );
  }
}

export default Landing;
