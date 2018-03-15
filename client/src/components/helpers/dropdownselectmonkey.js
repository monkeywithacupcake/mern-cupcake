import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class DropDownSelect extends Component { // eslint-disable-line react/prefer-stateless-function

  renderSelectOptions = (monkey) => (
    <option key={monkey._id} value={monkey._id}>{monkey.name}</option>
  )

  render() {
    const { label }= this.props;
    return (
      <div>
        {/* <label htmlFor={label}>{label}</label> */}
        <select {...input}>
          <option value="">Select</option>
          {this.props.monkeys.map(this.renderSelectOptions)}
        </select>
      </div>
    );
  }
}


DropDownSelect.propTypes = {
  monkeys: PropTypes.array,
  label: PropTypes.string
};

export default DropDownSelect;
