//nested loop
// program to print given pattern

// 1
// 1 2
// 1 2 3
// 1 2 3 4


for(row=1;row<=4;row++){
    rowcontent=""
    for(col=1;col<=row;col++){
        rowcontent+=col+" "
    }
    console.log(rowcontent);
}