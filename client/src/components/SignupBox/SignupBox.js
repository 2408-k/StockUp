import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import './SignupBox.css';

const useStyles = makeStyles((theme) => ({
  Outerbox: {
    background: "linear-gradient(45deg, #bbf1fa 30%, #51c2d5 90%)",
    borderRadius: '8px',
    boxShadow: '4px 4px #ccd1db',
    paddingTop: '2vh',
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignupBox(props) {
  const classes = useStyles();
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPwd, setEnteredPwd] = useState("");

  const dispatch = useDispatch();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const pwdChangeHandler = (event) => {
    setEnteredPwd(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    let name = enteredName,
      pwd = enteredPwd,
      email = enteredEmail;
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPwd("");

    fetch("http://localhost:4000/signup", {
      // Adding body or contents to send
      body: JSON.stringify({
        name: name,
        email: email,
        password: pwd,
      }),

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // Adding method type
      method: "POST",
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => {
        //console.log(json.token);
        dispatch({ type: 'update' , token : json.token });
        dispatch({ type: "login" });
        localStorage.setItem('token',json.token);
      });
  };
  return (
    <Container component="main" maxWidth="xs" className={classes.Outerbox}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={nameChangeHandler}
            value={enteredName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            type="text"
            id="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            value={enteredPwd}
            onChange={pwdChangeHandler}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}