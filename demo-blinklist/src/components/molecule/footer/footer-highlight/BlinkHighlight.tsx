import { Grid } from "@mui/material";
import React from "react";
import BlinkImage from "../../../atoms/blinkimage/BlinkImage";
import FooterHighlight from "../../../atoms/footer/footerhightlight/FooterHighlight";

const BlinkHighlight = () => {
  return (
    <Grid
      container
      sx={{
        width: "378px",
        height: "128px",
      }}
      direction="row"
    >
      <Grid item sx={{ height :"26px", width : "124px" }}>
        <BlinkImage />
      </Grid>
      <Grid sx={{marginTop:'32px'}} item>
        <FooterHighlight />
      </Grid>
    </Grid>
  );
};

export default BlinkHighlight;
