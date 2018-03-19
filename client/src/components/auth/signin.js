import React, { Component } from 'react';
import SigninForm from './signin_form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Signin extends Component {
    componentWillUnmount() {
        if (this.props.errorMessage) {
            this.props.authError(null);
        }
    }

    displayRedirectMessages() {
        const location = this.props.location;
        return (
            location.state && (
                <div className="alert alert-danger">
                    {location.state.message}
                </div>
            )
        );
    }

    handleSubmit({ email, password }) {
        if (this.props.typeBaker) {
            this.props.signinBaker({ email, password });
        } else {
            this.props.signinUser({ email, password });
        }
    }

    getRedirectPath() {
        const locationState = this.props.location.state;
        if (locationState && locationState.from.pathname) {
            return locationState.from.pathname; // redirects to referring url
        } else {
            console.log('getRedirectPath in Signin is redirecting');
            return '/';
        }
    }

    renderMessage() {
        if (this.props.typeBaker) {
            return <h5>Please sign in to your Bakery Account</h5>;
        } else {
            return (
                <h5>
                    Welcome. We hope your monkeys are well! Please sign in.{' '}
                </h5>
            );
        }
    }

    render() {
        return this.props.authenticated || this.props.bakerauth ? (
            <Redirect
                to={{
                    pathname: this.getRedirectPath(),
                    state: {
                        from: this.props.location
                    }
                }}
            />
        ) : (
            <div className="container">
                <div className="section">
                    {this.displayRedirectMessages()}
                    {this.renderMessage()}
                </div>
                <div className="section">
                    <SigninForm
                        onSubmit={this.handleSubmit.bind(this)}
                        errorMessage={this.props.errorMessage}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        bakerauth: state.baker.authenticated,
        errorMessage: state.auth.error,
        typeBaker: state.typeBaker
    };
}

export default connect(mapStateToProps, actions)(Signin);
