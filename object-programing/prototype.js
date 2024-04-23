// in this we create a method inside that we want  to create a method that will show the orignal length of o string without use of trim() 
let myname = "sourav    "
// console.log(myname.trim().length);

let myhero = ["ram","hanuman"]
let heropower = {
    ram:"cool",
    hanuman:"flying",
    getrampower: function(){
        console.log(`power of ram is ${this.ram}`);
    }
}

// with the help of the object well will inject the function in the prototype (means function is present in all locations) because it top level it will share the funciton to all
Object.prototype.sourav = function(){
    console.log("sourav is here");
}
// heropower.sourav()
// myhero.sourav()
// heropower.sourav()

//  with the prototye we will inject function in the array
Array.prototype.souravinarray = function(){
    console.log(`sourav is present in the arrary`);
}
// myhero.souravinarray() // function is present 
// heropower.souravinarray() //  funcition is not present

const teacher = {
    makevideo:true
}
const teachersupport = {
    isAvailable:false
}
const secondteacher = {
    makeassinement:"js question",
    fulltime:true,
    __proto__:teachersupport
}
// it is mordan versone of __proto__ (with this we will share the value of the one object to another object)
Object.setPrototypeOf(teachersupport,teacher)

let usernaem = "souravchhimpa    "
console.log(usernaem.length);
String.prototype.truelength = function(){
    console.log(this);
    console.log(`the true length is: ${this.trim().length}`);
}
usernaem.truelength()
myname.truelength()
"sourav".truelength()
"ram length".truelength()