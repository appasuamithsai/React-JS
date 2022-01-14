import { Grid } from "@mui/material";
import React from "react";
import AvatarLogin from "../../atoms/avatar/AvatarLogin";
import NavDown from "../../atoms/nav/nav-down/NavDown";

const AvatarDrop = () => {
  return (
    <Grid container sx={{marginBottom:'23px',marginTop:'29px',marginLeft:'272px'}}>
      <Grid item>
        <AvatarLogin name="A" />
      </Grid>
      <Grid item sx={{marginTop:"7px"}}>
        <NavDown />
      </Grid>
    </Grid>
  );
};

export default AvatarDrop;
