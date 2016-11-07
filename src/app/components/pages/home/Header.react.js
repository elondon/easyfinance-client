import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    var entityItems = this.props.entities.map(function(entity) {
      return (
        <div key={entity.id}>
          <FlatButton label={entity.name} primary={true}></FlatButton>
        </div>
      )
    });

    return (
      <header className="header">
        <h3>{this.props.user.username} is logged in.</h3>
        <div>
            <div>{entityItems}</div>
        </div>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.session.user,
    entities: state.entity.entities
  }
}

export default connect(
  mapStateToProps
)(Header);
