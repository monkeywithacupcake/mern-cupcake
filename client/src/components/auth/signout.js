import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
class Signout extends Component {
    componentWillMount() {
        if (this.props.typeBaker) {
            this.props.signoutBaker();
        } else {
            this.props.signoutUser();
        }
    }

    renderMessage() {
        if (this.props.typeBaker) {
            return <h2>Thanks for Baking with Us</h2>;
        } else {
            return <h2>Have a beautiful day</h2>;
        }
    }

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <br />
                <div className="section">{this.renderMessage()}</div>
                <br />
                <br />
                <br />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        typeBaker: state.typeBaker
    };
}

export default connect(mapStateToProps, actions)(Signout);
