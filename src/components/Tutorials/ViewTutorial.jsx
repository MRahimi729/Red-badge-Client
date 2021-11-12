// import React from "react";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import ExpandMoreIcon from "@mui/material/ExpandMoreIcon";
// import TextareaAutosize from "@mui/material/TextareaAutosize";
// import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
// import CardHeader from "@mui/material/CardHeader";
// import Collapse from "@mui/material/Collapse";
// import {styled} from "@mui/material/styles";

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })
//   (({ theme, expand }) => ({
//     transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest
//     })
//   }));

// export default class ViewTutorial extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       expanded: false,
//       open: false,
//       tutorialToView: {},
//     };
//   }

//   handleExpandClick = () => {
//       this.setState({expanded: false})
//   }

//   handleView = () => {
//     this.setState({
//       open: true,
//     });
//   };
//   handleClose = () => {
//     this.setState({
//       open: false,
//     });
//   };
//   handleTutorial = (tutorial) => {
//     this.setState({ tutorialToView: tutorial });
//   };

//   render() {
//     console.log(this.props.tutorials);
//     return (
//       <div>
//         <Container sx={{ py: 8 }} maxWidth="xl">
//           {/* End hero unit */}
//           <Grid container spacing={4}>
//             <>
//               {this.props.tutorials?.map((tutorial) => (
//                 <Grid item key={tutorial.id} xs={12} sm={6} md={4}>
//                     <Card sx={{ maxWidth: '85%' }}>
//       <CardHeader

//         action={
//           <IconButton aria-label="settings">
//             <ClearOutlinedIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://mui.com/static/images/cards/paella.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography paragraph>Description</Typography>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//         <br/>
//         <Typography paragraph>Estimated Time To Complete</Typography>
//         <Typography variant="body2" color="text.secondary">
//           4-6 hours
//         </Typography>
//         <br/>
//         <Typography paragraph>Tools</Typography>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like. This is yet another paragraph for this card component. I'm just typing this sothat I can have another example of what I want in the tutorial card.
//         </Typography>
//         <br/>
//         <Typography>Directions:</Typography>
//         <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//             aside for 10 minutes.
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//             large plate and set aside, leaving chicken and chorizo in the pan. Add
//             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//             stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is absorbed,
//             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//             mussels, tucking them down into the rice, and cook again without
//             stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <Typography paragraph>
//           Comments:
//         </Typography>
//       <TextareaAutosize
//       aria-label="empty textarea"
//       minRows={2}
//       placeholder="Post a Comment Here"
//       style={{ width: '80%' }}
//     />
//       </Collapse>
//     </Card>
//                 </Grid>
//               ))}
//             </>
//             ) : (<></>
//           </Grid>
//         </Container>
//       </div>
//     );
//   }
// }

//   <Card
//     sx={{
//       height: "100%",
//       display: "flex",
//       flexDirection: "column",
//     }}
//   >
//     <CardMedia
//       component="img"
//       sx={{
//         // 16:9
//         pt: "56.25%",
//       }}
//       image={tutorial.photo_url}
//       alt="random"
//     />
//     <CardContent sx={{ flexGrow: 1 }}>
//       <Typography gutterBottom variant="h5" component="h2">
//         {tutorial.title}
//       </Typography>
//       <Typography>
//         {new Date(tutorial.createdAt).toLocaleDateString()}
//       </Typography>
//       <Typography>{tutorial.description}</Typography>
//       <Typography>{tutorial.estimatedTime}</Typography>
//       <Typography>{tutorial.tools}</Typography>
//       <Typography>{tutorial.directions}</Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Close</Button>
//     </CardActions>
//   </Card>
