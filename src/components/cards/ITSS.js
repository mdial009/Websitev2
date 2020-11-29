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
import ITSS from "../../images/SUNYPlattsburgh.jpg";

export default function ITSSCard() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 300,
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
        image={ITSS}
        title="Information Technology Support Specialist"
      />
      <CardContent>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          SUNY Plattsburgh <span className={classes.span}></span>
          IT Support Specialist Plattsburgh, New York,{" "}
          <span className={classes.span}></span>United States{" "}
          <span className={classes.span}></span>Feb 2020 - May 2020
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
            • Provided Tier 1 IT support to non-technical internal users through
            desk side support services.
          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Conducted in-depth product and issue resolution research to
            address customer concerns.
          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Maintained historical records by documenting system changes and
            revisions.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
