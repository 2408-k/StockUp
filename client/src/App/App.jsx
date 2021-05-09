import React from 'react';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../components/HomePage';
import { SignupPage } from'../components/SignupPage/SignupPage';
import LoginPage from '../components/LoginPage/LoginPage';
import StocksPage from '../components/StocksPage/StocksPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                    <Router history={history}>
                            <Route exact path="/">
                                <Link exact to="/login"> <h4> Click here to go to Login Page</h4> </Link>
                                <Link exact to="/stocksPage"> <h4>  Click here to go to Stocks Page </h4> </Link>
                                <Link exact to="/signup"> <h4>  Click here to go to Signup Page </h4> </Link>
                            </Route>

                            <Route exact path="/stocksPage" component={StocksPage} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/signup" component={SignupPage} />

                            <PrivateRoute exact path="/home" component={HomePage} />
                    </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
