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
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import Logo from "../assets/Logo.png";

const theme = createTheme();

export default function Home(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderNav />
      <Container>
        <Container
          component="main"
          maxWidth="xl"
          sx={{
            mt: 8,
            mb: 6,
            backgroundImage: `url(${Logo})`,
            backgroundSize: "cover",
            minHeight: 500,
            backgroundPosition: "60% 50%",
          }}
        ></Container>
        <Box
          sx={{
            bgcolor: "#fff0e8",
            pt: 2,
            pb: 6,
          }}
        >
          <Typography paragraph>
            "For The Coilture" is an online community celebrating the beauty,
            resilience, and diversity of natural hair of people from the African
            Diaspora. As the natural hair movement continues to grow, many
            people are looking for the best ways in which to care for, style,
            and rediscover the beauty of their natural hair. The process to
            learn about your hair in its natural state can seem overwhelming.
            Many times it sees that researching a style takes longer than
            actually creating that style! For The Coilture was created for
            people looking for a place where they can search for styles, tips,
            and inspiration.
          </Typography>

          <Typography>
            Here, members can browse pictures for inspiration, view a variety of
            hair tutorials, or create their own tutorials for others. This app
            is designed for people -with expertise levels ranging from beginner
            to advanced- who are in love or who are falling in love with their
            natural hair. A community space for all enthusiasts of the natural
            hair movement, For The Coilture is "Celebrating Our Culture, One
            Coil At A Time!"
          </Typography>
        </Box>
      </Container>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}
