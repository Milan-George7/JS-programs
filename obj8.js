// array of objects
products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only - foreach
console.log("--------All products---------");
products.forEach(item=>console.log(item.pName))
//2. print all mobile details whose display is lcd - filter
console.log("--------mobile details whose display is lcd---------");
products.filter(item=>item.display==='lcd').forEach(item=>console.log(item.pName))
//3. print 5g mobile phone name - filter
console.log("-------- 5g mobile phone name---------");
products.filter(item=>item.band==='5g').forEach(item=>console.log(item.pName))
//4. sort mobile based on price - sort
console.log("-------- sort mobile based on price---------");
products.sort((a,b)=>a.price-b.price).forEach(item=>console.log(item.pName))
//5. print costly mobile - reduce
console.log("-------- print costly mobile---------");
console.log(`costly mobile: ${products.reduce((a,b)=>a.price>b.price?a:b).pName}`);
//6. print low cost mobile - reduce
console.log("-------- low cost mobile---------");
console.log(`cheapest mobile: ${products.reduce((a,b)=>a.price<b.price?a:b).pName}`);