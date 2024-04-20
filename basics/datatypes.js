// In this let's Talk about datatypes like integer, string, boolen

"use strict"; // this use to treat our code as new version

// alert("Hello")
 //this will worked as popup in browser on in the node.js document

//  // way to use the ;
//  console.log("Hello How"); console.log("are You")

//  // but it will reduce the readablity so write it in a normal way
//  console.log("Hello How")
//  console.log("are You")

 // Data Types

 let name = "sourav" //string
 let age = 21 // Int (Number 2 to power 53 also used bigint)
 let isLoggedIn = false //Boolean
 let rollno = null

 /* 
 Null vs Undefinde

 Null :- is a type of standalone value (it means it is empty) and null is a object

 Undefinde :- variable is declaride but value are not declaride


 // Symbol :- unique for that we talk about symbols
 // Object :- 

 // we used typeof to checked the datatype
 console.log(typeof age)
 console.log(typeof "Satish")

 // some output logics

 console.log(typeof undefined) //undefined
 console.log(typeof null) //object




 -----------------Data Types-------------------
 -- Primitive 
 -- 7 Types 
 --- String
 --- Number
 --- Boolean
 --- Null
 --- Undefined 
 --- Symbol
 --- BigInt

 -- Referance (Non Primitive)
 --- Array
 --- Objects
 --- Functions

*/

// JS is a dynamically typed language so there is no need to define the data type value see in Examples 

let score = 100
let scorefloat = 100.3
let scoretrue = true
let scorenull = null
let scoreundefine = undefined

let email  // Variavle declaried in this the value are undefefined 


//  symbol are use in React for defined the id's
// email = Symbol("1234")
// let emails = Symbol("1234")
// console.log(email === emails)

// BigInt use for the large amout of data
let bigdata = 12345667789978n


// -------- Array, Objects, Functions ---------
// Array
const nameOfHeros = ["Satish", "Manish", "Karan"]
//console.log(nameOfHeros);

// Objects
let nameOfObj = {
    name : "Sourav",
    age : 27,
    location : "jaipur"
}
//console.table([nameOfObj])

// Functions

const myfu = function() {
    console.log("hello world");
}

//myfu()


//----------------------- Stack Memory (Primitive Datatype), Heap (Non-primitive Datatype) --------------------
// Stack Memory :- In this memory data we get copy of data and we work with it 
// Heap :- In this we worked with orignal data 

//Example of stack memory 
let mydata = "sourav.in"  //data is copy so don't change there value
let mydata2 = mydata
mydata2 = "rahul.in"
console.table([mydata,mydata2])

// Example fo Heap

let myaccount1 = {
    name: "sourav",
    age: 18
}

let myaccount2 = myaccount1
console.table([myaccount1,myaccount2])

myaccount2.name = "ram"

myaccount2 = myaccount1
console.table([myaccount1,myaccount2])