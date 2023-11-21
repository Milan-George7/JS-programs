// creating a class in javascript - oops

class Employee{
    // property
    // empName
    // empId
    // empSalary
    // empDesg

    //because of using 'this' property we dont have to explicitily create properties

    // methods
    constructor(name,id,salary,desg){
        this.empName = name
        this.empId = id
        this.empSalary = salary
        this.empDesg = desg
    }
    printDetails(){
        console.log('---------Employee Details---------');
        console.log(`
        Employee Name: ${this.empName}
        Employee Id: ${this.empId}
        Employee Salary: ${this.empSalary}
        Employee Designation: ${this.empDesg}`);
    }
}


//To access the elements of class we need to create object
// you can create any number of object based on the given class

// object creation
const emp1 = new Employee("milan",100,25000,"Developer")
emp1.printDetails()
const emp2 = new Employee("alan",104,20000,"Programmer")
emp2.printDetails()
