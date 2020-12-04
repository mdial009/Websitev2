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

export default function GithubCard() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 546,
      backgroundColor: "#0a192f",
    },
    media: {
      height: 600,
      paddingTop: "56.25%", // 16:9
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
      marginLeft: "400px",
    },
    spans: {
      marginLeft: "9px",
    },
    Typography: {
      color: "#0096c7",
    },
    paragraph: {
      color: "#0096c7",
    },
    Typographys: {
      color: "#0066c7",
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={GithubUsers} title="GithubUser" />
      <CardContent>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          Github Users <span className={classes.span}></span>
        </Typography>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          JavaScript 96.7%
        </Typography>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          CSS 2.2%
        </Typography>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          HTML 1.1%
        </Typography>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          align="center"
        >
          <div className={classes.Typographys}>
            <a href="https://mdial009.github.io/">
              <i class=""></i>
              <span>Website</span>
            </a>
            <span className={classes.spans}></span>
            <a href="https://mdial009.github.io/">
              <i class="https://github.com/mdial009/mdial009.github.io"></i>
              <span>Github</span>
            </a>
          </div>
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
          <Typography paragraph className={classes.paragraph} variant="inherit">
            This is a my portofilio website displaying some of my skills in
            JS,HTML and CSS
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
