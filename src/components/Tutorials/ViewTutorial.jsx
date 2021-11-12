import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import CommentIcon from "@mui/icons-material/Comment";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default class ViewTutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      expanded: false,
      open: false,
      tutorialToView: {},
    };
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleView = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
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
                //{" "}
                <Card sx={{ maxWidth: "85%" }}>
                  <CardHeader
                    action={
                      <IconButton aria-label="settings">
                        <ClearOutlinedIcon />
                      </IconButton>
                    }
                    title={this.props.tutorial.title}
                    subheader={new Date(
                      this.props.tutorial.createdAt
                    ).toLocaleDateString()}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={this.props.tutorial.photo_url}
                    alt="tutorial image"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography paragraph>Description</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {this.props.tutorial.description}
                    </Typography>
                    <br />
                    <Typography paragraph>
                      Estimated Time To Complete
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {this.props.tutorial.estimatedTime}
                    </Typography>
                    <br />
                    <Typography paragraph>Tools</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {this.props.tutorial.tools}
                    </Typography>
                    <br />
                    <Typography>Directions:</Typography>
                    <Typography paragraph>
                      {this.props.tutorial.directions}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <ExpandMore
                      expand={this.state.expanded}
                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                      aria-label="show more"
                    >
                      <CommentIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse
                    in={this.state.expanded}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Typography paragraph>Comments:</Typography>
                    <Typography>Comments Display here</Typography>
                    <CardActions>
                      <TextareaAutosize
                        aria-label="empty textarea"
                        minRows={2}
                        placeholder="Post a Comment Here"
                        style={{ width: "90%" }}
                      />
                      <Button>Post</Button>
                    </CardActions>
                  </Collapse>
                </Card>
              </Grid>
            </>
          </Grid>
        </Container>
      </div>
    );
  }
}
