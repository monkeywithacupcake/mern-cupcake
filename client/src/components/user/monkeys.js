import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonkeyCard from './monkey_card.js';

export default class Monkeys extends Component {
    getMonkeyCakes(mid) {
        if (this.props.cupcakes !== undefined) {
            // try to match up this monkey with some Cupcakes
            const mc = this.props.cupcakes.filter(
                cupcake => cupcake.monkey === mid
            );
            return mc;
        } else {
            return null;
        }
    }
    render() {
        console.log('Monkeys has:', this.props);
        return (
            <div className="row justify-content-md-center">
                {this.props.monkeys.map((monkey, i) => (
                    <MonkeyCard
                        key={i}
                        monkeyname={monkey.name}
                        cupcakes={this.getMonkeyCakes(monkey._id)}
                    />
                ))}
            </div>
        );
    }
}
Monkeys.propTypes = {
    monkeys: PropTypes.array,
    cupcakes: PropTypes.array
};
