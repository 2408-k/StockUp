import react from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import StocksPage from './components/StocksPage/StocksPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>

        <Route exact path="/">
          <Link exact to="/login"> <h4> Click here to go to Login Page</h4> </Link>
          <Link exact to="/stocksPage"> <h4>  Click here to go to Stocks Page </h4> </Link>
        </Route>

        <Route exact path="/stocksPage">
          <StocksPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>
        </Switch>
        
    </div>
  );
}

export default App;