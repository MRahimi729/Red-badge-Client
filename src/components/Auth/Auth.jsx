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
      <Route exact path="/login">
        <SignIn updateToken={props.updateToken} />
      </Route>
    </div>
  );
}

// import React from "react";
// import { Link, Route } from "react-router-dom";
// import SignUp from "./SignUp";
// import SignIn from "./SignIn";
// import { useState } from "react";
// import Button from "@mui/material/Button";

// export default function Auth(props) {
//   const [login, setLogin] = useState(true);

//   const authTernary = () => {
//     return login ? (
//       <SignIn updateToken={props.updateToken} />
//     ) : (
//       <SignUp updateToken={props.updateToken} />
//     );
//   };

//   const loginToggle = (e) => {
//     e.preventDefault();
//     setLogin(!login);
//   };
//   return (
//     <div>
//       {authTernary()}
//       <Button onClick={loginToggle}>Toggle</Button>
//     </div>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import Button from "@mui/material/Button";

// class Auth extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       signin: true,
//     };
//   }
//   toggle = () => {
//     this.setState({ signin: !this.state.signin });
//   };
//   authTernary = () => {
//     return this.state.signin ? (
//       <SignIn updateToken={this.props.updateToken} toggle={this.toggle} />
//     ) : (
//       <SignUp
//         updateToken={this.props.updateToken}
//         // token={this.props.token}
//         toggle={this.toggle}
//       />
//     );
//   };

//   render() {
//     return (
//       <div className="Auth">
//         <div className="wrapper">
//           <div
//             className={this.state.signin ? "signin-wrapper" : "signup-wrapper"}
//           >
//             <div className="signin-signup">{this.authTernary()}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Auth;
