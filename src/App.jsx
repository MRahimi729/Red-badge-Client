import React from "react";
// import {makestyles} from '@materia'
// import SignUp from "./components/Auth/SignUp";
// import SignIn from "./components/Auth/SignIn";
import Auth from "./components/Auth/Auth";
import HomePage from "./components/HomePage";
// import AdminPage from "./components/AdminPage";
import { Switch, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import About from "./components/About";
import MyTutorials from "./components/Tutorials/MyTutorials";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import TutorialIndex from "./components/Tutorials/TutorialIndex";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff0e8",
      light: "#ffffff",
      dark: "#ccbeb6",
    },
    secondary: {
      main: "#442c2e",
      light: "#705557",
      dark: "#1f0103",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  background: {
    paper: "#ffffff",
    default: "#fff0e8",
  },
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sessionToken: "",
      // userRole: "",
    };
  }

  componentDidMount() {
    // if (this.state.sessionToken === localStorage.getItem("sessionToken")) {
    this.setState({ sessionToken: localStorage.getItem("sessionToken") ?? "" });
    // }
  }

  updateToken = (newToken) => {
    localStorage.setItem("sessionToken", newToken);
    this.setState({
      sessionToken: newToken,
    });
  };

  render() {
    return (
      // (<SignUp updateToken={updateToken} />),
      // (<SignIn updateToken={updateToken} />)
      <ThemeProvider theme={theme}>
        <div backgroundcolor="#fff0e8">
          <Container
            maxWidth="md"
            justifyContent="center"
            sx={{
              bgcolor: "#fff0e8",
            }}
          >
            <Switch>
              <Route exact path="/">
                {this.state.sessionToken ===
                localStorage.getItem("sessionToken") ? (
                  <HomePage sessionToken={this.state.sessionToken} />
                ) : (
                  <SignIn updateToken={this.updateToken} />
                )}
              </Route>
              <Route exact path="/signup">
                <SignUp updateToken={this.updateToken} />
              </Route>
              {/* <Auth updateToken={this.updateToken} />
        )} */}
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/mytutorials">
                {!!this.state.sessionToken && (
                  <MyTutorials sessionToken={this.state.sessionToken} />
                )}
              </Route>
            </Switch>
            {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/mytutorials">
            <MyTutorials sessionToken={this.state.sessionToken} />
          </Route>
        </Switch> */}
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}

//const updateUserRole = (newRole) => {
//   localStorage.setItem("userRole", newRole);
//   setUserRole(newRole);
// };

// function protectedViewsAdmin() {
//   return localStorage.getItem("userRole") === "admin" ? (
//     <AdminPage />
//   ) : (
//     <HomePage />
//   );
// }
// function protectedViews() {
//   return sessionToken === localStorage.getItem("sessionToken") ? (
//     <HomePage />
//   ) : (
//     <Auth updateToken={updateToken} />
//   );
// }

// function protectedViews() {
//   return sessionToken === localStorage.getItem("sessionToken") ? (
//     <HomePage />
//   ) : (
//     <Auth updateToken={updateToken} />
//   );
// }
