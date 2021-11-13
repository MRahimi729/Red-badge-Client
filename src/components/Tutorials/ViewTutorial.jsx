import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import CommentIcon from "@mui/icons-material/Comment";

export default class ViewTutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      open: false,
      tutorialToView: {},
      fullWidth: true,
      maxWidth: "lg",
    };
  }

  //   handleView = () => {
  //     this.setState({
  //       open: true,
  //     });
  //   };
  //   handleClose = () => {
  //     this.setState({
  //       open: !this.state.open,
  //     });
  //   };

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
                    <img width="300px" src={this.props.tutorial.photo_url} />
                  </Box>
                  <DialogTitle align="center">
                    {this.props.tutorial.title}
                  </DialogTitle>
                  <Typography align="center">
                    {new Date(
                      this.props.tutorial.createdAt
                    ).toLocaleDateString()}
                  </Typography>
                  <DialogContent dividers>
                    <Typography variant="h6">Description</Typography>
                    <Typography>{this.props.tutorial.description}</Typography>
                    <br />
                    <Typography variant="h6">
                      Estimated Time to Complete:
                    </Typography>
                    <Typography>{this.props.tutorial.estimatedTime}</Typography>
                    <br />
                    <Typography variant="h6">Tools</Typography>
                    <Typography> {this.props.tutorial.tools}</Typography>
                    <br />
                    <Typography variant="h6">Directions</Typography>
                    <Typography>{this.props.tutorial.directions}</Typography>
                    <br />
                    <Typography>Comments:</Typography>
                    <DialogActions>
                      <Box>
                        <Typography></Typography>
                      </Box>
                      <Button>Edit</Button>
                      <Button>Delete</Button>
                    </DialogActions>
                  </DialogContent>
                  <DialogActions>
                    {/* <TextAreaAutosize
            aria-label="empty textarea"
            minRows={2}
            placeholder="Post a Comment Here"
            style={{ width: "90%" }}
            /> */}
                    <Button>Post</Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </>
          </Grid>
        </Container>
      </div>
    );
  }
}
