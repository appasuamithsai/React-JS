import React from 'react';
import { Typography } from '@mui/material';


const FooterCopyRight = () => {
    return (<>
         <Typography 
         variant='body1'
         sx={{
            fontStyle: "normal",
            fontSize: "14px",
            fontWeight: 400,
            margin: " 16px 0px 0px 16px",
            color:"#6D787E",
            }}>
               © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
            </Typography>
    </>);
}


export default FooterCopyRight;