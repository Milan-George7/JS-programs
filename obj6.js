// print count of each number in the given array
numArray=[10,20,30,40,20,30,50,60,70,20,30,10,40,50,60,10]

output = {}

// numArray.forEach(num=>{
//     if(num in output){
//         output[num] += 1
//     }else{
//         output[num] = 1
//     }
// })

// console.log(output);


numArray.forEach(num=>num in output?output[num] += 1: output[num] = 1)
console.log(output);