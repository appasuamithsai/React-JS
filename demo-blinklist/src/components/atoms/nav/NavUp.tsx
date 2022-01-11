import React from 'react';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { makeStyles } from '@mui/styles';

const customStyles=makeStyles({
    keyBoardArrow:{
       backgroundBlendMode:'#042330',
    },
});

const NavUp = () => {
    const classes=customStyles();
    return <KeyboardArrowUpOutlinedIcon
     className={classes.keyBoardArrow}></KeyboardArrowUpOutlinedIcon>;
}

export default NavUp;