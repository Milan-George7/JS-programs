words = ["car","bike","jeep","bus"]

// is 'jeep' present in the array or not - some
console.log(`is 'jeep' present in the array or not: ${words.some(word=>word=="jeep")?'yes':'no' }`);
// using includes
console.log(`is 'jeep' present in the array or not: ${words.includes('jeep')?'yes':'no'}`);

// print index of jeep
index = words.indexOf('jeep')
console.log(`index of item 'jeep' : ${index} `);

// delete 'jeep' from the given array
words.splice(index,1)
console.log(words);

// replace "bike" with "jeep"
words.splice(words.indexOf('bike'),1,'jeep')
console.log(words);

