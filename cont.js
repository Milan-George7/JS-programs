// continue statement
for(i=1;i<=10;i++){
    if(i>5 && i<8){
        // console.log("skip, loop: i=",i);
        continue
    }
    console.log("inside loop:", i);
}
console.log("outside loop");