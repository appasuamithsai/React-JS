import React from "react";
import Delete from "./Delete";
class Header extends React.Component{
    state={
        display:true
    }
    render(){
        const buttonStyle={
            margin:"5px",
            padding:"5px",
            display:this.state.display
        };
        const headStyle={
            padding:"5px",
            backgroundcolor:"cyan",
            color:"red"
        };
        const del=(e) => {
            this.setState({display:false});
        };
        let comp;
        if(this.state.display){
            comp=<Delete />
        }
        return (<>
            {comp}
            <h1 style={headStyle}>Hello This is in Rendering</h1>
            <button style={buttonStyle} onClick={del}>Delete Component </button>
        </>);
    };
}

export default Header;