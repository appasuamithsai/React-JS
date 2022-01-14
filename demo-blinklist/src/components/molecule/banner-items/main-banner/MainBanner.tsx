import { Grid } from '@mui/material';
import React from 'react';
import BannerImage from '../../../atoms/banner/banner-image/BannerImage';
import BannerItems from '../banner-item/BannerItems';

const MainBanner = () => {
    return (<Grid container sx={{ backgroundColor:'#F1F6F4',marginLeft:'270px',width:'912px'}}>
        <Grid item sx={{
            margin:'45px'
        }}>
            <BannerItems />
        </Grid>
        <Grid item sx={{margin:'20px'}}>
            <BannerImage />
        </Grid>
    </Grid>);
}

export default MainBanner;