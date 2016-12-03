import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Landing from '../components/pages/loggedout/Landing.react';
import Home from '../components/pages/home/Home.react';


class App extends Component {

  render() {
    if (true) { // for testing purposes only.
  //  if(this.props.user) {
      return (
        <div>
          <Home/>
        </div>
      );
      return (
          <div>
            <Landing/>
          </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.session.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
