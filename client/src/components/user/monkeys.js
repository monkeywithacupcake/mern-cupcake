import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class Monkeys extends Component {
  render() {
    return (
      <ul>
        {this.props.monkeys.map((monkey, i) => <li key={i}>{monkey.name}</li>)}
      </ul>
    )
  }
}
 
Monkeys.propTypes = {
  monkeys: PropTypes.array.isRequired
}
