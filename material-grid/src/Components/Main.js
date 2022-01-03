import { Grid } from "@mui/material";
import {makeStyles} from '@mui/styles';
import React from "react";


const gridStyle=makeStyles({
    gridItemStyle:{
        color:"red",
        backgroundColor:"#111",
    }
});
const Main = () => {
    const classes=gridStyle();
  return ( <div>
      <Grid container>
        <Grid item sm p={2} margin={2} className={classes.gridItemStyle}>Home</Grid>
        <Grid item sm p={2} margin={2}  className={classes.gridItemStyle}>About</Grid>
        <Grid item sm p={2} margin={2}  className={classes.gridItemStyle}>Contact</Grid>
        <Grid item sm p={2} margin={2}  className={classes.gridItemStyle}>My Gallery</Grid>
      </Grid>
    </div>);
}
export default Main;
