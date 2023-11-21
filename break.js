// break and continue statement

//break statement : exit from loop forcefully

for(i=1;i<=10;i++){
    if(i>5){
        console.log("inside break");
        break
    }
    console.log("inside loop:", i);
}
console.log("outside loop");