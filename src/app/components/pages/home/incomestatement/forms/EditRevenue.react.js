import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

class UserForm extends React.Component {
  handleSubmit(user) {
    const { dispatch } = this.props;
  }
  render() {
    return (
      <Form model="revenue"
        onSubmit={(user) => this.handleSubmit(user)}>
        <div>
          <label>Revenue Item Name:</label>
          <Control.text model="revenue.widgetName" />
        </div>
        <div>
          <label>Revenue Item Count:</label>
          <Control.text model="user.widgetCount" />
        </div>
        <div>
          <label>Revenue Item Cost:</label>
          <Control.text model="user.widgetCost" />
        </div>
        <button type="submit">
          Save
        </button>
      </Form>
    );
  }
}

export default UserForm;
