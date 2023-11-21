

// object
employee = {
 // key:value
    id:1000,
    ename:'neel',
    desg:'developer',
    location:'kochi',
    salary:25000
}

// Accessing an item in object
// objectname['key'] - method 1 - exact method
console.log(`Employee name: ${employee['ename']}`);
// objectname.key    - method 2
console.log(`Employee name: ${employee.ename}`);

// check if location is provided for the employee
console.log('location' in employee ?'location is provided':'not provided');

// check if gender is provided if not add gender to the object
if ('gender' in employee) {
    console.log(`Employee Gender: ${employee.gender}`);
}else{
    employee.gender = "male"
    console.log("gender added successfully");
}
console.log(employee);

// increment salary of neel by 5000
console.log("increment salary of neel by 5000");
employee.salary +=5000
console.log(employee);


// print employee details
console.log("employee details");
for(let key in employee){
    console.log(`${key} : ${employee[key]}`);
}