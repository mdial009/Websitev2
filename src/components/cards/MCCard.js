import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MercyCenter from "../../images/Mercy Center .webp";

export default function MCCard() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 350,
    },
    media: {
      height: 30,
      paddingTop: "56.25%", // 16:9
      paddingLeft: "515px",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      background: "linear-gradient(45deg, #48ccc4 10%, #48cae4 50%)",
    },
    span:{
      marginLeft: "900px",
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recbookipe" className={classes.avatar}>
            MC
          </Avatar>
        }
        title="Mercy Center"
        subheader="Teachers Aide"
      />
      <CardMedia
        className={classes.media}
        image={MercyCenter}
        title="Mercy Center"
      />
      <CardContent>
        <Typography variant="inherit" color="inherit" component="p">
          Bronx, New York, <span className={classes.span}></span>United States <span className={classes.span}></span>Jul 2016 - Aug 2018
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            • Assisted children with daily homework tasks by uncovering and
            removing obstacles to success.
          </Typography>
          <Typography paragraph>
            • Tutored over 20 struggling, average and advanced students in math
            and reading course materials.
          </Typography>
          <Typography paragraph>
            • Displayed positive role-modeling, high energy, engagement, and
            good communication skills with children.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
