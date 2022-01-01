var EmployeeAccount = /** @class */ (function () {
    function EmployeeAccount(name, dept, id) {
        this.name = name;
        this.dept = dept;
        this.id = id;
    }
    return EmployeeAccount;
}());
var empOne = new EmployeeAccount("AMith", "CSE", 123);
console.log(empOne);
getEmployee(empOne);
console.log(newEmployee());
function getEmployee(emp) {
    console.log("He is a " + emp.name);
}
function newEmployee() {
    var emp = new EmployeeAccount("Anvesh", "TCS", 100);
    return emp;
}
