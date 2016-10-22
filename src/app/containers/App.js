import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import Landing from '../components/pages/loggedout/Landing.react';
import IncomeStatement from '../components/IncomeStatement';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/index';

class App extends Component {
  constructor() {
    super();
  }

  render()
  {
      if(this.props.user) {

      } else {
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
    user: state.user,
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
