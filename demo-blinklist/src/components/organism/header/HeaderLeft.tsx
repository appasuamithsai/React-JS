import { Grid } from "@mui/material";
import React from "react";
import BlinkImage from "../../atoms/blinkimage/BlinkImage";
import Explore from "../../atoms/explore/Explore";
import MyLibrary from "../../atoms/mylibrary/MyLibrary";
import SearchIcon from "../../atoms/search-icon/SearchIcon";



interface Handle{
  handleChange:()=>void;
}



const HeaderLeft = (props:Handle) => {
  return (
    <Grid container sx={{ columnGap:'42px' , marginLeft:'250px' ,marginTop:'30px',marginBottom:'30px'}}>
      <Grid item sx={{marginTop:'6px'}}>
          <BlinkImage />
      </Grid>
      <Grid item sx={{marginTop:'6px'}}>
          <SearchIcon />
      </Grid>
      <Grid item >
        <Explore handleChange={props.handleChange} />
      </Grid>
      <Grid item sx={{marginTop:'6px'}}>
            <MyLibrary />
      </Grid>
    </Grid>
  );
};

export default HeaderLeft;
