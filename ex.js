// exeception handling
expr = "$10+23-20"
try{
    result=eval(expr)
    console.log(`result: ${result}`);
}catch(err){
    console.log("invalid expression");
}
finally{
    console.log("task completed");
}

