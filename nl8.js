//nested loop
// program to print given pattern

//       * 
//    *     *
//  *         *
// * * * * * * *
for(row=1;row<=4;row++){//1t
    rowcontent=""
    for(col=1;col<=7;col++){//1t
       
      if(row==4 || row+col==5 || col-row==3){
       rowcontent+="*"
    }else{
        rowcontent+=" "
    }
       
    }
    console.log(rowcontent);
}

