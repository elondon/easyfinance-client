import React, {Component} from 'react';
import {Control, Form} from 'react-redux-form';

class CostForm extends Component {
  render() {
    return (
      <Form model="costForm">
        <div>
          <label>Cost Item Name:</label>
          <Control.text model="costForm.name"/>
        </div>
        <div>
          <label>Cost Description:</label>
          <Control.text model="costForm.description"/>
        </div>
        <div>
          <label>Cost:</label>
          <Control.text model="costForm.value"/>
        </div>
      </Form>
    );
  }
}

export default CostForm;
