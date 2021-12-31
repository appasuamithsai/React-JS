import React from "react";

class Car extends React.Component{
    render(){
        return (<h1>Hello I am A {this.props.color} Car</h1>);
    }
}
export default Car;