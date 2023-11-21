//display numbers whose exponent is in the given range
//8<=num**exponent<=36
//display num
//exponent=2
//output= 3,4,5,6
const prompt = require('prompt-sync')({signint:true})
input = Number(prompt("enter number: "))


num=1
while(num<=36){
if(8<=num**input && 36>=num**input){
    console.log(num);
}
num++
}
