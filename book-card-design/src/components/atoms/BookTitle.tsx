import React from 'react';
import { Typography } from '@mui/material';
// import {createMuiTheme} from '@mui/styles';

// const theme=createMuiTheme({

// });
interface BookDet{
    bookName:string,
}

const BookTitle = (props:BookDet) => {
    return (<>
        <Typography 
         variant='subtitle1'
         sx={{
            // fontFamily: "Cera Pro",
            fontStyle: "normal",
            fontSize: "18px",
            fontWeight: 700,
            marginLeft:"16px",
            marginTop:"23px",
            }}>
        {props.bookName}

        </Typography>
    </>);
}


export default BookTitle;