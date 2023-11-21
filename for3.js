//program to find factorial using for loop
const prompt = require('prompt-sync')({signint:true})
input = Number(prompt("enter number: "))
fact=1
for(num=input;num>0;num--){
    fact*=num
}
console.log(`${input}! = ${fact}`);