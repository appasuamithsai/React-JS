//primitives in JS 

// /*
// number 
// string
// bigint
// symbol
// boolean 
// null undefined
// */



// Unions 


type bool=true | false;

var myBool:bool=false;
console.log(myBool);
type windowState="opened" | "closed" | "minimized";
var window1:windowState= "closed";

console.log(window1);

type state="solid" | "ice" | "fire";

var bottle:state="ice";
console.log(bottle);

var myWOrds="life is a journey";

getLength(myWOrds);

getLength(["hello","worlded"]);


function getLength(obj : string | string[] ){
    if(typeof obj=== "string"){
        console.log(obj+" "+obj.length);
    }
    else{
        obj.map((e)=>console.log(e+" "+e.length));
    }
}

console.log(typeof getLength);

console.log(Array.isArray(["hel"]));


//generics

type numsArray=Array<number>;
type strArray=Array<string>;

interface demo<Type>{
    add:(o:Type)=>void;
    get:()=>Type;
}

// declare var d:demo<string>;
// var obj1=d.get();
// console.log(obj1);
// d.add("20");
// console.log(d.get());

// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
//   }
  
//   declare var backpack: Backpack<string>;
  
//   var object = backpack.get();
  
//   backpack.add("23");



//Structral typing or Duck Typing


interface Point{
    x:number;
    y:number;
}

function printPoints(p:Point){
    console.log(` { x- ${p.x} , y- ${p.y}}`);
}

var p={x:10,y:10};
printPoints(p);

var rect={x:100,y:10,z:190};
printPoints(rect);


class VirtualPoint{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
}


var vp=new VirtualPoint(100,200);
printPoints(vp);