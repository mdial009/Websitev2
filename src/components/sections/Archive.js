import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#0096c7",

  },
}));

const columns = [
  { field: "Year", headerName: "Year", width: 68 },
  { field: "Title", headerName: "Title", width: 156 },
  { field: "Made", headerName: "Made at", width: 94 },
  { field: "Built", headerName: "Built with", width: 182 },
  { field: "Link", headerName: "Link", width: 412 },
];
const rows = [
  {
    id: 1,
    Year: 2020,
    Title: "Discord Bot",
    Made: " — ",
    Built: "React·CSS·HTML",
    Link: "https://github.com/mdial009/Discord-Bot",
  },
  {
    id: 2,
    Year: 2020,
    Title: "Mailing-Client",
    Made: " — ",
    Built: "Python",
    Link: "https://github.com/mdial009/Mailing-Client",
  },
  {
    id: 3,
    Year: 2020,
    Title: "L3v3l3ditor",
    Made: " — ",
    Built: "Python·C#·Unity3D",
    Link: "https://github.com/mdial009/L3v3l3ditor",
  },
];

export default function Archive() {
  const classes = useStyles();

  return (
    <>
      <h1>Archive</h1>
      <span>A big list of things I’ve worked on</span>
      <div style={{ height: 500, width: "auto" }}>
        <DataGrid
          className={classes.root}
          rows={rows}
          columns={columns}
          pageSize={20}
          checkboxSelection
        />
      </div>
    </>
  );
}
