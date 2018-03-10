import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';
import Cupcakes from './cupcakes';
import Monkeys from './monkeys';

class UserDashboard extends Component {
    // componentWillMount() {
    //     this.props.fetchUserCupcakes(this.props.user._id); // no user at this point!!
    // }
    // componentWillReceiveProps(nextProps) {
    //     console.log('COMPONENT WILL RECEIVE props'); // NEVER CALLED!!
    // }

    render() {
        return (
            <div className="container">
                <div className="section">
                    <h1>Hi: {this.props.user.name}</h1>
                </div>
                <div className="section">
                    <h2>Monkeys</h2>
                    <div className="row">
                        <div className="col m6 s12">Add a new monkey</div>
                        <div className="col m6 s12">Existing monkeys</div>
                    </div>
                </div>
                <div className="section">
                    <h2>Cupcakes</h2>
                    <div className="row">
                        <div className="col m6 s12">Add a new cupcake</div>
                        <div className="col m6 s12">Existing cupcakes</div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const user = state.auth.user;
    const cupcakes = state.userdata.cupcakes;
    const monkeys = state.userdata.cupcakes;
    return { user: user };
}

export default connect(mapStateToProps, actions)(UserDashboard);
