import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class Cupcakes extends Component {

    render() {
        return (<div>
            {this.props.cupcakes.map((cupcake, i) => (
                    <a href="#">{cupcake.color}</a>
                ))}
                </div>
        );
    }
}
 
Cupcakes.propTypes = {
  cupcakes: PropTypes.array
}
