import React,{useContext,useState} from 'react';
import { AppContext } from '../App';


const Login = () => {
    const {setuserName}=useContext(AppContext);
    const {setLogin}=useContext(AppContext);
    const {userName}=useContext(AppContext);
    const [password, setpassword] = useState("");
    const [valid, setvalid] = useState(false)
    const Style={
        margin:"10px",
        padding:"5px"
    };
    const btnStyle={
        width:"100%",
        padding:"5px",
        margin:"7px 0px",
        textalign:"center"
    };
    let comp;
    let pStyle={
        color:"red"
    };
    if(valid){
        comp=<p style={pStyle}>Please Enter Valid Credentails</p>
    }
    const call=()=>{
        console.log(userName);
        console.log(password);
        if(userName!=="" && password!==""){
            setLogin(false);
            setvalid(false);
        }else{
            setvalid(true);
        }
    };
    return <>
        <h2 style={btnStyle}>Login..</h2>
        {comp}
        <input style={Style} placeholder='Username ' onChange={(e)=>setuserName(e.target.value)} type={'text'} /> <br />
        <input style={Style} placeholder='Password' onChange={(e)=>setpassword(e.target.value)} type={'password'} required/> <    br />
        <button style={btnStyle} className="btn btn-success" onClick={call}>Login</button>
    </>;
}


export default Login;