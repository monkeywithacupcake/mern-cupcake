import React, { Component } from 'react';

function Cupcake(props) {
    return (
        <a className="col s4" href={`#${props.monkey}${props.color}`}>
            {props.color}
        </a>
    );
}

function renderCupcakes(cupcakes) {
    if (cupcakes !== null && cupcakes.length > 0) {
        return cupcakes.map((cupcake, i) => (
            <Cupcake key={i} monkey={cupcake.monkey} color={cupcake.color} />
        ));
    }
}

function MonkeyCard(props) {
    console.log('Monkey Card has', props);
    return (
        <div className="col s12 m6 l4">
            <div className="card blue-grey darken-1 ">
                <div className="card-content white-text">
                    <span className="card-title">{props.monkeyname}</span>
                </div>
                <div className="row">
                {renderCupcakes(props.cupcakes)}
                </div>
                <div className="card-action">
                    <a href="#">New Cupcake</a>
                </div>
            </div>
        </div>
    );
}
export default MonkeyCard;
