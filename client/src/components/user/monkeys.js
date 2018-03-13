import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MonkeysCupcakes from './monkeyscupcakes';

export default class Monkeys extends Component {
    constructor(props){
        super(props);

        // this.handleCupcakeClick = this.handleCupcakeClick.bind(this); // eventually link them
    }
    renderCupcakes() {
        // does not work.
        if (
            this.props.cupcakes != undefined &&
            this.props.cupcakes.length > 0
        ) {
            console.log("Monkeys is trying to render it's cupcakes");

            return <MonkeysCupcakes cupcakes={this.props.cupcakes} />;
        }
        else {
            console.log("Monkeys has no cupcakes")
        }
    }
    renderMonkeyCupcakes(mid){
        if (
            this.props.cupcakes !== undefined &&
            this.props.cupcakes.length > 0
        ) {
            console.log("Monkeys is trying to render it's cupcakes");
            const mc = this.props.cupcakes.filter(cupcake => cupcake.monkeyid === mid)
            return <MonkeysCupcakes cupcakes={mc} />;
        }
        else {
            console.log("Monkeys has no cupcakes")
        }
    }
    render() {
        const cupcakes = this.props.cupcakes
        let cupdiv = null;
        if (cupcakes !== undefined && cupcakes.length > 0){
            // need to map over monkeys and match to cupcakes
            //const mcupcakes = cupcakes.filter(cupcake => cupcake.monkeyid == )
            cupdiv = <MonkeysCupcakes cupcakes={this.props.cupcakes} />;
        }
        return (
            <div>
                {this.props.monkeys.map((monkey, i) => (
                    <div key={i} className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{monkey.name}</span>
                            <p>I am a monkey card</p>
                        </div>
                        {this.renderMonkeyCupcakes(monkey._id)}
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
