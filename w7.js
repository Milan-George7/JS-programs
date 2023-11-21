
// predict the next number in the series 
//     2     3      4       5      
//     2x12  3x123  4x1234  5x12345
//     24    369    4936    ?

const prompt = require('prompt-sync')({signint:true})
input = Number(prompt("enter number: "))

i = 1
str=""
while(i<=input){
    str+=i
    i++

    
}
console.log(`input :${input} and output :${+str*input}`);//if convert a string to number put a + sign before the variable (+str)