const blance = new Number(100)

// console.log(blance.toString()); // in this we converted our number into string (we also use the string functions on it )

// console.log(blance.toFixed(1)); // it is basicly use to in ecomers website (it just like real value with .00)

const pointnum =  162.44546
// console.log(pointnum.toPrecision(3)); //  Basicaly it converted points value to normal value (add value count to change value)

const price = 10000000
// console.log(price.toLocaleString()); //  add comma per hunderds 1,000,000
// console.log(price.toLocaleString('en-IN')); //  to add 'en-IN' we changed in into indian 10,00,000


/* -------------- Maths --------------------

console.log(Math);
console.log(Math.abs(-4)); // in this the negative number is converted into positive
console.log(Math.round(4.5)); // To convert point number into simple ( .5 than show next number, .1 show same number)
console.log(Math.ceil(44.5)); // if more than number than show next number
console.log(Math.floor(44.7)); // it will show the same value and remove point 
*/


console.log(Math.min(1,2,3,4,5,6)); // to show the min value 
console.log(Math.max(1,2,3,4,5,6)); // to show the max value

console.log(Math.random()); // it will all show value between 0 - 1
console.log(Math.floor(Math.random()*10) +1); // it will show the value between the 1 to 10

const min = 1000
const max = 2000
console.log(Math.floor(Math.random()*(max-min +1))+min); 
// in this we first use floor function for remove the point value (float value) after that use random fuction for get ramdome value after that we multiply our value with given limatation after +1 (to get atlest one not zero) after we add our +min to get the size of number according to the min value