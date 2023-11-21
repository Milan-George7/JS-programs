//function to find a number is odd /even

const prompt = require('prompt-sync')({signint:true})

//function definition
function oddeven(num){
   return num%2==0?`${num} is even`:`${num} is odd`
}

n1 = Number(prompt("enter number: "))


// function call
console.log(`${oddeven(n1)}`);


