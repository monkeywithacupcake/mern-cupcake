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
        const isBaker = !this.props.typeBaker;
        this.props.setBaker({ isBaker });
    }

    renderBakerUser() {
        if (this.props.typeBaker) {
            return (
                <button  className="nav-link"
                    onClick={e => {
                        this.toggleBaker(e);
                    }}
                >
                    User?
                </button>
            );
        } else {
            return (
                <button  className="nav-link"
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
                <li key={1} className="nav-item">
                    <Link to="/signout"  className="nav-link">Sign Out</Link>
                </li>,
                <li key={5} className="nav-item">
                    {this.renderBakerUser()}
                </li>
            ];
        } else {
            return [
                <li key={2} className="nav-item">
                    <Link to="/signin"  className="nav-link">Sign In</Link>
                </li>,
                <li key={3} className="nav-item">
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>,
                <li key={4} className="nav-item">
                    {this.renderBakerUser()}
                </li>
            ];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="nav-wrapper container">
                    <Link to={'/'} className="brand-logo">
                        Cupcakes - Test User App
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggler"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarToggler"
                    >
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navbar-right">
                            {this.renderLinks()}
                        </ul>
                    </div>
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
