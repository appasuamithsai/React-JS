// var React=require("react");
import React from "react";
//var ReactDOM=require("react-dom");
import ReactDOM from 'react-dom';

import './index.css';


// ReactDOM.render(<h1>Hello World!!!! using React</h1>,document.querySelector('#root'));

// ReactDOM.render(<div>
//         <h1>Hello World!!!! using React</h1>
//          <p>Welcome to React</p> 
//          <h2>Happy Learning...</h2>
//         </div>,document.querySelector('#root'));

// ReactDOM.render([
//         <h1>Hello World!!!! using React</h1>,
//         <p>Welcome to React</p> ,
//         <h2>Happy Learning...</h2>
//       ],document.querySelector('#root'));


// ReactDOM.render(
//         <>   
//         <h1>Hello World!!!! using React</h1>
//          <p>Welcome to React</p> 
//          <h2>Happy Learning...</h2>
//         </>,document.querySelector('#root'));   //Using React.Fragment



// without using JSX 
//Babel will convert the below code to above form 

// ReactDOM.render(React.createElement('h1',null,"Hello World!!!")
//,document.querySelector('#root')); 


//Using Pure Java Script
// var h1=document.createElement('h1');
// h1.textContent="Hello World !!! Using JS";
// document.querySelector('#root').append(h1);

const fname="Amith"
const lname="Sai";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();

const img1="https://picsum.photos/400/200";
const img2="https://picsum.photos/300/200";
const img3="https://picsum.photos/200/200";

const url="https://www.google.com/";
ReactDOM.render(
        <>
        {/* <h1>Hello {fname+' '+lname}!!!! using React</h1> */}
        <h1 className="header">Hello {`${fname} ${lname}`}!!!! using React</h1>
        <div className="container"> 
                <p>My Id is {1+1}</p>
                <p>Current Date is {currDate}</p>
                <p>Current Time is {currTime}</p>
                <h2>My Gallery </h2>
                <img src={img1} alt="randomImg"/>
                <img src={img2} alt="randomImg"/>
                <a href={url} target="_blank">
                <img src={img3} alt="randomImg"/>
                </a>
        </div>
        </>,document.querySelector('#root'));

