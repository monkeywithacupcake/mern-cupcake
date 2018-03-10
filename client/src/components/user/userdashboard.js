import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class UserDashboard extends Component {
    componentWillMount() {
        this.props.fetchUserCupcakes(this.props.user._id); // no user at this point!!
    }
    componentWillReceiveProps(nextProps) {
        console.log("COMPONENT WILL RECEIVE props"); // NEVER CALLED!!
    }

    render() {
        return <div className="container">A user is logged in
        <p>The user is: {this.props.user.name}</p>
        </div>;
    }
}

function mapStateToProps(state) {
    const user = state.auth.user;
    const cupcakes = state.userdata.cupcakes;
    return { user: user };
}

export default connect(mapStateToProps, actions)(UserDashboard);
