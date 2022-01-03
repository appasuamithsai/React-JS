import React from 'react';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";


const ButtonMui = () => {
    return (<div>
          <Button p={3}  startIcon={<DeleteIcon />} align="center"  component="div">
        Delete
      </Button>
      <Button p={3}  mt={2} align="center">
        lol
      </Button>
      <Button p={3}  onClick={()=>alert("Hey Hello")} align="center" >
        Cool
      </Button>
      <Button p={3}   align="center" endIcon={<SendIcon />} >
        Send
      </Button>
    </div>);
}

export default ButtonMui;