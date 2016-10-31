import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './Header.react';
import ModelSpace from './ModelSpace.react';
import SideBar from './SideBar.react';
import Footer from './Footer.react';
import {getUserEntities} from '../../../actions/EntityActions.react';

class Home extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.dispatch(getUserEntities(this.props.user.id));
  }

  render() {
      return (
        <div>
          <Header/>
          <SideBar/>
          <ModelSpace/>
          <Footer/>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    user: state.session.user
  }
}

export default connect(
  mapStateToProps
)(Home);
