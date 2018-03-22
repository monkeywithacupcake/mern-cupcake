import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDashboard from './user/userdashboard';
import BakerDashboard from './baker/bakerdashboard';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    renderDashboard() {
        if (this.props.user) {
            return (
                <UserDashboard
                    user={this.props.user}
                />
            );
        }
    }
    render() {
        return (
            {this.renderDashboard()}
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        user: state.user.user,
        baker: state.auth.baker
        // state: state,
        // authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps,)(Dashboard);
