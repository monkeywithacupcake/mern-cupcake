import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Monkeys extends Component {
    render() {
        return (
            <div>
                {this.props.monkeys.map((monkey, i) => (
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">{monkey.name}</span>
                            <p>I am a monkey card</p>
                        </div>
                        <div class="card-action">
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
