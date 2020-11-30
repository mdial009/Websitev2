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
import GL from "../../images/CDIM .png";

export default function GLCard() {
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
        image={GL}
        title="Group Lead/Computer Teacher"
      />
      <CardContent>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          Christ Disciples Int'l Ministries, Inc.{" "}
          <span className={classes.span}></span>
          <span className={classes.span}></span>
          Group Lead/Computer Teacher <span className={classes.span}></span>
          Bronx, New York, United States{" "}
          <span className={classes.span}></span>Jul 2019 - Aug 2019
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
            • Reorganized and enhanced employee training closing knowledge gaps
            and boost group performance.
          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Developed a quality-driven culture to boost team performance and
            efficiency while maintaining a highly satisfied workforce.
          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Planned and implemented a curriculum to teach up-to-date
            technology to 10 students.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
