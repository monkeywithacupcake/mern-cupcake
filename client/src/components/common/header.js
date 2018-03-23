import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

class Header extends Component {
    constructor(props) {
        super(props);
    }


    renderLinks() {
        if (this.props.authenticated || this.props.bakerauth) {
            console.log("HEADER PROPS", this.props)
            return [
                <li key={1} className="nav-item">
                    <Link to="/signout"  className="nav-link">Sign Out</Link>
                </li>
            ];
        } else {
            return [
                <li key={2} className="nav-item">
                    <Link to="/signin"  className="nav-link">Sign In</Link>
                </li>,
                <li key={3} className="nav-item">
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>
            ];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-pop justify-content-between">
                <div className="nav-wrapper container">
                    <Link to={'/'} className="navbar-brand">
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
        user: state.user.user
    };
}

export default connect(mapStateToProps, actions)(Header);
