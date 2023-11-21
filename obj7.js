weatherData=[
    // array of objects
    {district:'Thrissur',temp:32},
    {district:'Kottayam',temp:29},
    {district:'Palakkad',temp:34},
    {district:'Ernakulam',temp:33},
    {district:'Thrissur',temp:29},
    {district:'Kottayam',temp:30},
    {district:'Palakkad',temp:32},
    {district:'Ernakulam',temp:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}
output={}
// get each district details from weatherData
weatherData.forEach(data=>{
    // store district and currentTemp
    const district = data.district
    const currentTemp = data.temp
    // check district in output
    if(district in output){
        // if district in output
        // get oldTemp from district and compare it with currentTemp
        const oldTemp = output[district]
        if(currentTemp>oldTemp){
            output[district] = currentTemp
        }else{
            output[district] = oldTemp
        }
       
    }else{
        // if district is not in output
        // insert district and currentTemp as key-value pair in output
        output[district] = currentTemp //output={Thrissur:32}
    }
})
console.log(output);
