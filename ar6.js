// program to find duplicate numbers from given array
numArray = [10,20,30,40,20,30,40,40,50,20,70]

for(i=0;i<numArray.length;i++){
   for(j=i+1;j<numArray.length;j++){
        if(numArray[i]==numArray[j]){
            console.log(numArray[i]);
            break
        }
   }
}