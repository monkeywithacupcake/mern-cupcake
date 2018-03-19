import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isBaker: false };
        this.toggleBaker = this.toggleBaker.bind(this);
    }

    toggleBaker(e) {
        e.preventDefault();
        console.log('toggleBaker');
        this.setState({ isBaker: !this.state.isBaker });
    }

    renderBakerUser() {
        if (this.state.isBaker) {
            return (
                <button
                    onClick={e => {
                        this.toggleBaker(e);
                    }}
                >
                    User?
                </button>
            );
        } else {
            return (
                <button
                    onClick={e => {
                        this.toggleBaker(e);
                    }}
                >
                    Baker?
                </button>
            );
        }
    }

    renderLinks() {
        if (this.props.authenticated) {
            return [
                <li key={1}>
                    <Link to="/signout">Sign Out</Link>
                </li>,
                <li key={5}>{this.renderBakerUser()}</li>
            ];
        } else {
            return [
                <li key={2}>
                    <Link to="/signin">Sign In</Link>
                </li>,
                <li key={3}>
                    <Link to="/signup">Sign Up</Link>
                </li>,
                <li key={4}>{this.renderBakerUser()}</li>
            ];
        }
    }

    render() {
        return (
            <nav className="default-primary-color">
                <div className="nav-wrapper container">
                    <Link to={'/'} className="brand-logo">
                        Cupcakes - Test User App
                    </Link>
                    <ul id="nav-mobile" className="right">
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);
