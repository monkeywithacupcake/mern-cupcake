import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleBaker = this.toggleBaker.bind(this);
    }

    toggleBaker(e) {
        e.preventDefault();
        console.log('toggleBaker');
        //this.setState({ isBaker: !this.state.isBaker });
        const isBaker = !this.props.typeBaker
        this.props.setBaker({isBaker})
    }

    renderBakerUser() {
        if (this.props.typeBaker) {
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
        if (this.props.authenticated || this.props.bakerauth) {
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
        authenticated: state.auth.authenticated,
        bakerauth: state.baker.authenticated,
        typeBaker: state.typeBaker
    };
}

export default connect(mapStateToProps, actions)(Header);
