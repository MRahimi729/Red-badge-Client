import React from "react";
import { Link, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function Auth(props) {
  return (
    <div>
      <Route exact path="/signup">
        <SignUp updateToken={props.updateToken} />
      </Route>
      <Route exact path="/">
        <SignIn updateToken={props.updateToken} />
      </Route>
    </div>
  );
}
