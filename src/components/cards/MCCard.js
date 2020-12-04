import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GithubUsers from "../../images/GithubUserProject.png";

export default function MCCard() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 346,
      backgroundColor: "#0a192f",
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
    span: {
      marginLeft: "900px",
    },
    Typography: {
      color: "#0096c7",
    },
    paragraph: {
      color: "#0096c7",
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={MercyCenter}
        title="Mercy Center"
      />
      <CardContent>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          Mercy Center <span className={classes.span}></span>Teacher Aide{" "}
          <span className={classes.span}></span>Bronx, New York, United States{" "}
          <span className={classes.span}></span>Jul 2016 - Aug 2018
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
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Assisted children with daily homework tasks by uncovering and
            removing obstacles to success.
          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Tutored over 20 struggling, average and advanced students in math
            and reading course materials.
          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Displayed positive role-modeling, high energy, engagement, and
            good communication skills with children.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
