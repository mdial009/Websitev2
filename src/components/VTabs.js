import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IBM from "../images/GithubUserProject.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#0a192f",
    color: "#0096c7",
  },
  tabs: {
    width: "100%",
    textAlign: "center",
    alignitems: "center",
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Github-User-Project" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.tabs} value={value} index={0}>
        <img src={IBM} alt="boohoo"></img>
        <div className={classes.tabs}>React CSS HTML JavaScript</div><div> A React App that lets you search up
        different users on GitHub using GitHub API. You are able to see
        different stats about the users(Followers/Following, Repos)</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Project Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Project Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Project Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Project Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Project Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Project Seven
      </TabPanel>
    </div>
  );
}
