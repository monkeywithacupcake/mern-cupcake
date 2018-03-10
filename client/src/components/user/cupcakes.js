import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class Cupcakes extends Component {
  render() {
    return (
      <ul>
        {this.props.cupcakes.map((cupcake, i) => <li key={i}>{cupcake.color} : {cupcake.status}</li>)}
      </ul>
    )
  }
}
 
Cupcakes.propTypes = {
  cupcakes: PropTypes.array.isRequired
}
