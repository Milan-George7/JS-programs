//nested loop
// program to print given pattern

// ****
// *  *
// *  *
// ****

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=4;col++){
        if(row==1 || row==4 || col==1 || col==4 ){
            str+="*"
    }else{
        str+=" "
    }

}
console.log(str);
}