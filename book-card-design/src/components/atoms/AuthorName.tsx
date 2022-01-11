import React from 'react';
import { Typography } from '@mui/material';

interface AuthDet{
    authName:string,
}

const AuthorName = (props:AuthDet) => {
    return (<>
         <Typography 
         variant='body1'
         sx={{
            // fontFamily: "Cera Pro",
            fontStyle: "normal",
            fontSize: "16px",
            fontWeight: 500,
            margin: " 16px 0px 0px 16px",
            color:"#6D787E",
            }}>
               {props.authName}
            </Typography>
    </>);
}


export default AuthorName;