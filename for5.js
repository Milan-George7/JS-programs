//program to find GCD
const prompt = require('prompt-sync')({signint:true})
num1 = Number(prompt("enter first number: "))
num2 = Number(prompt("enter second number: "))
gcd = 1

if(num1<num2){
    for(i=1;i<=num1;i++){
        if(num1%i==0 && num2%i==0){
            gcd = i
        }
    }
    console.log(`GCD(${num1},${num2}) = ${gcd}`);
}else{
    for(i=1;i<=num2;i++){
        if(num1%i==0 && num2%i==0){
            gcd = i
        }
    }
    console.log(`GCD(${num1},${num2}) = ${gcd}`);
}
