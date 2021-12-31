/* eslint-disable array-callback-return */
import React from 'react';
import Item from './Item';

class Query extends React.Component{

    state={
        input:"",
        arr:[]
    }
 
    render(){
       const handle = (i)=>{
            this.setState({...this.state,arr:this.state.arr.splice(i,1)})
            console.log(JSON.stringify(this.state.arr))
            
        }
        const t = ()=>{this.state.arr.map(val => {
            <p>val <Item id="val"/></p>
         })};
        const Style={
            margin:"5px",
            padding:"5px"
        };
        const addItem=(e)=>{
            <p><Item id={this.state.input}/></p> 
            const temp=this.state.arr;
            temp.push(this.state.input);
            this.setState({...this.state,input:""})
            this.setState({...this.state,arr:temp});
            document.querySelector('#in').value="";
           
        };
        const handleChange = (e)=>{
            this.setState({...this.state,input:e.target.value});

        }

        return (<>
        <input id="in" onChange={handleChange} style={Style} />
        <button  className='btn btn-success btn-sm m-3' onClick={addItem}>Add</button>
        <br />
        {this.state.arr.map((e)=>
            <p><Item value={e}
                func={handle}
            /></p>    
        )}
        
        
        </>);
    }
}
export default Query;