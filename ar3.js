// program to check number 2 is present in given array or not
numArray = [10,23,45,2,56,78]

searchkey = 2

isFound = false
count =0
for(let num of numArray){
    count++
    if(searchkey==num){
       isFound = true
       break;
    }
  
}
console.log(`execution time: ${count}`);
console.log( isFound?`${searchkey} is found`:`${searchkey} is not found`); 
