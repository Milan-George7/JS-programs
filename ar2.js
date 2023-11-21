//answer the following
expenses = [23000,33000,12000,50000,45000,67000,25000,38000]
//find total expense
sum = 0
for(let num of expenses){
    sum+= num
}
console.log(`total expense is: ${sum}`);

//find min expense
minExpense = expenses[0]
for(let num of expenses){
    if(num<=minExpense){
        minExpense = num
    }
}
console.log(`minimun expense: ${minExpense}`);
//find max expense
maxExpense = expenses[0]
for(let num of expenses){
    if(num>=maxExpense){
        maxExpense = num
    }
}
console.log(`minimun expense: ${maxExpense}`);
