import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Header extends Component {



    renderLinks() {
      if (this.props.authenticated) {
        return [
          <li key={1}>
            <Link to="/signout">Sign Out</Link>
          </li>
        ]
      } else {
        return [
          <li key={2} >
            <Link to="/signin">Sign In</Link>
          </li>,
          <li key={3} >
            <Link to="/signup">Sign Up</Link>
          </li>
        ]
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
      )
    }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps,)(Header)
