import React from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { makeStyles } from '@mui/styles';

const customStyles=makeStyles({
    keyBoardArrow:{
       backgroundBlendMode:'#042330',
    },
});

const NavDown = () => {
    const classes=customStyles();
    return <KeyboardArrowDownOutlinedIcon
     className={classes.keyBoardArrow}></KeyboardArrowDownOutlinedIcon>;
}

export default NavDown;