import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class Cupcakes extends Component {

    render() {
        return (<div>
            {this.props.cupcakes.map((cupcake) => (
                <div className="card  yellow lighten-3">
                    <div className="card-content">
                        <span className="card-title">{cupcake.color}</span>
                        <p>Cupcake Status: {cupcake.status}</p>
                        <p>Monkey: {cupcake.monkey}</p>
                    </div>
                    {this.renderCupcakes}
                </div>
            ))}
        </div>
        );
    }
}
 
Cupcakes.propTypes = {
  cupcakes: PropTypes.array
}
