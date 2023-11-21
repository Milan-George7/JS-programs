//const- immutable variable with block scope
const classname = "march batch"
console.log(`class name : ${classname}`);



// let- mutable variable with block scope
i=10
console.log(`before loop, i=${i}`);
for(let i=1;i<=5;i++)
{
    console.log(`inside loop, i=${i}`);
}
console.log(`outside loop, i=${i}`);

