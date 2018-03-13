import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class MonkeysCupcakes extends Component {

    render() {
        return (<div className="card-action">
            {this.props.cupcakes.map((cupcake, i) => (
                    <a key={i} href="#">{cupcake.color}</a>
                ))}
                </div>
        );
    }
}
 
MonkeysCupcakes.propTypes = {
  cupcakes: PropTypes.array
}
