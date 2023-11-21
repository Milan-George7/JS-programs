numArray = [
    [10,20],[23,50],[45,78],[89,18],[96,90]
]



// display total sum of all numbers - reduce
// changing the multi-dimensional array to single-dimensional array using flat
console.log(`total number of all number: ${numArray.flat(Infinity).reduce((n1,n2)=>n1+n2)}`);

// display all numbers > 50 - filter
console.log("numbers > 50");
console.log(numArray.flat(Infinity).filter(num=>num>50));

// find highest number - reduce
console.log(`highest number: ${numArray.flat(Infinity).reduce((n1,n2)=>n1>n2?n1:n2)}`);

// display squares of each number in the array - map
console.log(`squares of each number in the array: ${numArray.flat(Infinity).map(num=>num**2)}`);