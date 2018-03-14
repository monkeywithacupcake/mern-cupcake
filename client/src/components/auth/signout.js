import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return (
            <div className="container">
                <div className="section">
                Bye Bye
                </div>
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default connect(null, actions)(Signout);
