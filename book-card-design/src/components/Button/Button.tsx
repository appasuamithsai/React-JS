import React from 'react';
import './Button.css';
interface values{
    variant:string,
    children:string,
}
function Button(props:values){
    const {variant="primary",children,...rest}=props;
    return (<button className={`button ${variant}`} {...rest} >{children}</button>);
}

export default Button;