import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { makeStyles } from '@mui/styles';

const customStyles=makeStyles({
    searchSearchIcon:{
       backgroundBlendMode:'#042330',
    },
});
const SearchIcon = () => {
    const classes=customStyles();
    return <SearchOutlinedIcon 
    className={classes.searchSearchIcon}></SearchOutlinedIcon>;
}

export default SearchIcon;