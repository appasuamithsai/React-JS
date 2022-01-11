import React from "react";
import { Button } from "@mui/material";

interface ButtonType {
  itemname: string;
  itemicon: React.ReactElement;
  handlePage:()=>void;
}

export const Buttons = (props: ButtonType) => {
  return (
    <Button
      variant="text"
      sx={{
        textTransform: "none",
        color: "#6D787E",
        fontWeight: "400",
        fontStyle: "Normal",
        fontSize: "16px",
        '&:hover': { 
          color:'#0365F2',
    
        }
      }}
  
      startIcon={props.itemicon}

      onClick={()=>{props.handlePage()}}
    >
      {props.itemname}
    </Button>
  );
};

export default Buttons;
