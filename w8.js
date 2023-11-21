// predict the next number in the series 
//     2          3          4                 5
//     2+22       3+33+333   4+44+444+4444     
//     24         369        4936              ?



const prompt = require('prompt-sync')({signint:true})
input = Number(prompt("enter number: "))

i=1
str=""
sum=0
while(i<=input){
    str+=input
    sum+=+str
    i++
}
console.log(`input: ${input} , output: ${sum}`);