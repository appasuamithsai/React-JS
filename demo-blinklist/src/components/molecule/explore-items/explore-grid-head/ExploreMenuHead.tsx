import React from "react";
import { Grid, Typography } from "@mui/material";
const ExploreMenuHead = () => {
  return (
    <Grid container sx={{paddingTop:'30px',paddingBottom:'24px'}}>
      <Grid item xs={4}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: "700",
            fontSize: "16px",
            color:"#116BE9",
          }}
        >
          Explore by category
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: "500",
            fontSize: "16px",
            color:" #6D787E",
          }}
        >
          See recently added titles
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: "500",
            fontSize: "16px",
            color:' #6D787E',
          }}
        >
          See popular titles
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ExploreMenuHead;
