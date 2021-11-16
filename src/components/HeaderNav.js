import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import About from "./About";
// import MyTutorials from "./Tutorials/MyTutorials";

const theme = createTheme();

export default function HeaderNav(props) {
  const clearToken = () => {
    localStorage.clear();
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar top="null" style={{ backgroundColor: "#705557" }}>
        <Toolbar>
          <Button href="/" color="inherit">
            Home
          </Button>
          <Button href="/mytutorials" color="inherit">
            {" "}
            My Tutorials{" "}
          </Button>
          <Button href="/about" color="inherit">
            {" "}
            About{" "}
          </Button>
          <Button
            href="/"
            onClick={() => {
              clearToken();
            }}
            color="inherit"
          >
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
