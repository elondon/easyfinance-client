import React, {PropTypes, Component} from 'react';
import TodoTextInput from './TodoTextInput';

//todo why import this way?
var HighlightButton = require('pui-react-buttons').HighlightButton;

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  handleLogin(text) {

  }

  render() {
    return (
      <header className="header">
        <input
          type="text"
          placeholder="Username or Email"
          autoFocus="true"
          />
        <input
          type="text"
          placeholder="Password"
          onKeyDown={this.handleLogin}
          />
        <HighlightButton>Login</HighlightButton>
        {/*<h1>Eric's Business, LLC</h1>
        <br/>
        <h2>this is a test</h2>
         <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
          />*/}
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
