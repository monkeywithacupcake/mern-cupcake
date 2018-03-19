import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

// my main components
// common components
import Header from './common/header';
import Footer from './common/footer';

// landing unauth
import Landing from './common/landing';

// baker
import BakerDashboard from './baker/dashboard';

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
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState !== this.state;
    }
    renderMainContent() {
        console.log('App renderMainContent props:', this.props);
        if (this.props.auth.authenticated && !this.props.typeBaker) {
            if (!this.props.user) {
                this.props.findUser();
            }
            console.log("I'm totally going to show auth");
            return <UserDashboard />;
        } else if (this.props.typeBaker) {
            // if (!this.props.baker) {
            //     this.props.findBaker();
            // }
            console.log("I'm totally going to show bakery");
            return <BakerDashboard />;
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
        auth: state.auth,
        user: state.auth.user,
        monkeys: state.userData.monkeys,
        cupcakes: state.userData.cupcakes,
        typeBaker: state.typeBaker,
        baker: state.baker
        // state: state,
        // authenticated: state.auth.authenticated
    };
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(App);

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as actionCreators from '../actions/actionCreators';
// import Main from './Main';
//
// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//     comments: state.comments
//   }
// }
//
// function mapDispachToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }
//
// const App = connect(mapStateToProps, mapDispachToProps)(Main);
//
// export default App;

// const Main = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>
//           <Link to="/">Reduxstagram</Link>
//         </h1>
//         {React.cloneElement({...this.props}.children, {...this.props})}
//       </div>
//     )
//   }
// });
//
// export default Main;

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
