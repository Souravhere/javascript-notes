//console.log(`a = ${a} b= ${b} c=${c}`);

{} //this is called scope (in if/else, fuction)
 
let a = 200 //it is a global scope
const b = 30 //it is also global scope
var c = 300
// in side the {} it is called block scope 
if (true){ 
    let a = 10 //a value inside the condition is 10 and outer is 200
    const b = 20
    var c = 30
    //console.log("inner :",a);  //output: 10
}
//console.log(a);//output: 200
//console.log(b); 
//console.log(c); //var is a global scope



//--------------- Scope level (nested scope) Hostine -----------------------

// Nested scope

function one(){ //scope start
    const username= "sourav"

    function two() { //scope start
        const website = "sourav.blogspot.com"
        console.log(username);
        //scope end
    }
    //console.log(username);
    two()
    //scope end
}
//console.log(one());
//console.log(two());
one()

// this is called expresions (it holds josn)
const twoadd = function(value){
    return value + 2
}
let twwo = twoadd(2) //in this functions it all ways call in bottom (because stored in variable )
console.log(twwo);