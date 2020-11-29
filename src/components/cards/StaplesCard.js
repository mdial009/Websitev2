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
import Staples from "../../images/Staples.png";

export default function StaplesCard() {
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
        image={Staples}
        title="Sales Associate"
      />
      <CardContent>
        <Typography
          variant="inherit"
          color="inherit"
          component="p"
          className={classes.Typography}
        >
          SUNY Plattsburgh <span className={classes.span}></span>
          Sales Associate <span className={classes.span}></span>Plattsburgh, New York,{" "}
          <span className={classes.span}></span>United States{" "}
          <span className={classes.span}></span>Nov 2017 - May 2020
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
            • Organized racks and shelves to maintain store visual appeal,
            engage customers and promote specific merchandise.
          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Worked alongside retail representatives to boost sales by
            enhancing product presentations and advertising collateral.
          </Typography>
          <Typography className={classes.paragraph} paragraph variant="inherit">
            • Trained and developed Sales Associates in company processes,
            product knowledge, customer service and selling techniques.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
