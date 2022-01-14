import { Button } from '@mui/material';
import React from 'react';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import { makeStyles } from "@mui/styles";
interface Handle{
    handleReadAgain:(item:string)=>void;
}
const useStyle = makeStyles({
    btnStyle: {
      color: "#0365F2",
      width: "100%",
      textTransform: "none",
      paddingTop: "14px",
      paddingBottom: "10px",
      fontSize: "16px",
      fontWeight: "500",
      
    },
  });

const ReadAgainButton = (props:Handle) => {
    const temp = useStyle();
    return (
        <Button
        variant="text"
        startIcon={<ReplayOutlinedIcon />}
        className={temp.btnStyle}
        sx={{
          "&:hover": {
            backgroundColor: "#0365F2",
            color: "#FFFFFF",
          },
        }}
        onClick={()=>{props.handleReadAgain("Beyond Entrepreneurship 2.0")}}

      >
        Read Again
      </Button>
    );
}


export default ReadAgainButton;