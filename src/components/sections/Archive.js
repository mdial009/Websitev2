import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    backgroundColor: "#0a192f",
    color: "#0096c7",
    borderBottom: "none",
  },
    h1: {
    margin: "auto auto auto",
    textAlign: "center",
  },
    p: {
    margin: "auto auto auto",
    textAlign: "center",
    marginBottom:"5px"
  },
     p1: {
    margin: "auto auto auto",
    textAlign: "center",
    marginBottom:"50px"
  },
});

function createData(title, year, made, built, links) {
  return { title, year, made, built, links };
}

const rows = [
  createData(
    "Discord",
    2020,
    "―	",
    "Javascript · NodeJS",
    <a href="https://github.com/mdial009/Discord-Bot">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
  createData(
    "L3v3l3ditor",
    2020,
    "—",
    "Unity3D · C# · Python",
    <a href="https://github.com/mdial009/L3v3l3ditor">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
  createData(
    "Countdown",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
  createData(
    "Counter",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
  createData(
    "Grocery List",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
    createData(
    "Lorem",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
    createData(
    "Menu",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
    createData(
    "Modal",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
    createData(
    "Navbar",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
    createData(
    "Questions",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
    createData(
    "Randomcolor",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
    createData(
    "Reviews",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
    createData(
    "Scroll",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
    createData(
    "Sidebars",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
    createData(
    "Slider",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
   createData(
    "Tabs",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),
   createData(
    "Video",
    2020,
    "—",
    "Javascript · HTML · CSS",
    <a href="https://github.com/mdial009/Javascript">
      <i class="fab fa-github fa-2x"></i>
    </a>
  ),

];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <div>
        <h1 className={classes.h1}>Archive</h1>
        <p className={classes.p}>A big list of things I’ve worked on</p>
        <p className={classes.p1}><Button href="https://madany-diallo.netlify.app/" color="primary">
        Home
      </Button></p>
      </div>
      <Table className={classes.table} size="large">
        <TableHead>
          <TableRow>
            <TableCell className={classes.table}>Title</TableCell>
            <TableCell className={classes.table} align="right">
              Year
            </TableCell>
            <TableCell className={classes.table} align="right">
              Made at
            </TableCell>
            <TableCell className={classes.table} align="right">
              Built with
            </TableCell>
            <TableCell className={classes.table} align="right">
              Link
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell className={classes.table} component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell className={classes.table} align="right">
                {row.year}
              </TableCell>
              <TableCell className={classes.table} align="right">
                {row.made}
              </TableCell>
              <TableCell className={classes.table} align="right">
                {row.built}
              </TableCell>
              <TableCell className={classes.table} align="right">
                {row.links}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
