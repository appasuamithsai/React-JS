import { Button } from '@mui/material';
import React from 'react';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import customStyle from '../../../Theme';

interface Handle{
    handleReadAgain:(item:string)=>void;
}


const ReadAgainButton = (props:Handle) => {
    const temp = customStyle();
    return (
        <Button
        variant="text"
        startIcon={<ReplayOutlinedIcon />}
        className={temp.readAgain}
        onClick={()=>{props.handleReadAgain("Beyond Entrepreneurship 2.0")}}
      >
        Read Again
      </Button>
    );
}


export default ReadAgainButton;