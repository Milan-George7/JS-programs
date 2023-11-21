//nested loop
// program to print given pattern

// 1
// 2 2
// 3 3 3
// 4 4 4 4



for(row=1;row<=4;row++){
    rowcontent=""
    for(col=1;col<=row;col++){
        rowcontent+=row+" "
    }
    console.log(rowcontent);
}