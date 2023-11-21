// program to check a 3 digit number is amrstrong or not
//153 = 1^3 + 5^3 + 3^3
const prompt = require('prompt-sync')({signint:true})
input = Number(prompt("enter number: "))

num=input

armstrong=0


while(num>0){
    lastdigit = num%10
    armstrong+=lastdigit**3
    num=Math.floor(num/10)
}


// if( input==armstrong){
   
//     console.log("the number is armstrong number");
// }
// else{
//     console.log("the number is not armstrong number");
// }

console.log(input==armstrong?`${input} is an armstrong number`:`${input} is not an armstrong number`);