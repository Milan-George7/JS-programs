//nested loop
// program to print given pattern

//    * 
//   * *
//  * * *
// * * * *

for(row=1;row<=5;row++){
    rowcontent=""
    for(space=5;space>row;space--){
        rowcontent+=" "
       
    }
    for(col=1;col<=row;col++){
        rowcontent+="* "
    }
    console.log(rowcontent);
}