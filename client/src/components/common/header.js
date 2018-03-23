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
                <Link to="/signout" key={1} className="m-2 btn btn-outline-primary">
                    Sign Out
                </Link>
            ];
        } else {
            return [
                <Link key={2} to="/signin" className="m-2 btn btn-outline-primary">
                    Sign In
                </Link>,
                <Link key={3} to="/signup" className="m-2 btn btn-outline-primary">
                    Sign Up
                </Link>
            ];
        }
    }

    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3  bg-pop border-bottom box-shadow header">
                <h5 className="my-0 mr-md-auto font-weight-normal">
                    MERN Cupcakes
                </h5>
                <nav className="mynav">
                    <a className="p-2 text-dark" href="#">
                        Features
                    </a>
                    <a className="p-2 text-dark" href="#">
                        About
                    </a>
                    {this.renderLinks()}
                </nav>

            </div>
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
