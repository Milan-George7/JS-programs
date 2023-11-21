// program to check a number is prime or not
const prompt = require('prompt-sync')({signint:true})
input = Number(prompt("enter number: "))


isprime = true
for(i=2;i<input;i++){
    if(input%i==0){
        isprime = false
        break
    }
}
console.log(isprime?`${input} is a prime number`:`${input} is not a prime number`);