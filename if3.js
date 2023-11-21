
// Program to find second largest number

const prompt = require('prompt-sync')({signint:true})
const a = prompt("enter first number: ")
const b = prompt("enter second number: ")
const c = prompt("enter Third number: ")
// prompt will always be in string

// convertion to number
const num1 = Number(a)
const num2 = Number(b)
const num3 = Number(c)


if(num1>num2 && num1>num3){
    console.log("largest is num1");
    if(num2>num3){
        console.log("2nd largest is num2");
        console.log(`Ascending order: ${num3},${num2},${num1}`);
    }
    else
    {
        console.log("2nd largest num3");
        console.log(`Ascending order: ${num2},${num3},${num1}`);
    }
}
else if(num2>num3 && num2>num1){
    if(num1>num3){
        console.log("2nd largest is num1");
        console.log(`Ascending order: ${num3},${num1},${num2}`);
    }
    else
    {
        console.log("2nd largest num3");
        console.log(`Ascending order: ${num1},${num3},${num2}`);
    }
}
else{
    console.log("largest is num3");
    if(num2>num1){
        console.log("2nd largest is num2");
        console.log(`Ascending order: ${num1},${num2},${num3}`);
    }
    else
    {
        console.log("2nd largest num1");
        console.log(`Ascending order: ${num2},${num1},${num3}`);
    }
}