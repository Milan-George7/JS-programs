const prompt = require('prompt-sync')({signint:true})

//function definition
// function sum(num1,num2){
//     console.log("inside sum function");
//     const result = num1+num2
//     console.log(`${num1} + ${num2} : ${result}`);
//     return result
// }

//arrow function definition
const sum = (num1,num2)=>{
    console.log("inside sum function");
    const result = num1+num2
    console.log(`${num1} + ${num2} : ${result}`);
    return result
}

console.log("Addition of two numbers");
const n1 = Number(prompt("enter first number: "))
const n2 = Number(prompt("enter second number: "))

// function call
console.log(`Result: ${sum(n1,n2)}`);