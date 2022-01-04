import React from 'react';
import { Typography } from '@mui/material';
// import {createMuiTheme} from '@mui/styles';

// const theme=createMuiTheme({

// });


const BookTitle = () => {
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
        Beyond Entrepreneurship

        </Typography>
    </>);
}


export default BookTitle;