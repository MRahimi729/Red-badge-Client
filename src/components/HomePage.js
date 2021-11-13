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
import TutorialIndex from "./Tutorials/TutorialIndex";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      For the Coilture {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Home(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar top="null">
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Link to="/mytutorials"> My Stuff </Link>
          <Link to="/about"> About </Link>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <TutorialIndex sessionToken={props.sessionToken} />
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
