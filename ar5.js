// program to print the following pattern
// input : [4,5,6]
// output: [11,10,9]

input = [4,5,6]
output = []
sum=0
for(let num of input){
    sum+=num
}
for(let num of input){
    output.push(sum-num)
}
console.log(`input: ${input}`);
console.log(`output: ${output}`);

