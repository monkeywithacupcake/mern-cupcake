import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions';
import Cupcakes from './cupcakes';
import Monkeys from './monkeys';
import AddMonkeyForm from './add_monkey_form';

class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGetMonkeys = this.handleGetMonkeys.bind(this);
        //this.handleChange = this.handleChange.bind(this);
        //this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }
    componentDidMount() {
        const { userid } = this.props.user._id;
        if (userid != null) {
            this.props.fetchUserMonkeys({ userid });
        }
        // dispatch(fetchMonkeysIfNeeded(userid));
    }
    componentDidUpdate(prevProps) {
        // if (this.props.selectedMonkey !== prevProps.selectedMonkey) {
        //     const { dispatch, selectedMonkey } = this.props;
        //     dispatch(fetchCupcakesIfNeeded(selectedMonkey));
        // }
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
        const userid  = this.props.user._id;
        this.props.fetchUserMonkeys({ userid });
        
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
                        <div className="col m6 s12">Existing monkeys</div>
                        <button onClick={this.handleGetMonkeys}>
                            {' '}
                            Get Monkeys{' '}
                        </button>
                        <Monkeys monkeys={this.props.monkeys} />
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
    const monkeys = state.userdata.monkeys;
    return { user: user, monkeys: monkeys, cupcakes: cupcakes };
}

export default connect(mapStateToProps, actions)(UserDashboard);

//                        <AddMonkeyForm onSubmit={this.handleSubmit.bind(this)}/>
