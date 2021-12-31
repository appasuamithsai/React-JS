import React from "react";

class Item extends React.Component{
    
   


    render(){
        const handleDel=()=>{
            this.props.func(this.props.value);
        };
        return (<>
            {this.props.value}
            <button className="btn btn-danger btn-sm m-3" onClick={handleDel}>Delete</button>
            
        </>);
    }
}
export default Item;