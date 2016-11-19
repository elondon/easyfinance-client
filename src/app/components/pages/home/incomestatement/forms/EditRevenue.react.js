import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

class UserForm extends React.Component {
  render() {
    return (
      <Form model="revenueForm">
        <div>
          <label>Revenue Item Name:</label>
          <Control.text model="revenueForm.unitName" />
        </div>
        <div>
          <label>Revenue Item Count:</label>
          <Control.text model="revenueForm.unitCount" />
        </div>
        <div>
          <label>Revenue Item Cost:</label>
          <Control.text model="revenueForm.unitCost" />
        </div>
      </Form>
    );
  }
}

export default RevenueForm;
