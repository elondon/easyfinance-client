import React, {Component, PropTypes} from 'react';
import IncomeStatement from './incomestatement/IncomeStatement.react'

class ModelSpace extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <IncomeStatement/>
      </div>
    );
  }
}

export default ModelSpace;
