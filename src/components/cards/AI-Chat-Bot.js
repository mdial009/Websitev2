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
import AI from "../../images/AIChatBot.png";

export default function StockWebCard() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 400,
      backgroundColor: "#0a192f",
    },
    media: {
      height: 300,
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
      marginLeft: "900px",
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
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={AI} title="AI-Chat-Bot" />
      <CardContent>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          AI-Chat-Bot <span className={classes.span}></span>
        </Typography>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          Python
        </Typography>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          align="center"
        >
          <span className={classes.span}></span>
          <div className={classes.Typographys}>
            <a href="https://mdial009.github.io/">
              <i class="fab fa-github fa-2x"></i>
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
          <Typography className={classes.paragraph} paragraph variant="inherit">
            This is a "Smart" Chat Bot Program that allows you to enter a url of
            a article and lets you ask a question that it then takes and
            quarries it on the website and brings back anything it can find on
            that specify thing.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
