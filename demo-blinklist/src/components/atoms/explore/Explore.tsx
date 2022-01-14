import { Button } from "@mui/material";
import NavDown from "../nav/nav-down/NavDown";
import NavUp from "../nav/nav-up/NavUp";

interface Handle{
    handleChange:()=>void;
    icon:boolean;
  }
  

const Explore = (props:Handle) => {
  
  return (
    <Button
      sx={{
        fontSize: "16px",
        padding: "none",
        textTransform: "none",
        fontWeight: 500,
        color: "#03314B",
      }}
      endIcon={props.icon ? <NavUp /> : <NavDown />}
      onClick={() => {
          
          props.handleChange();
        }}
    >
      Explore
    </Button>
  );
};

export default Explore;
