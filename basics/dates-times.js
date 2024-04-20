/*
let datess = new Date()
console.log(datess.toString()); //  to convert into string (DAY MONTH DATE YEAR HOUR:MINUTES:SECENDS TIME JONE)
console.log(datess.toDateString()); //  to convert into string (DAY MOTH DATE YEAR)
console.log(datess.toISOString()); //  to convert into string (YEAR-MONTH-DATE TIME)
console.log(datess.toJSON()); //  to convert into string (YEAR-MONTH-DATE TIME)
console.log(datess.toLocaleDateString()); //  to convert into string (DATE-MONTH-YEAR)
console.log(datess.toLocaleString()); //  to convert into string (DATE-MONTH-YEAR, HOUR:MIN:SEC AM PM)

console.log(typeof datess); //  type of date (OBJECT)

let newdate = new Date(2024, 2, 12) // months will start from 0 So 2 = March
console.log(newdate.toDateString());

let datehours = new Date(2024, 1, 29 , 23, 10, 15)
console.log(datehours.toLocaleString());

datehours = new Date("2024-02-29") // YYYY-MM-DD and MM-DD-YYYY
console.log((datehours.toLocaleString()));

// Timestamps in js
let timestamps = Date.now()
console.log(timestamps);
console.log(newdate.getTime());
console.log(Math.floor(Date.now()/1000));
*/


let newdate = new Date()
// console.log(newdate.toString());
// console.log(newdate.getDate());
// console.log(newdate.getFullYear());
// console.log(newdate.getHours());
// console.log(newdate.getDay());
// console.log(newdate.getMonth()+1);
console.log(`${newdate.getDate()} and ${newdate.getDay} And more`);

newdate.toLocaleString('default',{
    weekday:"long",
})
console.log(newdate);
