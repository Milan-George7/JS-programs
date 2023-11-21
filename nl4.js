//nested loop
// program to print given pattern

// *
// * *
// * * *
// * * * *


for(row=1;row<=4;row++){
    rowcontent=""
    for(col=1;col<=row;col++){
        rowcontent+="* "
    }
    console.log(rowcontent);
}