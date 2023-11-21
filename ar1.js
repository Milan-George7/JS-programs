//array

weekDays = ["monday","tuesday","wednesday","Thursday","Friday",]
console.log("weekDays :",weekDays);
console.log("type of weekDays :",typeof weekDays);

// to find total number of items
console.log(`Total items in weekDays : ${weekDays.length} `);

//to find individual items using array index
console.log(`first item in weekDays is : ${weekDays[0]} `);
console.log(`Second item in weekDays is : ${weekDays[1]} `);
console.log(`third item in weekDays is : ${weekDays[2]} `);
console.log(`fourth item in weekDays is : ${weekDays[3]} `);
console.log(`last item in weekDays is : ${weekDays[4]} `);


//to find last item if we dont know the last index number
console.log(`last item in weekDays is : ${weekDays[weekDays.length-1]} `);



// to display array item one by one
console.log("Display an array : item by item");
for(index=0;index<weekDays.length;index++){
    console.log(weekDays[index]);
}

//display array using for-of loop----
console.log("display array using for-of loop----");
for(let day of weekDays){
    console.log(day);
}



//display array using for-in loop----
console.log("display array using for-in loop----");
for(let index in weekDays){
    console.log(weekDays[index]);
}