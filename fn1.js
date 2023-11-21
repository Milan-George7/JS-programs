const prompt = require('prompt-sync')({signint:true})

//function definition
function sum(num1,num2){
    console.log("inside sum function");
    const result = num1+num2
    console.log(`${num1} + ${num2} : ${result}`);
}


console.log("Addition of two numbers");
const n1 = Number(prompt("enter first number: "))
const n2 = Number(prompt("enter second number: "))

// function call
sum(n1,n2)


const n3 = Number(prompt("enter first number: "))
const n4 = Number(prompt("enter second number: "))

sum(n3,n4)

