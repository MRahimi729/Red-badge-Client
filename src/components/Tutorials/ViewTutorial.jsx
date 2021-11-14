import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import TextField from "@mui/material/TextField";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from "@mui/material/Modal";
import Post from "./Post.css";
import Card from "@mui/material/Card";

export default class ViewTutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      open: false,
      tutorialToView: {},
      fullWidth: true,
      maxWidth: "lg",
      comment: "",
      tutorialId: 0,
      tutorial: "",
      comments: [],
    };
  }

  fetchComments = () => {
    fetch(`http://localhost:3000/comment/${this.props.tutorial.id}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({
          comments: jsonData,
        });
        // console.log(getData);
      });
  };

  handlePost = (event) => {
    console.log(this.props.sessionToken);
    event.preventDefault();
    fetch(`http://localhost:3000/comment/create/${this.props.tutorial.id}`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
      body: JSON.stringify({
        comment: {
          comment: this.state.comment,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        this.fetchComments();
      })
      .catch((error) => console.log(error));
  };

  render() {
    console.log(this.props.tutorial);
    return (
      <div>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <>
              <Grid item key={this.props.tutorial.id} xs={12} sm={6} md={4}>
                <Dialog
                  fullWidth={this.state.fullWidth}
                  maxWidth={this.state.maxWidth}
                  open={this.props.open}
                  onClose={this.props.handleClose}
                >
                  <DialogActions>
                    <Button onClick={() => this.props.handleView()}>
                      Close
                    </Button>
                  </DialogActions>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      m: "auto",
                      width: "fit-content",
                    }}
                  >
                    <img width="50%" src={this.props.tutorial.photo_url} />
                  </Box>
                  <DialogTitle align="center">
                    {this.props.tutorial.title}
                  </DialogTitle>
                  <Typography align="center">
                    {new Date(
                      this.props.tutorial.createdAt
                    ).toLocaleDateString()}
                  </Typography>
                  <Box>
                    <DialogContent dividers>
                      <Typography variant="h6">Description</Typography>
                      <Typography>{this.props.tutorial.description}</Typography>
                      <br />
                      <Typography variant="h6">
                        Estimated Time to Complete:
                      </Typography>
                      <Typography>
                        {this.props.tutorial.estimatedTime}
                      </Typography>
                      <br />
                      <Typography variant="h6">Tools</Typography>
                      <Typography> {this.props.tutorial.tools}</Typography>
                      <br />
                      <Typography variant="h6">Directions</Typography>
                      <Typography>{this.props.tutorial.directions}</Typography>
                      <br />
                      <Typography variant="h6">Comments:</Typography>
                      <br />
                    </DialogContent>
                    <DialogActions>
                      <TextField
                        fullWidth
                        value={this.state.comment}
                        autoFocus
                        margin="dense"
                        // sx={{ m: 1, width: "60ch" }}
                        onChange={(e) =>
                          this.setState({ comment: e.target.value })
                        }
                        variant="outlined"
                        id="comment"
                        name="comment"
                        label="Leave a comment"
                        type="text"
                        multiline
                        rows={2}
                      ></TextField>
                      <Button onClick={this.handlePost}>Post</Button>
                    </DialogActions>
                  </Box>
                  {this.props.tutorial.comments.map((comment) => (
                    <Container fixed>
                      <DialogContent>
                        {/* <Container> */}
                        {/* <Card> */}
                        {comment.comment}

                        <Button>Edit</Button>
                        <Button>Delete</Button>
                        {/* </Card> */}
                        {/* </Container> */}
                      </DialogContent>
                    </Container>
                  ))}
                </Dialog>
              </Grid>
            </>
          </Grid>
        </Container>
      </div>
    );
  }
}
