// problems
// 1.check a mail is valid gmail id
mail = "xyz@gmail.com"
console.log(`check a mail is valid gmail id: ${mail.endsWith('@gmail.com')?'valid':'invalid'} `);

// 2.check a mobile is valid
mobile="9778759984"
console.log(`check a ${mobile} is valid: ${mobile.length==10?'valid':'invalid'} `);

// 3.display the word count of the given paragraph
paragraph="Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them."
console.log(`word count: ${paragraph.split(" ").length}`);

// 4.display all products has letter 's'
products = ["shrit","bag","shoe","sandal"]
products.forEach(item=>{
    if(item.includes('s')){
        console.log(item);
    }
})

// 5.display all vowels in 'hello'
word='HEllo'
vowels=['a','e','i','o','u','A','E','I','O','U']
vowels.forEach(vowel=>{
    if(word.includes(vowel)){
        console.log(vowel);
    }
})
