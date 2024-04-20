// -------- Truthy -------------

// const useremail = "sourav@google.com"
// const useremail = []
// if (useremail) console.log("email added sucessfuly");
// else console.log("email not found");

//  Falsy value
// ---->  false, 0, -0, BigInt 0n, "", null, undefined, NaN <-----

//  Truthy value
//  -------> "0", 'false', " ", [], {}, function(){}

//  to check the array id empty or not
const array = []
if(array.length  === 0)console.log("array is empty");
else console.log("array is not empty");

//  to check the object is empty or not
const obj = {}
if(Object.keys(obj).length === 0) console.log("Object is empty");
else console.log("Object is not empty");


//  Nullish Coalescing Operator (??) null , undefined 
//  used in database if the server give data into null, undefined for that we used the Nullish operator
//  to add flage values

let val;
val = 5 ?? 10
console.log(val);

val = null ?? 10 // print 10 ( used in database call)
console.log(val);

val  = undefined ?? 15 //  print 15 
console.log(val);

val = null ?? 10 ?? 20 //  print 10 
console.log(val); 

//  Terniary Operator ( it is use to checked the conditions )
// condition ? true : false

const price = 100
price >= 80 ? console.log("less than 80") : console.log("more than 80");