import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Cupcakes extends Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                {this.props.cupcakes.map((cupcake, i) => (
                    <div
                        key={i}
                        id={cupcake.monkey + cupcake.color}
                        className="card m-3"
                    >
                        <div className="card-content">
                            <span className="card-title">{cupcake.color}</span>
                            <p>Cupcake Status: {cupcake.status}</p>
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
};
