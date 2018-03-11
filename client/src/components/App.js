import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// my main components
// common components
import Header from './common/header';
import Footer from './common/footer';

// landing unauth
import Landing from './common/landing';

// user auth
import UserDashboard from './user/userdashboard';
import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';

import { PrivateRoute } from './auth/require_auth';

// special pages
import About from './common/about';

class App extends Component {
    componentDidMount() {
        console.log('App has this.props:', this.props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return nextState !== this.state;
    }
    renderMainContent() {
        console.log('App renderMainContent props:', this.props);
        if (this.props.authenticated) {
            console.log("I'm totally going to show auth");
            return <UserDashboard />;
        } else {
            return <Landing />;
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signout" component={Signout} />
                    <Route
                        exact
                        path="/"
                        component={() => this.renderMainContent()}
                    />

                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state,
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(App);

//<Route path="*" component={NotFound} />
// <Route exact
//     path="/user"
//     component={PrivateRoute(UserDashboard)}
// />
// <Route exact path="/" component={Landing} />
// <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Landing} />
//       <Route path="/signin" component={Signin} />
//     </Route>
// </Router>
// <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Welcome} />
//       <Route path="signin" component={Signin} />
//       <Route path="signout" component={Signout} />
//       <Route path="signup" component={Signup} />
//       <Route path="feature" component={RequireAuth(Feature)} />
//     </Route>
// </Router>

//<Route exact path="/supplier" component={SupplierApp}/>

// what About
// return (
//       <div>
//       <p>Header here</p>
//
//       <div className="container">
//         {this.props.children}
//       </div>
//
//       <p>Footer here</p>
//       </div>
//     );
