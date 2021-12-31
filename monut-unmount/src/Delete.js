import React from "react";

class Delete extends React.Component{
    componentDidMount(){
        alert("h1 Mounted");
    }
    componentWillUnmount(){
        alert("Componet Will be deleted");
    }
    render(){
        return <h1>Component will Deleted</h1>;
    }
}
export default Delete;