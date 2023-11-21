//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

//1. display all product name - foreach
console.log("----------all products------------")
products.forEach(product=>console.log(product[1]))

//2. display product whose price < Rs.50 - filter
console.log('---------product whose price < Rs.50--------')
products.filter(item=>item[2]<50).forEach(product=>console.log(product[1]))

//3. print price of oreo - find
console.log('---------price of oreo--------')
console.log(`price of oreo : ${products.find(item=>item[1]=='oreo')[2]}`)


//4. print costly product name - reduce
console.log('---------costly product name--------');
console.log(`costly product is : ${products.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2)[1]}`);

//5. display out of stock product - filter
console.log('---------out of stock product--------');
products.filter(item=>item[3]==0).forEach(product=>console.log(product[1]))


//6. sort products based on stock in decsending order - sort
console.log('-------sort products based on stock in decsending order----------');
products.sort((a,b)=>b[3]-a[3]).forEach(product=>console.log(product[1]))


//7. print product having maximum available stock - reduce
console.log('---------product having maximum available stock--------');
console.log(`${products.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2)[1]}`);


//8. is there any product can be purchased by Rs. 10 - some
console.log('-----------is there any product can be purchased by Rs. 10------------');
console.log(`${products.some(item=>item[2]<=10)?'yes':'no'}`);


//9. Is there any product in the range of 10 to 30 - some
console.log('---------Is there any product in the range of 10 to 30--------');
console.log(`${products.some(item=>item[2]>=10 && item[2]<=30)?'yes':'no'}`);

//10. print all products in the range of 10 to 30 - filter
console.log('-------print all products in the range of 10 to 30--------');
products.filter(item=>item[2]>=10 && item[2]<=30).forEach(product=>console.log(product[1]))