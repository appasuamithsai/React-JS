import React,{useState,useEffect} from 'react';


const EffectDemo = () => {
    const [count, setCounter] = useState(0);
    const Style = {
        margin:"5px",
        padding:"10px"  
    }
    useEffect(() => {
        document.title=`clicked ${count} times`;
    })
    return <div>
        <h3>Use Effect : </h3>
        <p>You clicked {count} times</p>
         <button style={Style} onClick={()=>{setCounter(count+1)}} >Increment </button>
        <br />

    </div>;
}
export default EffectDemo;