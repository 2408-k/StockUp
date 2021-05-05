import react from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar2 from '../Navbar2/Navbar2';
import { LoginBox } from '../LoginBox/LoginBox';

const useStyles = makeStyles(theme => ({
  navbar: {
    zIndex: '1000',
  },
  loginBox: {
      height: '90vh',
  },
  loginBoxInner: {
    [theme.breakpoints.up('xs')]: {
      margin: 'auto',
      height: '80%',
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      margin: 'auto',
      height: '60%',
      width: '60%'
    },
    [theme.breakpoints.up('lg')]: {
      margin: 'auto',
      height: '60%',
      width: '40%'
    },
  },
  secondBox: {
    height: '100vh',
    width: '100 vw',
    backgroundColor: '#dae1e7'
  },
  thirdBox: {
    height: '100vh',
    width: '100 vw',
    backgroundColor: '#1687a7'
  },
  footer: {

  },
  footerArea1: {

  },
  footerArea2: {

  },
  footerArea3: {

  },
  footerBottom: {

  }
}));

function Loginpage() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.navbar}> 
        <Navbar2 />
      </Grid>
      <Grid item xs={0} sm={4} md={6} />
      <Grid item container xs={12} sm={8} md={6} className={classes.loginBox}>
          <Grid item className={classes.loginBoxInner}>
            <LoginBox />
          </Grid>
      </Grid>
      <Grid item xs={12} className={classes.secondBox}>
        <h1> second area </h1>
      </Grid>
      <Grid item xs= {12} className={classes.thirdBox}>
        <h1> Third area </h1>
      </Grid>

      {/* Footer */} 
      <Grid item xs={12} container className={classes.footer}>
        <Grid item xs={12} md={4} className={classes.footerArea1} >
          footer area 1
        </Grid > 
        <Grid item xs={12} md={4} className={classes.footerArea2} >
          footer area 2
        </Grid> 
        <Grid item xs={12} md={4} className={classes.footerArea3} >
          footer area 3
        </Grid > 
      </Grid>
      <Grid item xs={12} className={classes.footerBottom}>
          Copyright 2021 
      </Grid>
    </Grid>
    );
}

export default Loginpage;