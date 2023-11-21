// mapping function
numArray = [2,3,4,5,6,10,40,36]


// print squares of each numbers in the given array
// using foreach
// numArray.forEach(num=>console.log(num**2))
// using map
const squares = numArray.map(num=>num**2)
console.log(squares);





// print cubes of each numbers in the given array
// using foreach
// numArray.forEach(num=>console.log(num**3))
// using map
const cubes = numArray.map(num=>num**3)
console.log(cubes);





// print only even numbers
// because of the involvment of condition we use filter instead of map
// using filter
const evenArray = numArray.filter(num=>num%2==0)
console.log(evenArray);


// print the follwing
// if num>10 then decrement the number
// if num<=10 the increment the number
const result = numArray.map(num=>num>10?num-1:num+1)