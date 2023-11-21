// program to find factoral of a number
// ex 4! = 1x2x3x4
const prompt = require('prompt-sync')({signint:true})
input = Number(prompt("enter number: "))

num=input
fact=1
while(input>0){
    fact*=input
    input--
}
console.log(`${num}! = ${fact}`);