let fname = "sourav"
let lname = new String("chhimpa")
let fullname = fname + lname
// console.log(fullname);
// console.log(`My First name ${fname} and last name ${lname} and full name ${fullname}`);
// console.log(lname.__proto__);
// console.log(lname.indexOf('h')); // to find index number

let newstring = lname.substring(0,5) //  to devided a string 
// console.log(newstring);

let anotherstring = lname.slice(-3,5) //  in this slice function the starting character will removed by -number and and positive number are removed by next number
// console.log(anotherstring);

// console.log(anotherstring);

let replace =  "    ram    "
console.log(replace);
console.log(replace.trim()); //  it will used to remove extra space

const url = "https://sourav.in/20%/index.html"
console.log(url.replace('20%','-')); // it will used to rplace the string
console.log(url.includes("ram")); // it will use to find the data in string

// let lnamechange = lname.split(' ')
console.log(lname.split('h')) //  we remove any thing from the string for that we used the splic methods