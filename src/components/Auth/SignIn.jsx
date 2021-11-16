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
import Logo from "../../assets/Logo.png";

function Copyright(props) {
  return (
    <Typography variant="body2" color="#fff0e8" align="center" {...props}>
      {"Copyright © "}
      {new Date().getFullYear()} For the Coilture
      {"."}
    </Typography>
  );
}

const theme = createTheme(); //Can use if you create a theme

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/user/signin`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.role);
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
              bgcolor: "rgba(255, 255, 255, 0.5)",
              backgroundImage:
                "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
              backdropFilter: "blur(3px)",
              boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
              borderRadius: 5,
              borderLeft: "solid 1px rgba(255, 255, 255, 0.3)",
              borderTop: "solid 1px rgba(255, 255, 255, 0.8)",
            }}
          >
            <Avatar
              alt="Logo"
              src={Logo}
              sx={{ m: 1, width: 75, height: 75 }}
            ></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={this.state.email}
                onChange={this.handleEmail}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handlePassword}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={this.handleSubmit}
              >
                Sign In
              </Button>
              <Grid container justifyContent="center">
                {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
                <Grid item>
                  <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 27 }} />
        </Container>
      </Container>
    );
  }
}

export default SignIn;
