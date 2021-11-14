import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";

export default class CommentActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      open: this.props.open,
      comment: "",
      commentToUpdate: {},
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.commentToUpdate.id,
      comment: this.props.commentToUpdate.comment,
    });
  }
  handleEdit = (event) => {
    console.log(this.props.sessionToken);
    event.preventDefault();
    fetch(`http://localhost:3000/comment/update/${this.state.id}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
      body: JSON.stringify({
        tutorial: {
          comment: this.state.comment,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        this.props.handleOpen();
        // this.props.userTutorials();
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div>
        <Dialog open={this.props.open} onClose={(e) => this.props.handleOpen()}>
          <DialogTitle>Update Comment</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              value={this.state.comment}
              margin="dense"
              onChange={(e) => this.setState({ comment: e.target.value })}
              id="title"
              name="title"
              label="Comment"
              type="text"
              fullWidth
              variant="outlined"
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.props.handleOpen()}>Cancel</Button>
            <Button onClick={this.handleEdit}>Update</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
