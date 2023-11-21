for(row=5;row>=1;row--){
    rowcontent=""
    for(space=5;space>row;space--){
        rowcontent+=" "
       
    }
    for(col=1;col<=row;col++){
        rowcontent+=" *"
    }
    console.log(rowcontent);
}