import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MonkeysCupcakes from './monkeyscupcakes';
import AddCupcakeForm from './add_cupcake_form';

export default class Monkeys extends Component {
    constructor(props) {
        super(props);
        this.handleCupcakeSubmit = this.handleCupcakeSubmit.bind(this);
    }

    handleCupcakeSubmit({ monkey, color }) {
        console.log('trying to submit a cupcake');
        console.log(this.state);
        console.log('handleSubmitCupcake with', monkey, color);
        // const userid = this.props.monkey.user;
        // const mid = this.props.monkey._id;
        // Eventually, I want to be able to have the userid and monkeyid - both of which are in the monkey props
        //this.props.createCupcake({ userid, mid, color });
    }

    renderCupcakeForm(monkey) {
        console.log("Monkeys is trying to render it's cupcakes");
        return (
            <AddCupcakeForm
                monkey={monkey}
                onSubmit={this.handleCupcakeSubmit}
            />
        );
    }

    renderMonkeyCupcakes(mid) {
        if (
            this.props.cupcakes !== undefined &&
            this.props.cupcakes.length > 0
        ) {
            console.log("Monkeys is trying to render it's cupcakes");
            const mc = this.props.cupcakes.filter(
                cupcake => cupcake.monkeyid === mid
            );
            return <MonkeysCupcakes cupcakes={mc} />;
        } else {
            console.log('Monkeys has no cupcakes');
        }
    }
    render() {
        return (
            <div>
                {this.props.monkeys.map((monkey, i) => (
                    <div key={i} className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{monkey.name}</span>
                            <p>I am a monkey card</p>
                            {this.renderCupcakeForm(monkey)}
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
