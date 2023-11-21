var car ={
    name:"boleno",
    model:"hatch-back",
    manufacturer:"Maruti Suzuki",
    price:"13 lakh"
}

//display car name and its manufacturer
console.log(`Car name :${car.name }   Manufacturer :${car.manufacturer}`);

//check 'model' key is present then display its value
console.log('model' in  car?`Model:${car.model}`:"nothing to display");

//add 'varient' as automatic, manual
car.variant = ['automatic','manual']
console.log(car);
// insert hybrid as varient
car.variant.push('hybrid')
console.log(car);

//add color as red,white,blue,ash,black
car.color = ['red','white','blue','ash','black']
console.log(car);

// check whether if price is available in the object-car using hasOwnProperty method
console.log(car.hasOwnProperty('price') ? 'price is available':'not available');


// to display all keys in object using keys()
console.log(Object.keys(car));

// to display all values in object using values()
console.log(Object.values(car));

// inserting key-value pair using assign method
Object.assign(car,{rpm:'15k'})
console.log(car);