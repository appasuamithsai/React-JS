import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const Header = () => {
    return (<div>
      <AppBar position="static">
        <Toolbar>
          <Typography p={3} variant='headline' color="white">
            Home      
          </Typography>
          <Typography p={3} variant='headline' color="white">
            About     
          </Typography>
          <Typography p={3} variant='headline' color="white">
            Contact Us      
          </Typography>
          <Typography p={3} variant='headline' color="white">
            My Gallery      
          </Typography>
        </Toolbar>
      </AppBar>
    </div>);
}

export default Header;