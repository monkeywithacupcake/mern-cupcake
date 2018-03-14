import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Monkeys extends Component {
    render() {
        console.log("Monkeys has:", this.props.monkeys)
        return (
            <div>
                {this.props.monkeys.map((monkey, i) => (
                    <div key={i} className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{monkey.name}</span>
                            <p>I am a monkey card</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
Monkeys.propTypes = {
    monkeys: PropTypes.array
};
