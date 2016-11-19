import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

class UserForm extends React.Component {
  render() {
    return (
      <Form model="costForm">
        <div>
          <label>Cost Item Name:</label>
          <Control.text model="costForm.costName" />
        </div>
        <div>
          <label>Cost Description:</label>
          <Control.text model="costForm.costDescription" />
        </div>
        <div>
          <label>Cost:</label>
          <Control.text model="revenueForm.costValue" />
        </div>
      </Form>
    );
  }
}

export default Cost;
