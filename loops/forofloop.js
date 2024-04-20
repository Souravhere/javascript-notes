// //  fro of loop 

// //["", "", ""]
// //[{},{},{}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     //console.log(num);
// }
// const arrstring = ["spiderman","ironman","hulk","loki","thor"]
// for (const num of arrstring) {
//     //console.log(num);
// }
// const singlestring = "sourav chhimpa"
// for (const num of singlestring) {
//     if(num === " "){
//        // console.log("Here is space");
//         continue;
//     }
//     //console.log(`output of sighle string is "${num}"`);
// }

// // ------ Maps ------------
// // in this we add unique values
// // All way in same order
// const newmap = new Map()
// newmap.set('In', "India")
// newmap.set('Pa', "Pakisthan")
// newmap.set('Fa', "France")
// //console.log(newmap);
// //console.log(newmap.get('In'));

// for (const [key, value] of newmap) {
//     //console.log(key, ':-', value);
// }


// ---- for in loop ----

const obj = {
    py: "python",
    js:"javascript",
    c:"c lang",
    html:"hypertext markup language"
}
for (const key in obj) {
    //console.log(`${key} shoutcut id for ${obj[key]}`);
}

const program = ["js","python","c","cpp"]
for (const key in program) {
    console.log(program[key]);
}