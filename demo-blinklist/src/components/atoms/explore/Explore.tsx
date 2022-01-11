import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavDown from "../nav/NavDown";
import { useState } from "react";
import NavUp from "../nav/NavUp";

interface Handle{
    handleChange:()=>void;
  }
  

const Explore = (props:Handle) => {
  const [icon, seticon] = useState(false);
  return (
    <Button
      sx={{
        fontSize: "16px",
        padding: "none",
        textTransform: "none",
        fontWeight: 500,
        color: "#03314B",
      }}
      endIcon={icon ? <NavUp /> : <NavDown />}
      onClick={() => {
          seticon(!icon)
          props.handleChange();
        }}
    >
      Explore
    </Button>
  );
};

export default Explore;
