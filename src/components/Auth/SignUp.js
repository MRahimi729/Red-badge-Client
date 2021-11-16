import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import APIURL from "../../helpers/environment";
import BackgroundImage from "../../assets/BackgroundImage.jpg";

function Copyright(props) {
  return (
    <Typography variant="body2" color="#fff0e8" align="center" {...props}>
      {"Copyright © "}
      {new Date().getFullYear()} For the Coilture
      {"."}
    </Typography>
  );
}

const theme = createTheme(); //can use if you want to create a theme, not necessary though

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "", email: "", password: "" };
  }
  handleFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };
  handleLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/user/signup`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        user: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user.role);
        console.log(data);
        this.props.updateToken(data.sessionToken);
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("userId", data.user.id);
      });
  };

  render() {
    return (
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          minHeight: 900,
          backgroundPosition: "60% 50%",
        }}
      >
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "white",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              //   onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={this.state.firstName}
                    onChange={this.handleFirstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={this.state.lastName}
                    onChange={this.handleLastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={this.state.password}
                    onChange={this.handlePassword}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={this.handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link to="/">Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 20 }} />
        </Container>
      </Container>
    );
  }
}

export default SignUp;
