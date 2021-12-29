import React, { createContext,useState } from 'react';
import Login from './Login';
import User from './User';

export const AppContext=createContext(null);
const ContextDemo = () => {
    const [userName,setUserName]=useState("");
    return (<AppContext.Provider value={{userName,setUserName}} >
        <h3>UseContext</h3>
        <Login />
        <User />
    </AppContext.Provider>);
}


export default ContextDemo;