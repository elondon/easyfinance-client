import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

class UserForm extends React.Component {
  handleSubmit(revenue) {
    console.log(this.props.formsReducers.revenue.widgetName);
    console.log(this.props.formsReducers.revenue.widgetCount);
    console.log(this.props.formsReducers.revenue.widgetCost);
    console.log(this.props.formsReducers.revenue.id);
  }
  render() {
    return (
      <Form model="revenue"
        onSubmit={(revenue) => this.handleSubmit(revenue)}>
        <div>
          <label>Revenue Item Name:</label>
          <Control.text model="revenue.widgetName" />
        </div>
        <div>
          <label>Revenue Item Count:</label>
          <Control.text model="revenue.widgetCount" />
        </div>
        <div>
          <label>Revenue Item Cost:</label>
          <Control.text model="revenue.widgetCost" />
        </div>
        <button type="submit">
          Save
        </button>
      </Form>
    );
  }
}

export default UserForm;
