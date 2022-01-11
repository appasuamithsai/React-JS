
import { Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';


const theme=createTheme({
    typography:{
        h1:{
            fontSize:'36px',
            fontWeight:700,
            color:'#03314B',
        }
    }
}); 

const MyLibraryHeading = () => {
    return (<ThemeProvider theme={theme}  ><Typography sx={{marginTop:'59px',marginLeft:"280px"}} variant='h1'>My Library</Typography></ThemeProvider>);
}

export default MyLibraryHeading;