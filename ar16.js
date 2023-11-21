// [no,district,+v cases,death rate,cured rate,1st dose vaccine,2n dose vaccine]
covid_data = [
    [1,'ernakulam',34000,2000,23000,20000,2000],
    [2,'idukki',14000,3000,25000,30000,1000],
    [3,'thrissur',24000,4000,33000,24000,2500],
    [4,'pathanamthitta',20000,2000,45000,22000,1500],
    [5,'kozhikode',44000,5000,12000,21000,500],
    [6,'palakkad',12000,1000,20000,23000,3400],
    [7,'kottayam',27000,1500,27000,14000,1000],
    [8,'kollam',14000,2500,25000,18000,2700]
]

    // 1.district having highest positive cases - reduce
    const dangerzone = covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
    console.log(`district having highest positive cases: ${dangerzone[1]}`);
   
    // 2.district having highest first dose vaccine - reduce
    const safezone = covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)
    console.log(`district having highest first dose vaccine: ${safezone[1]}`);
   
    // 3.district having lowest death rate - reduce
    const greenzone = covid_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)
    console.log(`district having lowest death rate ${greenzone[1]}`);
   
    // 4.sort data with positive cases in descending order - sort
    covid_data.sort((d1,d2)=>d2[2]-d1[2]).forEach(item=>console.log(`district: ${item[1]} - +ve cases: ${item[2]}`))
   
    // 5.is there any district with +v cases > 15000 - some
    console.log(`is there any district with +v cases > 15000: ${covid_data.some(d=>d[2]>15000)?'yes':'no'}`);
    
    // 6.sort data with 1st dose vaccine - sort
    console.log("sort data with 1st dose vaccine");
    covid_data.sort((d1,d2)=>d1[5]-d2[5]).forEach(item=>console.log(`district: ${item[1]}   1st dose vaccine count: ${item[5]}`))

    // 7.print details of thrissur - find
    thrissur=covid_data.find(d=>d[1]=='thrissur')
    console.log(`District: ${thrissur[1]}
    positive cases: ${thrissur[2]}
    Death rate: ${thrissur[3]}
    Curred rate: ${thrissur[4]}
    1st dose vaccine: ${thrissur[5]}
    2nd dose vaccine: ${thrissur[6]}`);

    // 8.print total number of positive cases - reduce
    const totalcases = covid_data.map(d=>d[2]).reduce((s1,s2)=>s1+s2)
    console.log(`total number of positive cases: ${totalcases}`);

    // 9.print total number of cured cases - reduce
    const curedcases = covid_data.map(d=>d[4]).reduce((s1,s2)=>s1+s2)
    console.log(`total number of cured cases: ${curedcases}`);

    // 10.print cured cases in idukki
    idukki=covid_data.find(d=>d[1]=='idukki')
    console.log(`Cured cases in ${idukki[1]}: ${idukki[4]}`);
    

