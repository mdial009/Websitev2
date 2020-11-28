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
import IBM from "../../images/ibm.png";

export default function IBMCard() {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 350,

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
          <Avatar className={classes.avatar}>
            IBM
          </Avatar>
        }
        title="IBM"
        subheader="Cyber Security Analyst"
      />
      <CardMedia className={classes.media} image={IBM} title="IBM" />
      <CardContent>
        <Typography variant="inherit" color="inherit" component="p">
          Plattsburgh, New York, United States <span className={classes.span}></span>Sep 2019 - Dec 2019
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
            • Presented security solutions to past breaches in an Agile manner
            in a team that assisted in the mitigation of the effect of data loss
            or privacy invasion.
          </Typography>
          <Typography paragraph>
            • Researched past data breaches and present them to professional
            security mentors with a solution with IBM security products and
            services.
          </Typography>
          <Typography paragraph>
            • Learned how IBM’s integrated tools such as Qradar, SOAR, and IBM
            BigFix could assist corporations presently and in the future to
            secure customer data.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
