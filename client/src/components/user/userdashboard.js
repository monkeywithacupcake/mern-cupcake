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
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleCupcakeSubmit = this.handleCupcakeSubmit.bind(this);
    }
    async componentDidMount() {
        if (this.props.user != undefined) {
            const userid = this.props.user._id;
            this.props.fetchUserMonkeys({ userid });
            this.props.fetchUserCupcakes({ userid });
        } else {
            try {
                await this.props.findUser();
                const userid = this.props.user._id;
                this.props.fetchUserMonkeys({ userid });
                this.props.fetchUserCupcakes({ userid });
            } catch (error) {console.log(error)}
        }
    }

    renderComponent() {
        this.renderMonkeys()
        this.renderCupcakes()
        this.renderAddCupcakeForm()
    }

    // componentWillReceiveProps(nextProps) {
    //     if (typeof nextProps.user != undefined) {
    //         this.setState({
    //             user: nextProps.user
    //         })
    //     }
    //     if (typeof nextProps.monkeys != undefined) {
    //         this.setState({
    //             monkeys: nextProps.monkeys
    //         })
    //     }
    //     if (typeof nextProps.cupcakes != undefined) {
    //         this.setState({
    //             cupcakes: nextProps.cupcakes
    //         })
    //     }
    // }
    //
    // componentDidUpdate(prevProps) {
    //     console.log('user:', this.props.user);
    //     console.log('Dash Monkeys:', this.props.monkeys);
    //     console.log('Dash Cupcakes:', this.props.cupcakes);
    // }

    handleSubmit({ name }) {
        console.log('handleSubmitMonkey with', { name });
        console.log('userid is', this.props.user._id);
        const userid = this.props.user._id;
        this.props.createMonkey({ userid, name });
    }

    handleRefresh(e) {
        e.preventDefault();
        const userid = this.props.user._id;
        this.props.fetchUserMonkeys({ userid });
        this.props.fetchUserCupcakes({ userid });
    }

    renderMonkeys() {
        if (this.props.monkeys != undefined && this.props.monkeys.length > 0) {
            return (
                <Monkeys
                    monkeys={this.props.monkeys}
                    cupcakes={this.props.cupcakes}
                />
            );
        }
    }

    handleCupcakeSubmit({ monkeyid, color }) {
        console.log('handleSubmitCupcake with', monkeyid, color);
        const userid = this.props.user._id;
        this.props.createCupcake({ userid, monkeyid, color });
    }

    renderAddCupcakeForm() {
        if (this.props.monkeys != undefined && this.props.monkeys.length > 0) {
            return (
                <div className="col m6 s12">
                    <h4>Add a new cupcake</h4>
                    <AddCupcakeForm
                        onSubmit={this.handleCupcakeSubmit}
                        monkeys={this.props.monkeys}
                    />
                </div>
            );
        }
    }

    renderCupcakes() {
        if (
            this.props.cupcakes != undefined &&
            this.props.cupcakes.length > 0
        ) {
            return <Cupcakes cupcakes={this.props.cupcakes} />;
        }
    }

    renderName() {
        if (this.props.user != undefined) {
            const name = this.props.user.name;
            return <h1>Hi, {name[0].toUpperCase() + name.substr(1)}</h1>;
        } else {
            console.log('trying to render Name but user is undefined');
        }
    }

    render() {
        return (
            <div className="container">
                <div className="section">
                    <div className="row valign-wrapper">
                        <div className="col m6 s12">{this.renderName()}</div>
                        <div className="col m6 s12 center">
                            <button
                                className="btn-large"
                                onClick={this.handleRefresh}
                            >
                                Refresh
                            </button>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="row">
                        <div className="col m6 s12">
                            <h4>Add a new monkey</h4>
                            <AddMonkeyForm onSubmit={this.handleSubmit} />
                        </div>
                        {this.renderAddCupcakeForm()}
                    </div>
                </div>
                <div className="section">
                    <h2>Monkeys</h2>
                    <div className="row">{this.renderMonkeys()}</div>
                </div>
                <div className="section">
                    <h2>Cupcakes</h2>
                    <div className="row">{this.renderCupcakes()}</div>
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
