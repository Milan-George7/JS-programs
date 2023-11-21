// print count of each word in sentence
// get output = { Good: 1, morning: 1, all: 2, welcome: 1 }

sentence = "Good morning all welcome all"

// 1. split sentence into array of words
const wordArray = sentence.split(" ")
// console.log(wordArray);


// create empty object output
output = {}

// get each word from array and check that word is in object
wordArray.forEach(word=>{
    // if word is in the object
    if(word in output){
        // update value of the word by 1
        output[word]+=1
    // if word is not on the object
    }else{
        // insert word as key and its value as 1 ;{good:1}
        output[word] = 1
    }
})


console.log(output);