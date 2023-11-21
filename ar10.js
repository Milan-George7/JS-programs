numArray = [10,23,45,2,56,78]
// sorting in Ascending order
numArray.sort((a,b)=>a-b)
// after sort
// numArray = [2,10,23,45,56,78]
searchKey = 2
isFound = false
count = 0
low = 0
up = numArray.length-1

while(low<up){
    count++
    
    // binary search
    mid = Math.floor((low+up)/2)
    if(searchKey==numArray[mid]){
        isFound = true
        break
    }else if(searchKey<numArray[mid]){
        up=mid-1
    }else{
        low=mid+1
    }
}
console.log(`execution time: ${count}`);
console.log( isFound?`${searchKey} is found`:`${searchKey} is not found`); 
