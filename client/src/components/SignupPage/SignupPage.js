import react from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar2 from "../Navbar2/Navbar2";
import SignupBox from "../SignupBox/SignupBox";
import './SignupPage.css';

const useStyles = makeStyles((theme) => ({
  navbar: {
    zIndex: "1000",
  },
  loginBox: {
    height: "90vh",
  }
}));

function SignupPage() {
  const classes = useStyles();
  const isAuth = useSelector((state) => state.auth);
  if (isAuth === 1) {
    return <div>User is already logged in!</div>;
  }
  return (
    <div className="wrapper">

      <div className="row">
        <div className={classes.navbar}>
          <Navbar2/>  
        </div>
      </div>

      <div id="home" className="home-section row">
        <div className="stockup-heading-box col-xs-12 col-md-6 col-lg-7">
          <div className="center-div-box">
            <div className="heading-box">
              <div className="stockup-heading">
                StockUp
              </div>
              <div className="stockup-subheading">
                A Real Time Stock Trading Application
              </div>
            </div>
          </div>
        </div>
        <div className="signup-box col-xs-12 col-md-6 col-lg-5">
          <div className="center-div-box">
              <div className="signup-component">
                <SignupBox/> 
              </div>
          </div>
        </div>
       </div>

      <Grid item xs={12} className={classes.secondBox}>
        <h1> second area </h1>
      </Grid>
      <Grid item xs={12} className={classes.thirdBox}>
        <h1> Third area </h1>
      </Grid>

      {/* Footer */}
      <Grid item xs={12} container className={classes.footer}>
        <Grid item xs={12} md={4} className={classes.footerArea1}>
          footer area 1
        </Grid>
        <Grid item xs={12} md={4} className={classes.footerArea2}>
          footer area 2
        </Grid>
        <Grid item xs={12} md={4} className={classes.footerArea3}>
          footer area 3
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.footerBottom}>
        Copyright 2021
      </Grid>
    </div>
  );
}

export default SignupPage;
