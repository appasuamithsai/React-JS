import React from "react";
import { Button } from "@mui/material";
import { Link, MemoryRouter as Router } from "react-router-dom";

interface ButtonType {
  itemname: string;
  itemicon: React.ReactElement;
  handleChange: () => void;
}

export const Buttons = (props: ButtonType) => {
  return (
    //<Router>
      <Link to="/explore" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            color: "#6D787E",
            fontWeight: "400",
            fontStyle: "Normal",
            fontSize: "16px",
            "&:hover": {
              color: "#0365F2",
            },
          }}
          startIcon={props.itemicon}
          onClick={() => props.handleChange()}
        >
          {props.itemname}
        </Button>
      </Link>
   // </Router>
  );
};

export default Buttons;
