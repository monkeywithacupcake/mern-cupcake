import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Monkeys extends Component {
    renderMonkeyCupcakes(mid) {
        if (
            this.props.cupcakes !== undefined &&
            this.props.cupcakes.length > 0
        ) {
            console.log("Monkeys is trying to render it's cupcakes for:", mid);
            const mc = this.props.cupcakes.filter(
                cupcake => cupcake.monkey === mid
            );
            console.log('found cupcakes:', mc);
            return (
                <div className="row">
                    {mc.map((cupcake, i) => (
                        <a className="col s4" key={i} href={`#${cupcake.monkey}${cupcake.color}`}>
                            {cupcake.color}
                        </a>
                    ))}
                </div>
            );
        } else {
            console.log('Monkeys has no cupcakes');
        }
    }
    render() {
        console.log('Monkeys has:', this.props.monkeys);
        return (
            <div>
                {this.props.monkeys.map((monkey, i) => (
                    <div key={i} className="col s12 m6 l4">
                    <div className="card blue-grey darken-1 ">
                        <div className="card-content white-text">
                            <span className="card-title">{monkey.name}</span>
                            This monkey has cupcakes:
                            {this.renderMonkeyCupcakes(monkey._id)}
                        </div>

                        <div className="card-action">
                                <a href="#">
                                    New Cupcake
                                </a>
                        </div>
                    </div>
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
