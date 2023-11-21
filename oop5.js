// prototype inheritance

const baleno = {
    manufacturer : "Suzuki",
    prize : "15 Lakhs",
    varients : ["Manual","Automatic"]
}

const glanza = {
    manufacturer : "Toyota",
    prize : "15 Lakhs",
}

// accessing varient key of baleno using prototype inheritance
glanza.__proto__ = baleno
console.log(`varients: ${glanza.varients}`);