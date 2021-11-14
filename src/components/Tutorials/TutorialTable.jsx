import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import EditTutorial from "./EditTutorial";
import ViewTutorial from "./ViewTutorial";
import APIURL from "../../helpers/environment";

export default class TutorialTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      view: false,
      updateActive: false,
      tutorialToUpdate: {},
      tutorialToView: {},
    };
  }
  handleTutorial = (tutorial) => {
    this.setState({ tutorialToView: tutorial });
  };

  handleView = () => {
    this.setState({
      view: !this.state.view,
    });
  };

  handleOpen = () => {
    this.setState({ updateActive: !this.state.updateActive });
  };

  handleUpdate = (tutorial) => {
    this.setState({ tutorialToUpdate: tutorial });
  };

  handleDelete = (tutorial) => {
    if (!window.confirm("Are you sure you want to delete this tutorial?"))
      return;
    fetch(`${APIURL}/tutorial/delete/${tutorial.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((response) => response.json())
      .then(() => this.setState({ status: "Tutorial Successfully Deleted" }));
  };
  render() {
    console.log(this.props.tutorials);
    return (
      <div>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {this.props.tutorials.length > 0 ? (
              <>
                {this.props.tutorials
                  ?.sort((a, b) => b.id - a.id)
                  .map((tutorial) => (
                    <Grid item key={tutorial.id} xs={12} sm={6} md={4}>
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            // 16:9
                            pt: "56.25%",
                          }}
                          image={tutorial.photo_url}
                          alt="random"
                        />
                        <Typography align="center">
                          {new Date(tutorial.createdAt).toLocaleDateString()}
                        </Typography>
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography
                            align="center"
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            {tutorial.title}
                          </Typography>
                          <Typography align="center">
                            {tutorial.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            onClick={() => {
                              this.handleView();
                              this.handleTutorial(tutorial);
                            }}
                            size="small"
                          >
                            View
                          </Button>
                          <Button
                            onClick={() => {
                              this.handleOpen();
                              this.handleUpdate(tutorial);
                            }}
                            size="small"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => {
                              this.handleDelete(tutorial);
                            }}
                            size="small"
                          >
                            Delete
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
              </>
            ) : (
              <></>
            )}
          </Grid>
        </Container>
        {this.state.updateActive && (
          <EditTutorial
            open={this.state.updateActive}
            tutorialToUpdate={this.state.tutorialToUpdate}
            sessionToken={this.props.sessionToken}
            handleOpen={this.handleOpen}
          />
        )}
        {this.state.view && (
          <ViewTutorial
            open={this.state.view}
            sessionToken={this.props.sessionToken}
            handleView={this.handleView}
            tutorial={this.state.tutorialToView}
          />
        )}
      </div>
    );
  }
}
