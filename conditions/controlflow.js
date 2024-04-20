// --------- Control Flow ----------

//  if statment 

if (true) {
    // console.log("run");
}
// < lessthan, > greater than, <= greater than and equal, >= smaler than or equal, == equal, != not equal, === type checked,!== n

// const tem = 51
// if (tem < 50) {
//     console.log(`tem is less than 50 : ${tem}`);
// }else{
//     console.log(`tem is not equla 50 : ${tem}`);
// }

const score = 200
const power1 = "fly"
const power2 = "run"
const power3 =  "hide"
// Block scope
// if(score > 300){
//     console.log(`Your power is ${power1}`);
// }else {
//     console.log(`Your power is ${power2}`);
// }

// implecet scop
// if (score > 100) console.log(`power ${power1}`);

//  ------ Nested condition -----------

// const blance = 1000
// if (blance < 600){
//     console.log("First condition is TRUE");
// }
// else if (blance === 1100) {
//     console.log("nested conditon is true");
// }else if(blance > 100){
//     console.log("second nested condition is true");
// } else console.log("no one condition is true");

//  -------- real life example ----------
const userlogin = true
const atmcard = false

// if(userlogin){
//     console.log("You are login Now");
//     if(atmcard) console.log("Now you can by courses");
//     else console.log("Pament detail fail");
// }else console.log("Please Login");

//  use of (and) (it means both conditions are true to print)
if(userlogin && atmcard) console.log("sucess full login");
else console.log("login failed");

//  use of (or ) (it means single codition is true to print)
if(userlogin || atmcard) console.log("sucess full login");
else console.log("login failed");