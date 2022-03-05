import { useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar2 from '../Navbar2/Navbar2';
import LoginBox from '../LoginBox/LoginBox';

function Loginpage() {

  const isAuth = useSelector((state) => state.auth);

  if (isAuth === 1) {
    return <div>User is already logged in!</div>;
  }
  return (
    <div class="">

      <div class="navbar-login-page"> 
        <Navbar2 />
      </div>

      <div class="section-1">
        section 1
      </div>

      <div class="row">
        <div class="col-sm-4 col-md-6"/>
        <div class="col-xs-12 col-sm-8 col-md-6 login-Box-Area">
            <div class="login-Box-Inner">
              <LoginBox />
            </div>
        </div>
      </div>
    
    </div>
    );
}

export default Loginpage;