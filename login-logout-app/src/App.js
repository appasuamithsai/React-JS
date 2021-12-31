import './App.css';
import React,{useState,useContext} from 'react';
import Login from './MyComponets/Login';
import Logout from './MyComponets/Logout';
import { createContext } from 'react';
export const AppContext=createContext(null);

function App() {
  const [login,setLogin]=useState(true);
  const [userName, setuserName] = useState("");
  let comp;
  if(login){
    comp=<Login />;
  }else{
    comp=<Logout />;
  }
  return (
    <AppContext.Provider  value={{login,setLogin,userName,setuserName}} className="App">
    <div id="container">
      <div className='inner'>{comp}</div>
    </div>
     
    </AppContext.Provider>
  );
}

export default App;
