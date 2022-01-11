import { Grid } from '@mui/material';
import React from 'react';
import NavHead from '../../../atoms/footer/navitems/navhead/NavHead';
import NavItem from '../../../atoms/footer/navitems/navitem/NavItem';

const list=["About","Careers","partners","Code of Conduct"];


const FooterNavListThree = () => {
    return (<Grid container direction="column">
        <Grid item>
        <NavHead name="Company"/>
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
export default FooterNavListThree;