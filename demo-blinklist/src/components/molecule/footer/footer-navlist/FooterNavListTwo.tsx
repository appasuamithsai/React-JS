import { Grid } from '@mui/material';
import React from 'react';
import NavHead from '../../../atoms/footer/navitems/navhead/NavHead';
import NavItem from '../../../atoms/footer/navitems/navitem/NavItem';

const list=["Pricing","Blinkist business","Gift cards","Blinkist magaine","Contact & help"];


const FooterNavListTwo=() => {
    return (<Grid container direction="column">
        <Grid item>
        <NavHead name="Useful links"/>
        </Grid>
        {
            list.map(e=>
                <Grid item>
                    <NavItem name={e} />
                </Grid>
            )
        }
    </Grid>);
}
export default FooterNavListTwo;