interface Employee{
    name: string;
    dept:string;
    id:number;
}

class EmployeeAccount{
    name:string;
    id:number;
    dept:string;
    
    constructor(name:string,dept:string,id:number){
            this.name=name
            this.dept=dept;
            this.id=id;
    }


}

const empOne:Employee=new EmployeeAccount("AMith","CSE",123);
console.log(empOne);
getEmployee(empOne);
console.log(newEmployee());

function getEmployee(emp:Employee){
    console.log("He is a "+emp.name);
}

function newEmployee():Employee{
    let emp:Employee=new EmployeeAccount("Anvesh","TCS",100);
    return emp;
}


