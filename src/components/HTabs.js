import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
  column: {
    float: "left",
    width: "100%",
    padding: "10px",
    height: "auto",
    display: "flex",
  },
  row: {
    content: "",
    display: "table",
    clear: "both",
  },
  underline: {
    textDecoration: "none",
  },
  arrows: {
    listStyle: "none",
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
          <Tab label="IBM" {...a11yProps(0)} />
          <Tab label="SUNY Plattsburgh" {...a11yProps(1)} />
          <Tab label="Staples" {...a11yProps(2)} />
          <Tab label="Speedway" {...a11yProps(3)} />
          <Tab
            label="Christ Disciples Int'l Ministries, Inc."
            {...a11yProps(4)}
          />
          <Tab label="Columbia University Medical Center" {...a11yProps(5)} />
          <Tab label="Compass Group North America" {...a11yProps(6)} />
          <Tab label="Mercy Center" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.row} value={value} index={0}>
        <div class={classes.row}>
          <div className={classes.column}>
            <p>
              Cyber Security Consultant @
              <a className={classes.underline} href="https://ibm.com/">
                <span> IBM</span>
              </a>
              <p>Sep 2019 - Dec 2019</p>
              <li className={classes.arrows}>
                ‣ Presented security solutions to past breaches in an Agile
                manner in a team that assisted in the mitigation of the effect
                of data loss or privacy invasion.
              </li>
              <li className={classes.arrows}>
                ‣ Researched past data breaches and present them to professional
                security mentors with a solution with IBM security products and
                services.
              </li>
              <li className={classes.arrows}>
                ‣ Learned how IBM’s integrated tools such as Qradar, SOAR, and
                IBM BigFix could assist corporations presently and in the future
                to secure customer data.
              </li>
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} class={classes.row}>
        <div class={classes.row}>
          <div className={classes.column}>
            <p>
              Technical Assistant @
              <a
                className={classes.underline}
                href="https://www.plattsburgh.edu/"
              >
                <span> SUNY Plattsburgh</span>
              </a>
              <p>Jan 2019 - May 2019</p>
              <li className={classes.arrows}>
                ‣ Served as the primary point of contact for incoming media
                calls, including requests for meetings and interviews with
                company executives and experts.
              </li>
              <li className={classes.arrows}>
                ‣ Assisted patrons with library's computers and provided
                information on logging onto the Internet.
              </li>
              <li className={classes.arrows}>
                ‣ Closely monitored front desk visitors to maintain a secure and
                clean environment.
              </li>
            </p>
          </div>
          <div className={classes.column}>
            <div>
              IT Support Specialist @
              <a
                className={classes.underline}
                href="https://www.plattsburgh.edu/"
              >
                <span> SUNY Plattsburgh</span>
              </a>
              <p>Feb 2020 - May 2020</p>
              <li className={classes.arrows}>
                ‣ Provided Tier 1 IT support to non-technical internal users
                through desk side support services.
              </li>
              <li className={classes.arrows}>
                ‣ Conducted in-depth product and issue resolution research to
                address customer concerns.
              </li>
              <li className={classes.arrows}>
                ‣ Maintained historical records by documenting system changes
                and revisions.
              </li>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel className={classes.row} value={value} index={2}>
        <div class={classes.row}>
          <div className={classes.column}>
            <p>
              Sales Associate @
              <a className={classes.underline} href="https://www.staples.com/">
                <span> Staples LLC</span>
              </a>
              <p>Sep 2019 - Dec 2019</p>
              <li className={classes.arrows}>
                ‣ Organized racks and shelves to maintain store visual appeal,
                engage customers and promote specific merchandise.
              </li>
              <li className={classes.arrows}>
                ‣ Worked alongside retail representatives to boost sales by
                enhancing product presentations and advertising collateral.
              </li>
              <li className={classes.arrows}>
                ‣ Trained and developed Sales Associates in company processes,
                product knowledge, customer service and selling techniques.
              </li>
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel className={classes.row} value={value} index={3}>
        <div class={classes.row}>
          <div className={classes.column}>
            <p>
              Retail Sales Consultant @
              <a className={classes.underline} href="https://www.speedway.com/">
                <span> Speedway LLC</span>
              </a>
              <p>Jun 2020 - Present</p>
              <li className={classes.arrows}>
                ‣ Provided accurate information about promotions, customer
                programs, and products, helping drive high customer retention.
              </li>
              <li className={classes.arrows}>
                ‣ Approached each problem with a fresh mind and analytical
                strategies to quickly resolve concerns.
              </li>
              <li className={classes.arrows}>
                ‣ Pursued resolutions to achieve complete customer satisfaction,
                including tracking down hard-to-find merchandise at diverse
                locations.
              </li>
            </p>
          </div>
        </div>{" "}
      </TabPanel>
      <TabPanel className={classes.row} value={value} index={4}>
        <div class={classes.row}>
          <div className={classes.column}>
            <p>
              Group Lead/Computer Teacher @
              <a
                className={classes.underline}
                href="https://christdisciples.org/"
              >
                <span> Christ Disciples Int'l Ministries, Inc.</span>
              </a>
              <p>Jul 2019 - Aug 2019</p>
              <li className={classes.arrows}>
                ‣ Reorganized and enhanced employee training closing
                knowledge gaps and boost group performance.
              </li>
              <li className={classes.arrows}>
                ‣ Developed a quality-driven culture to boost team performance
                and efficiency while maintaining a highly satisfied workforce.
              </li>
              <li className={classes.arrows}>
                ‣ Planned and implemented a curriculum to teach up-to-date
                technology to 10 students.
              </li>
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel className={classes.row} value={value} index={5}>
        <div class={classes.row}>
          <div className={classes.column}>
            <p>
              Office Assistant @
              <a
                className={classes.underline}
                href="https://www.cuimc.columbia.edu/"
              >
                <span> Columbia University Medical Center </span>
              </a>
              <p>Jul 2018 - Aug 2018</p>
              <li className={classes.arrows}>
                ‣ Interacted with customers professionally by phone, email, or
                in-person to provide information and directed to desired staff
                members.
              </li>
              <li className={classes.arrows}>
                ‣ Streamlined processing procedures for various financial and
                employee documents to improve traceability.
              </li>
              <li className={classes.arrows}>
                ‣ Tracked and recorded expenses and reconciled accounts to
                maintain accurate, current, and compliant financial records.
              </li>
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel className={classes.row} value={value} index={6}>
        <div class={classes.row}>
          <div className={classes.column}>
            <p>
              Food Service Worker @
              <a
                className={classes.underline}
                href="https://www.compass-usa.com/"
              >
                <span> Compass Group North America</span>
              </a>
              <p>Nov 2016 - May 2017</p>
              <li className={classes.arrows}>
                ‣ Replenished condiments, beverages, and supplies while
                maintaining the cleanliness of service areas.
              </li>
              <li className={classes.arrows}>
                ‣ Cooked batches of food according to standard recipes.
              </li>
              <li className={classes.arrows}>
                ‣ Inspected equipment such as refrigerators and warming lamps
                every hour to check compliance with safe operating levels.
              </li>
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel className={classes.row} value={value} index={7}>
        <div class={classes.row}>
          <div className={classes.column}>
            <p>
              Teacher Aide @
              <a
                className={classes.underline}
                href="https://www.mercycenterbronx.org/"
              >
                <span> Mercy Center</span>
              </a>
              <p>Jul 2016 - Aug 2018</p>
              <li className={classes.arrows}>
                ‣ Assisted children with daily homework tasks by uncovering and
                removing obstacles to success.
              </li>
              <li className={classes.arrows}>
                ‣ Tutored over 20 struggling, average and advanced students in
                math and reading course materials.
              </li>
              <li className={classes.arrows}>
                ‣ Displayed positive role-modeling, high energy, engagement, and
                good communication skills with children.
              </li>
            </p>
          </div>
        </div>
      </TabPanel>
    </div>
  );
}
