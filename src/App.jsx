import React from "react";
// import {makestyles} from '@materia'
// import SignUp from "./components/Auth/SignUp";
// import SignIn from "./components/Auth/SignIn";
import Auth from "./components/Auth/Auth";
import HomePage from "./components/HomePage";
// import AdminPage from "./components/AdminPage";
import { Switch, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

// const useStyles

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sessionToken: "",
      // userRole: "",
    };
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
      <Router>
        <Switch>
          {this.state.sessionToken === localStorage.getItem("sessionToken") ? (
            <HomePage />
          ) : (
            <Auth updateToken={this.updateToken} />
          )}
        </Switch>
      </Router>
    );
  }
}
// const updateUserRole = (newRole) => {
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
