import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';
import Cupcakes from './cupcakes';
import Monkeys from './monkeys';
import AddMonkeyForm from './add_monkey_form';
import AddCupcakeForm from './add_cupcake_form';

class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGetMonkeys = this.handleGetMonkeys.bind(this);
        this.handleCupcakeSubmit = this.handleCupcakeSubmit.bind(this);
        this.handleGetCupcakes = this.handleGetCupcakes.bind(this);
        //this.handleChange = this.handleChange.bind(this);
        //this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }
    componentDidMount() {
        const userid = this.props.user._id;
        if (userid != null) {
            this.props.fetchUserMonkeys({ userid });
            this.props.fetchUserCupcakes({ userid });
        }

    }

    componentDidUpdate(prevProps) {
        // if (this.props.selectedMonkey !== prevProps.selectedMonkey) {
        //     const { dispatch, selectedMonkey } = this.props;
        //     dispatch(fetchCupcakesIfNeeded(selectedMonkey));
        // }
        console.log("Dash Monkeys:", this.props.monkeys)
        console.log("Dash Cupcakes:", this.props.cupcakes)
    }
    // handleChange(nextMonkey) {
    //     this.props.dispatch(selectMonkey(nextMonkey));
    //     this.props.dispatch(fetchCupcakeIfNeeded(nextMonkey));
    // }
    //const userid = this.props.user._id
    handleSubmit({ name }) {
        console.log('handleSubmitMonkey with', { name });
        console.log('userid is', this.props.user._id);
        const userid = this.props.user._id;
        this.props.createMonkey({ userid, name });
    }

    handleGetMonkeys(e) {
        e.preventDefault();
        const userid = this.props.user._id;
        this.props.fetchUserMonkeys({ userid });
    }

    renderMonkeys() {
        if (this.props.monkeys != undefined && this.props.monkeys.length > 0) {
            return <Monkeys monkeys={this.props.monkeys} />;
        }
    }

    handleCupcakeSubmit({ color }) {
        console.log('handleSubmitCupcake with', color);
        const userid = this.props.user._id;
        const monkeyid = this.props.monkeys[0]._id;
        this.props.createCupcake({ userid, monkeyid, color });
    }

    handleGetCupcakes(e) {
        e.preventDefault();
        const userid = this.props.user._id;
        this.props.fetchUserCupcakes({ userid });
    }

    renderCupcakes() {
        if (
            this.props.cupcakes != undefined &&
            this.props.cupcakes.length > 0
        ) {
            return <Cupcakes cupcakes={this.props.cupcakes} />;
        }
    }

    render() {
        return (
            <div className="container">
                <div className="section">
                    <h1>Hi: {this.props.user.name}</h1>
                </div>
                <div className="section">
                    <h2>Monkeys</h2>
                    <div className="row">
                        <div className="col m6 s12">
                            <h4>Add a new monkey</h4>
                            <AddMonkeyForm onSubmit={this.handleSubmit} />
                        </div>
                        <div className="col m6 s12">
                            <h4>Existing monkeys</h4>
                            <button
                                className="btn-large"
                                onClick={this.handleGetMonkeys}
                            >
                                {' '}
                                Get Monkeys
                            </button>
                            {this.renderMonkeys()}
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h2>Cupcakes</h2>
                    <div className="row">
                        <div className="col m6 s12">
                            <h4>Add a new cupcake</h4>
                            <AddCupcakeForm
                                onSubmit={this.handleCupcakeSubmit}
                            />
                        </div>
                        <div className="col m6 s12">
                            <h4>Existing cupcakes</h4>
                            <button
                                className="btn-large"
                                onClick={this.handleGetCupcakes}
                            >
                                {' '}
                                Get Cupcakes
                            </button>
                            {this.renderCupcakes()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        auth: state.auth,
        user: state.auth.user,
        monkeys: state.userData.monkeys,
        cupcakes: state.userData.cupcakes
        // state: state,
        // authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, actions)(UserDashboard);
