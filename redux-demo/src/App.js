import { makeStyles } from "@mui/styles";
import { useSelector,useDispatch } from "react-redux";
import { increment, login } from "./actions";
import { decrement } from "./actions";




const useStyle=makeStyles({
  button:{
    margin:'10px',
    padding:'10px',
  }
});


function App() {
  const classes=useStyle();
  const counter=useSelector(state=>state.counter);
  const isLogged=useSelector(state=>state.isLogged);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={()=>dispatch(increment())} className={classes.button}>+</button>
      <button onClick={()=>dispatch(decrement())} className={classes.button}>-</button><br />
      {isLogged ? <h3>You are Logged in </h3>:<button className={classes.button} onClick={()=>dispatch(login())}>Login</button>}
    </div>
  );
}

export default App;
