//[ id,name,designation,location,salary,experience]
employee = [
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',15000,2],
    [1002,'Maxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]


// find highest salatied employee
const highest = employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(`employee '${highest[1]}' has highest salary of '${highest[4]}'`);

// find lowest salaries employee
const lowest = employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(`employee '${lowest[1]}' has lowest salary of '${lowest[4]}'`);

const lowestfirst= employee.reduceRight((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(`employee '${lowestfirst[1]}' has lowest salary of '${lowestfirst[4]}'`);

// find salary of all employee
const total = employee.map(emp=>emp[4]).reduce((s1,s2)=>s1+s2)

console.log(`salary of all employee ${total}`);






//1. print all employee name
console.log("All employee name");
// for(let emp of employee){
//     console.log(emp[1]);
// }
// using forEach instead of for of loop
employee.forEach(emp=>console.log(emp[1]))






//2.print total number of employee
console.log("number employees");
// for(let emp of employee){
//     console.log(emp.length);
//     break
// }
employee.forEach(emp=>console.log(emp.length))












//3. print developer employee details
console.log(" print developer employee details");
employee.filter(emp=>emp[2]=='developer').forEach(emp=>console.log(emp[1]))
// for(let emp of employee){
//     if(emp[2]=='developer'){
//         console.log(emp);
//     }
// }








//4. print employee whose salary > 30000
// console.log("employee whose salary > 30000");
// employee.filter(emp=>emp[4])
// for(let emp of employee){
//    if(emp[4]>30000){
//     console.log(emp);
//    }
// }












//5. print details of employee Laisha
console.log("print details of employee Laisha");
console.log(employee.find(emp=>emp[1]=='Laisha'));
// for(let emp of employee){
//     if(emp[1]=='Laisha'){
//         console.log(emp)
//         break
//        }
//   }











//6. Sort employee based on their salary in descending order
  console.log("employee based on their salary in descending order");
// a=[1000,'Neel','developer','kochi',25000,3]
// b= [1001,'Max','tester','TVM',15000,2]
employee.sort((a,b)=>b[4]-a[4])
console.log(employee);













//7. Sort employee based on their experience in ascending order
console.log("employee based on their experience in ascending order");
employee.sort((a,b)=>a[5]-b[5])
console.log(employee);