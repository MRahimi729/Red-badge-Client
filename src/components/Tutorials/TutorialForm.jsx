import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

export default class TutorialForm extends React.Component {
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
      image: "",
      Loading: false,
    };
  }

  uploadImage = async (event) => {
    let files = event.target.files;
    let data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    let res = await fetch(
      "https://api.cloudinary.com/v1_1/dmvwjinuq/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    let File = await res.json();
    console.log(File);
    this.setState({ photo_url: File.secure_url });
    // this.setState.Loading(false)
  };

  handleClickOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleClose = () => {
    console.log("button firing");
    this.setState({ open: !this.state.open });
  };

  handleSubmit = (event) => {
    console.log(this.props.sessionToken);
    event.preventDefault();
    fetch("http://localhost:3000/tutorial/create", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
      body: JSON.stringify({
        tutorial: {
          title: this.state.title,
          photo_url: this.state.photo_url,
          description: this.state.description,
          estimatedTime: this.state.estimatedTime,
          tools: this.state.tools,
          directions: this.state.directions,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        this.props.handleClose();
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={(e) => this.setState({ open: false })}
        >
          <DialogTitle>Create Tutorial</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below to create a new tutorial.
            </DialogContentText>
            <TextField
              autoFocus
              value={this.state.title}
              margin="dense"
              onChange={(e) => this.setState({ title: e.target.value })}
              id="title"
              name="title"
              label="Title"
              type="text"
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              accept="image/*"
              autoFocus
              // value={this.state.photo_url}
              margin="dense"
              onChange={this.uploadImage}
              id="upload button"
              name="photo_url"
              label="Upload Photo"
              type="file"
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              value={this.state.description}
              autoFocus
              margin="dense"
              // sx={{ m: 1, width: "60ch" }}
              onChange={(e) => this.setState({ description: e.target.value })}
              variant="outlined"
              id="description"
              name="description"
              label="Description"
              type="text"
              multiline
              rows={5}
              required
            ></TextField>
            <TextField
              fullWidth
              value={this.state.estimatedTime}
              autoFocus
              margin="dense"
              // sx={{ m: 1, width: "60ch" }}
              onChange={(e) => this.setState({ estimatedTime: e.target.value })}
              variant="outlined"
              id="estimatedTime"
              name="estimatedTime"
              type="text"
              label="Estimated Time to Complete (hrs)"
              // multiline
              // rows={5}
              required
            ></TextField>
            <TextField
              fullWidth
              value={this.state.tools}
              autoFocus
              margin="dense"
              // sx={{ m: 1, width: "60ch" }}
              onChange={(e) => this.setState({ tools: e.target.value })}
              variant="outlined"
              id="tools"
              name="tools"
              label="Tools"
              type="text"
              multiline
              rows={5}
              required
            ></TextField>
            <TextField
              fullWidth
              value={this.state.directions}
              autoFocus
              margin="dense"
              // sx={{ m: 1, width: "60ch" }}
              onChange={(e) => this.setState({ directions: e.target.value })}
              variant="outlined"
              id="directions"
              name="directions"
              label="Directions"
              type="text"
              multiline
              rows={20}
              required
            ></TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.handleClose()}>Cancel</Button>
            <Button onClick={this.handleSubmit}>Create</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
