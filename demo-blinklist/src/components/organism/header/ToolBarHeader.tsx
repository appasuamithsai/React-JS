import { Toolbar, Typography } from "@mui/material";
import React from "react";
import HeaderLeft from "./HeaderLeft";
import AvatarDrop from "../../molecule/AvatarDrop";

interface Handle{
  handleChange:()=>void;
}



const ToolBarHeader = (props:Handle) => {
  return (
    <Toolbar>
      <HeaderLeft handleChange={props.handleChange}  />
      <AvatarDrop />
    </Toolbar>
  );
};

export default ToolBarHeader;


