import React,{useReducer} from 'react';
const reducer=(state,action)=>{
    switch(action.type){
        case "INC":
            return {count:state.count+1,showText:state.showText};
        case "tooggle":
            return {count:state.count,showText:!state.showText};
        default :
            return {count:state.count,showText:state.showText};

    }
};
const ReducerDemo = () => {
    const [state,dispatch]=useReducer(reducer,{count:0,showText:true});
    const Style = {
        margin:"5px",
        padding:"10px"
    }
    return <div>
        <h3>User Reducer : </h3>
        {state.count}
        <button style={Style} onClick={()=>{
            dispatch({type:"INC"})
            dispatch({type:"tooggle"})
        }}>Click Me</button>
        {state.showText && <p>This is Para...</p>}
    </div>;
}

export default ReducerDemo;