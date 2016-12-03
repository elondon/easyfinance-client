import React, {Component} from 'react';
import {Control, Form} from 'react-redux-form';

class OpexForm extends Component {
  render() {
    return (
      <Form model="opexForm">
        <div>
          <label>Operating Expense Item Name:</label>
          <Control.text model="opexForm.name"/>
        </div>
        <div>
          <label>Operating Expense Description:</label>
          <Control.text model="opexForm.description"/>
        </div>
        <div>
          <label>Operating Expense Cost:</label>
          <Control.text model="opexForm.value"/>
        </div>
      </Form>
    );
  }
}

export default OpexForm;
