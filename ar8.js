// w.a.p find common numbers from given arrays
p=[10,11,12,20,30]
q=[11,20,21,30,31]

for(let num1 of p){
    for(let num2 of q){
        if(num1==num2){
            console.log(num1);
        }
    }
}


