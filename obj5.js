// print first repeating character from the given pattern
pattern="ABABBCABC"

const charArray = pattern.split("")
// console.log(wordArray);

// create empty object
output = {}

// getting each character from array
for(let char of charArray){
    // check is character present in object
    if(char in output){
        console.log(`first repeating character: ${char}`);
        break
    // if character is not present add character
    }else{
        output[char]=1
    }
}