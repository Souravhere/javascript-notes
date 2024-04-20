const user = {
    name:"sourav",
    price:999,

    welcomemessage: function () {
        console.log(`${this.name} , welcome to site`);
        console.log(this);
    }

}

//user.welcomemessage()
//user.name = "ram"
//user.welcomemessage()

//console.log(this); // with this keyword we can checked the current enviroment (output: {})

// -------- Arrow fuction ----------


// function thiscall(){
//     let unaem = "sourav"
//     console.log(this); //
//     console.log(this.uname); // output: undefined
// }
// thiscall()

//  arrow function syntax

const arrowfunction = () => {
    console.log("hello in arrow function");
    console.log(this);
}
//arrowfunction()

// basic syntax of arrow functions 

// const addtwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addtwo(2,3))

//inplecent return ( it means remove the {} )
const addtwo = (no1,no2) => no1+no2
const addtwo2 = (no1,no2) => {return no1+no2} //but with that we need to write return keyword
console.log(addtwo(2,4));
console.log(addtwo2(4,4));

const objectreturn = () => ({name:"sourav",age:18}) // object in arrown fuctions
console.log(objectreturn());