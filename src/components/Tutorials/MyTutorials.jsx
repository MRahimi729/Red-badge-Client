import React from "react";
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
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TutorialForm from "./TutorialForm";
import MyTutorialIndex from "./MyTutorialIndex";
import TutorialTable from "./TutorialTable";
import HeaderNav from "../HeaderNav";
import Footer from "../Footer";

const theme = createTheme();

export default class MyTutorials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
      photo_url: "",
      description: "",
      estimatedTime: "",
      tools: "",
      directions: "",
      tutorials: [],
    };
    console.log(this.props.sessionToken);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose = () => {
    console.log("button firing");
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <HeaderNav />
          <main>
            {/* Hero unit */}
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  My Tutorials
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  Here you can view and edit all of the tutorials you've
                  created. To create a new tutorial, click on the +Tutorial
                  button.
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button
                    variant="contained"
                    onClick={(e) => this.setState({ open: true })}
                  >
                    +Tutorial
                  </Button>
                </Stack>
              </Container>
            </Box>
            {this.state.open && (
              <TutorialForm
                open={this.state.open}
                sessionToken={this.props.sessionToken}
                handleClose={this.handleClose}
              />
            )}
            <Container>
              <MyTutorialIndex sessionToken={this.props.sessionToken} />
            </Container>
          </main>
          <Footer />
        </ThemeProvider>
      </div>
    );
  }
}
