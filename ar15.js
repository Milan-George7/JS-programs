numArray = [1,3,4,5,6,8,12]

// find total sum of all numbers in the array
sum = numArray.reduce((n1,n2)=>n1+n2)
console.log(`sum = ${sum}`);
// find smallest number
smallest = numArray.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(`smallest = ${smallest}`);
// find largest number
largest = numArray.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(`largest = ${largest}`);
