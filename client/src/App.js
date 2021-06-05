import react,{useState} from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import StocksPage from './components/StocksPage/StocksPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import WalletPage from './components/WalletPage/WalletPage';
import AddMoneyPage from './components/AddMoneyPage/AddMoneyPage';
import RemoveMoneyPage from './components/RemoveMoneyPage/RemoveMoneyPage';
import SellStockPage from './components/SellStockPage/SellStockPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div>        
        <Route exact path="/">
          <Link exact to="/login"> <h4> Click here to go to Login Page</h4> </Link>
          <Link exact to="/stocksPage"> <h4>  Click here to go to Stocks Page </h4> </Link>
          <Link exact to="/signup"> <h4>  Click here to go to SignUp Page </h4> </Link>
           <Link exact to="/MyProfile"> <h4>  Click here to go to Profile Page </h4> </Link>
           <Link exact to="/MyWallet"> <h4>  Click here to go to Wallet Page</h4> </Link>
           <Link exact to="/AddMoney"> <h4>  Click here to go to Add Money</h4> </Link>
           <Link exact to="/RemoveMoney"> <h4>  Click here to go to Remove Money</h4> </Link>
        </Route>

        <Route exact path="/stocksPage" component={StocksPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/MyProfile" component={ProfilePage} />
        <Route exact path="/MyWallet" component={WalletPage} />
        <Route exact path="/AddMoney" component={AddMoneyPage} />
        <Route exact path="/RemoveMoney" component={RemoveMoneyPage} />
        <Route exact path="/sellstock" component={SellStockPage} />

    </div>
  );
}

export default App;