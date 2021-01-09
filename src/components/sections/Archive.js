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
  {
    id: 4,
    Year: 2020,
    Title: "Countdown",
    Made: " — ",
    Built: "Javascript·HTML·CSS",
    Link: "https://github.com/mdial009/Javascript",
  },
  {
    id: 5,
    Year: 2020,
    Title: "Grocery",
    Made: " — ",
    Built: "Javascript·HTML·CSS",
    Link: "https://github.com/mdial009/Javascript",
  },
  {
    id: 6,
    Year: 2020,
    Title: "Lorem",
    Made: " — ",
    Built: "Javascript·HTML·CSS",
    Link: "https://github.com/mdial009/Javascript",
  },
  {
    id: 7,
    Year: 2020,
    Title: "Navbar",
    Made: " — ",
    Built: "Javascript·HTML·CSS",
    Link: "https://github.com/mdial009/Javascript",
  },
  {
    id: 8,
    Year: 2020,
    Title: "Questions",
    Made: " — ",
    Built: "Javascript·HTML·CSS",
    Link: "https://github.com/mdial009/Javascript",
  },
  {
    id: 9,
    Year: 2020,
    Title: "RandomColor",
    Made: " — ",
    Built: "Javascript·HTML·CSS",
    Link: "https://github.com/mdial009/Javascript",
  },
  {
    id: 10,
    Year: 2020,
    Title: "Reviews",
    Made: " — ",
    Built: "Javascript·HTML·CSS",
    Link: "https://github.com/mdial009/Javascript",
  },
  {
    id: 11,
    Year: 2020,
    Title: "Scroll",
    Made: " — ",
    Built: "Javascript·HTML·CSS",
    Link: "https://github.com/mdial009/Javascript",
  },
  {
    id: 12,
    Year: 2020,
    Title: "Sidebars",
    Made: " — ",
    Built: "Javascript·HTML·CSS",
    Link: "https://github.com/mdial009/Javascript",
  },
  {
    id: 13,
    Year: 2020,
    Title: "Slider",
    Made: " — ",
    Built: "Javascript·HTML·CSS",
    Link: "https://github.com/mdial009/Javascript",
  },
  {
    id: 14,
    Year: 2020,
    Title: "Tabs",
    Made: " — ",
    Built: "Javascript·HTML·CSS",
    Link: "https://github.com/mdial009/Javascript",
  },
  {
    id: 15,
    Year: 2020,
    Title: "Video",
    Made: " — ",
    Built: "Javascript·HTML·CSS",
    Link: "https://github.com/mdial009/Javascript",
  },
];

export default function Archive() {
  const classes = useStyles();

  return (
    <>
      <h1>Archive</h1>
      <span>A big list of things I’ve worked on</span>
      <div style={{ height: 900, width: "auto" }}>
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
