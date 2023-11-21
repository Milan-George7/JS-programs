//nested loop
// program to print given pattern

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=4;col++){
        
        str+=col+" " 
    }
    console.log(str);
}