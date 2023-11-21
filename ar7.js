// w.a.p to print pair of number whose sum is 6 in the given array
pairArray = [2,3,4,5]
pairSum = 6
for(i=0;i<pairArray.length;i++){
    for(j=i+1;j<pairArray.length;j++){
        if(pairArray[i]+pairArray[j]==pairSum){
            console.log(`pair is (${pairArray[i]},${pairArray[j]})`);
        }
    }
}




