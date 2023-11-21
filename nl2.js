//nested loop
// program to print given pattern

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=4;col++){
        
        str+=row+" " 
    }
    console.log(str);
}