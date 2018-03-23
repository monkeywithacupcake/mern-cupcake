import React, { Component } from 'react';

function Cupcake(props) {
    return (
        <li className="list-group-item">
            <a className="col s4" href={`#${props.monkey}${props.color}`}>
                {props.color}
            </a>
        </li>
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
        <div className="card m-3 monkey-card">
            <div className="card-body">
                <h5 className="card-title">{props.monkeyname}</h5>
            </div>
            <ul className="list-group list-group-flush">
                {renderCupcakes(props.cupcakes)}
            </ul>
            <div className="card-body">
                <a href="#">New Cupcake</a>
            </div>
        </div>
    );
}
export default MonkeyCard;
