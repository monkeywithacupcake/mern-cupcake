import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonkeysCupcakes from './monkeyscupcakes';

export default class Monkeys extends Component {
    renderCupcakes() {
        if (
            this.props.cupcakes != undefined &&
            this.props.cupcakes.length > 0
        ) {
            console.log("Monkeys is trying to render it's cupcakes");

            return <MonkeysCupcakes cupcakes={this.props.cupcakes} />;
        }
    }
    render() {
        return (
            <div>
                {this.props.monkeys.map((monkey, i) => (
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{monkey.name}</span>
                            <p>I am a monkey card</p>
                        </div>
                        {this.renderCupcakes}
                    </div>
                ))}
            </div>
        );
    }
}
Monkeys.propTypes = {
    monkeys: PropTypes.array,
    cupcakes: PropTypes.array
};
