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
import PortfolioWebsiteV3 from "../../images/personal-websiteApex.gif";

export default function PortfolioCard() {
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
      <CardMedia
        className={classes.media}
        image={PortfolioWebsiteV3}
        title="PortfolioWebsite"
      />
      <CardContent>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          Portfolio Website v3 <span className={classes.span}></span>
        </Typography>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          APEX
        </Typography>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          SQL
        </Typography>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          PL/SQL
        </Typography>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          align="center"
        >
          <div className={classes.Typographys}>
            <a href="https://apex.oracle.com/pls/apex/personal-website/r/personal-website/home">
              <i class="fas fa-external-link-square-alt fa-2x"></i>
            </a>
            <span className={classes.spans}></span>
            <a href="https://github.com/mdial009/Websitev3">
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
          <Typography paragraph className={classes.paragraph} variant="inherit">
            This is a my portfolio website displaying some of my skills in APEX,
            SQL and PL/SQL
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
