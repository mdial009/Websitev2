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
import Speedway from "../../images/Speedway.jpeg";

export default function SpeedwayCard() {
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
        image={Speedway}
        title="Retail Sales Consultant"
      />
      <CardContent>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          Speedway LLC <span className={classes.span}></span>
          Retail Sales Consultant <span className={classes.span}></span>Bronx, New York,{" "}
          <span className={classes.span}></span>United States{" "}
          <span className={classes.span}></span>Jun 2020 - Present
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
            • Provided accurate information about promotions, customer programs, and products, helping drive high customer retention.

          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Approached each problem with a fresh mind and analytical strategies to quickly resolve concerns.

          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Pursued resolutions to achieve complete customer satisfaction, including tracking down hard-to-find merchandise at diverse locations.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
