import { Toolbar } from "@mui/material";
import React from "react";
import HeaderLeft from "../header-left/HeaderLeft";
import AvatarDrop from "../../../molecule/avatar/AvatarDrop";

interface Handle{
  handleChange:()=>void;
  icon:boolean;
}



const ToolBarHeader = (props:Handle) => {
  return (
    <Toolbar>
      <HeaderLeft icon={props.icon} handleChange={props.handleChange}  />
      <AvatarDrop />
    </Toolbar>
  );
};

export default ToolBarHeader;

