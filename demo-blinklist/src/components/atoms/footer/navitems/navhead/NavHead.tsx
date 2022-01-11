import React from "react";
import { Typography } from "@mui/material";
interface NavHeadName{
    name:string
}
const NavHead = (props:NavHeadName) => {
  return (
    <>
      <Typography
        variant="body1"
        sx={{
          fontStyle: "normal",
          fontSize: "16px",
          fontWeight: 700,
          color: "#03314B",
        }}
      >
        {props.name}
      </Typography>
    </>
  );
};

export default NavHead;
