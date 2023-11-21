// print numbers greater than 50

// nested array
numArray = [ [10,20],[23,50],[45,78],[89,18],[96,90] ]



for(let subArray of numArray){
    for(let num  of subArray){
        if(num>50){
            console.log(num);
        }
    }
}