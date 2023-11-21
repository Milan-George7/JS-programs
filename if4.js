// write a program to check whether a number is divisible by 3,5,15
// if its divisible by 3 give output fizz
// if its divisible by 5 give output buzz
// if its divisible by 15 give output fizzbuzz
const prompt = require('prompt-sync')({signint:true})
const num = Number(prompt("enter number: "))





if(num%15==0){
    console.log("fizzbuzz");
}
else if(num%5==0){
    console.log("buzz");
}
else if(num%3==0){
    console.log("fizz");
}
else{
    console.log("try with another number");
}