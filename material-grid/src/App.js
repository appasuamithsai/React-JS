import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
// import { createMuiTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';


// const theme =createMuiTheme({
//   palette:{
//     primary:{
//       main:"#c3c3c3"
//     },
//     secondary:"purple",
//   }
// });
function App() {
  return (
    <ThemeProvider >
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
