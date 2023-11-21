// program to display "working day" for monday - friday otherwise its a "holiday"
const prompt = require('prompt-sync')({signint:true})
const day = prompt("enter any weekday (use small letters only): ")

switch(day){
    case "monday": console.log("working day");
    break
    case "tuesday": console.log("working day");
    break
    case "wednesday": console.log("working day");
    break
    case "thursday": console.log("working day");
    break
    case "friday": console.log("working day");
    break
    case "saturday": console.log("holiday");
    break
    case "sunday": console.log("holiday");
    break
    default: console.log("invalid day");
}

console.log("switch completed!!!");