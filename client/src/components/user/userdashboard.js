import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            const userid = this.props.user.id;
            this.props.fetchUserMonkeys({ userid });
            this.props.fetchUserCupcakes({ userid });
        } else {
            try {
                await this.props.findUser();
                const userid = this.props.user.id;
                this.props.fetchUserMonkeys({ userid });
                this.props.fetchUserCupcakes({ userid });
            } catch (error) {
                console.log(error);
            }
        }
    }

    handleSubmit({ name }) {
        console.log('handleSubmitMonkey with', { name });
        console.log('userid is', this.props.user.id);
        const userid = this.props.user.id;
        this.props.createMonkey({ userid, name });
    }

    handleRefresh(e) {
        e.preventDefault();
        const userid = this.props.user.id;
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
        const userid = this.props.user.id;
        this.props.createCupcake({ userid, monkeyid, color });
    }

    renderAddCupcakeForm() {
        if (this.props.monkeys != undefined && this.props.monkeys.length > 0) {
            return (
                <div>
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

    renderSideBar() {
        return (
            <div className="col-sm-12 col-md-3 sidebar">
            {this.renderName()}
            <button
                className="btn-large"
                onClick={this.handleRefresh}
            >
                Refresh
            </button>
            <h4>Add a new monkey</h4>
            <AddMonkeyForm onSubmit={this.handleSubmit} />
            {this.renderAddCupcakeForm()}
            </div>
        )

    }
    renderMainDash() {
        return (
            <div className="col-sm-12 col-md-9">
            <div className="section">
                <h2>Monkeys</h2>
                {this.renderMonkeys()}
            </div>
            <div className="section">
                <h2>Cupcakes</h2>
                {this.renderCupcakes()}
            </div>
            </div>
        )
    }

    render() {
        return (
            <div className="row">

            {this.renderSideBar()}
            {this.renderMainDash()}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        user: state.user.user,
        monkeys: state.userData.monkeys,
        cupcakes: state.userData.cupcakes
        // state: state,
        // authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, actions)(UserDashboard);
