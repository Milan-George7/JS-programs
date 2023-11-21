const prompt = require('prompt-sync')({signint:true})
const age = prompt("Enter your age: ")
// if statement
// if(age>=18){
//     console.log("person is eligible for voting");
// }
// else statement
// else{
//     console.log("person is not eligible for voting");
// }


// conditional operators using ternary operator "?"
console.log(age>=18?"person is eligible for voting":"person is not eligible for voting")