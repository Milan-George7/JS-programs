// polymorphism
function add(...args)//here (...) is called rest operator by using this we can give infinite number of arguments
{
 console.log("Argument method");
 console.log(`total:${args.reduce((a,b)=>a+b)}`);
}

add(10,10,10)
add(20,50)