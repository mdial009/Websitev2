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
        image={GithubUsers}
        title="Office Assistant"
      />
      <CardContent>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          Columbia University Medical Center Office Assistant{" "}
          <span className={classes.span}></span>Manhattan, New York, United
          States <span className={classes.span}></span>Jul 2018 - Aug 2018
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
            • Interacted with customers professionally by phone, email, or
            in-person to provide information and directed to desired staff
            members.
          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Streamlined processing procedures for various financial and
            employee documents to improve traceability.
          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Tracked and recorded expenses and reconciled accounts to maintain
            accurate, current, and compliant financial records.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
