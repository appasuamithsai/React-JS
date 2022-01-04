import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
const More = () => {
  return (
    <IconButton
      sx={{
        position: "relative",
        left: "80.75%",
      }}
    >
      <MoreHorizIcon></MoreHorizIcon>
    </IconButton>
  );
};

export default More;
