var hello : string="Hello World";


//Interface Declaration
interface User{
    name:string;
    id:number;
}

var user:User={
    name:"amith",
    id:146,
};

var s:User={
    name:"ajith",
    id:120,
};


var user1:User={
    name:"nithin",
    id:21,
};
console.log(user1.id);

interface Employee{
    name:string;
    dept:string;
}

var emp1:Employee={
    name:"ram",
    dept:"CSE",
    id:12,
};

console.log(emp1);

var emp2:Employee={
    name:"SHam",
    dept:"EEE",
    id:23,
};

 console.log(emp2);
