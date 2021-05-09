import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        //this.props.dispatch(userActions.getAll());
    }

    handleLogout(e)
    {
        this.props.dispatch(userActions.logout());
    }

    render() {
        const { user } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
                
                <form name="form" onSubmit={()=>this.handleLogout()}>
                    <button>Logout</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };