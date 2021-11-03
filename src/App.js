import React from "react";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import { useState } from "react";

import "./App.css";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  const updateToken = (newToken) => {
    if (newToken === undefined) {
      return;
    } else {
      localStorage.setItem("sessionToken", newToken);
      setSessionToken(newToken);
    }
  };
  return (
    (<SignUp updateToken={updateToken} />),
    (<SignIn updateToken={updateToken} />)
  );
}

export default App;
