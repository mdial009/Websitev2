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

export default function ITSSCard() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 346,
      backgroundColor: "#0a192f",
    },
    media: {
      height: 30,
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
        image={TA}
        title="Technical Assistant"
      />
      <CardContent>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          SUNY Plattsburgh <span className={classes.span}></span>
          Technical Assistant <span className={classes.span}></span>Plattsburgh,
          New York, United States <span className={classes.span}></span>Jan 2019
          - May 2019
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
            • Served as the primary point of contact for incoming media calls,
            including requests for meetings and interviews with company
            executives and experts.
          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Assisted patrons with library's computers and provided information
            on logging onto the Internet.
          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Closely monitored front desk visitors to maintain a secure and
            clean environment.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
