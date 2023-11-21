const prompt = require('prompt-sync')({signint:true})
const x = prompt("enter first number: ")
const y = prompt("enter second number: ")



// if(x>y){
//     console.log(`${x} is largest`);
// }
// else if ladder
// else if(y>x){
//     console.log(`${y} is largest`);
// }
// else{
//     console.log("both are equal");
// }

// conditional statements using ternary operator "?"
console.log(x>y?`${x} is largest`:y>x?`${y} is largest`:"both are equal");