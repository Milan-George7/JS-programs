//function to find cube of a number
const prompt = require('prompt-sync')({signint:true})

//function definition
// function cube(num){
    // console.log("inside cube function");
    // const result = num**3
    // console.log(`${num1} * ${num1} * ${num1} : ${result}`);
//     return num**3
// }

// arrow function definition
const cube = (num) => num**3 //in an arrow function if there is only one statement in the function body there is no need to put them inside the function body{}

n1 = Number(prompt("enter number: "))


// function call
console.log(`cube of the number is: ${cube(n1)}`);

