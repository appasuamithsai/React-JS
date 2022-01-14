import { Typography } from "@mui/material";
import React from "react";

const BannerOne = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontWeight: "700",
        fontSize: "36px",
        color:'#03314B',
      }}
      width="319px"
    >
      Explore Books on entrepreneurship
    </Typography>
  );
};

export default BannerOne;
