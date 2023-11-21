str = "milangeorge"
console.log(`substring of str is : ${str.substring(0,4)}`);
console.log(`is str starts with 'm' : ${str.startsWith('m')?'yes':'no'}`);
console.log(`is str ends with 'ge' : ${str.endsWith('ge')?'yes':'no'}`);
console.log(`str in UpperCase letters : ${str.toUpperCase()}`);
console.log(`str in LowerCase letters : ${str.toLowerCase()}`);

data="  JS String "
console.log(`character count of data: ${data.length}`);
console.log(data);
console.log(`data after removing unwanted space: ${data.trim().length}`);
console.log(`check letter 'i' includes in data: ${data.includes('i')?'yes':'no'}`);
console.log("all characters of str");
console.log(str.split(''));
console.log("all characters of data");
console.log(data.split(' '));