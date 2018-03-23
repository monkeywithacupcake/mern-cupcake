import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    renderLinks() {
        if (this.props.authenticated) {
            console.log('HEADER PROPS', this.props);
            return [
                <li key={1} className="nav-item">
                    <Link to="/signout" className="nav-link">
                        Sign Out
                    </Link>
                </li>
            ];
        } else {
            return [
                <li key={2} className="nav-item">
                    <Link to="/signin" className="nav-link">
                        Sign In
                    </Link>
                </li>,
                <li key={3} className="nav-item">
                    <Link to="/signup" className="nav-link">
                        Sign Up
                    </Link>
                </li>
            ];
        }
    }



    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-pop justify-content-between">
                    <Link to={'/'} className="navbar-brand">
                        Cupcakes - Test User App
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggler"
                        aria-controls="navbarToggler"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarToggler"
                    >
                        <ul className="navbar-nav ml-auto">
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
        user: state.user.user
    };
}

export default connect(mapStateToProps, actions)(Header);


// renderName() {
//     if (this.props.user != undefined) {
//         console.log('HEADER Has a USER');
//         const name = this.props.user.name;
//         return <h5 className="mr-auto">Welcome, {name[0].toUpperCase() + name.substr(1)}</h5>;
//     } else {
//         console.log(
//             'trying to render Name IN HEADER but user is undefined'
//         );
//     }
// }
// {this.renderName()}
