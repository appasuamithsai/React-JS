
import { Typography } from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';


const theme=createTheme({
    typography:{
        body1:{
            fontSize:16,
            fontWeight:500,
            color:'#03314B',
        }
    }
}); 

const MyLibrary = () => {
    return <ThemeProvider theme={theme} >
        <Typography variant='body1' >
           MyLibrary
        </Typography>
    </ThemeProvider >;
}

export default MyLibrary;
