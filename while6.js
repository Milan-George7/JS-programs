// program to get reverse of a number - palindrome

const prompt = require('prompt-sync')({signint:true})
num = Number(prompt("enter number: "))
input = num
reversestr = ""

while(num>0){
    lastdigit = num%10
    reversestr+=lastdigit
    num = Math.floor(num/10)
}
console.log(`revers of input: ${input} is ${reversestr}`);
if(input==reversestr){
    console.log("the given number is palindrome");
}
else{
    console.log("the number is not palindrome");
}