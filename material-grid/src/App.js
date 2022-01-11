import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import { pink } from '@mui/material/colors';


const theme =createTheme({
  palette:{
    primary:{
      main:"#111",
    },
    // secondary:"purple",
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header primary />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
