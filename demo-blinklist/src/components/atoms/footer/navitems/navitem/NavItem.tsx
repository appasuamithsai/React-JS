import React from "react";
import { Typography } from "@mui/material";
interface NavItemName {
  name: string;
}
const NavItem = (props: NavItemName) => {
  return (
    <>
      <Typography
        variant="body2"
        sx={{
          width: "214px",
          marginTop: "16px",
          fontStyle: "normal",
          fontSize: "16px",
          fontWeight: 400,
          color: "#6D787E",
        }}
      >
        {props.name}
      </Typography>
    </>
  );
};

export default NavItem;
