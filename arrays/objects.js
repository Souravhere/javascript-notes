 //  Singleton
Object.create


 // Object Literals
const mysy = Symbol("key1")

 const user = {
    name: "Sourav",
    mysy: "mykey one", // not valied way to use symbol
   //  [mysy]: "mykey one", // valied way use [ ]
    age: 21,
    male: true,
    skills: ["html","css"]
 }
// console.log(user.name); // simple method
// console.log(user["name"]); // Good method to use 
// console.log(user["mysy"]);

// console.log(user[mysy]); // way to print symbol

// Object.freeze(age) // used to freeze the value (key data are not changed)
user.age = 18 //  To change the key data
// console.log(user["age"]); 


// console.log(user);

user.greeting = function() {
    console.log("lol");
}
// console.log(user.greeting());
// console.log(user.greeting);
user.greeting2 = function() {
    console.log(`hello my name is ${this.name}`);
}
// console.log(user.greeting2());



//  -------- Lecture 2 ---------

const insta = new Object() // it is a singleton object
const face = {} //  it is not a singleton object


insta.id = "sourav-2" 
insta.name = "Sourav" 
insta.age = 18 

//console.log(insta);

// nested objects
const linkedin = {
    email: "sourav@gmail.com",
    fullname: {
        firstname:"Sourav",
        lastname:"Chhimpa"
    },
    aga: 21,
    skills:{
        softskills: {
            speaking: "good"
        },
        techskills:{
            devleopment: true
        }
    }
}
// console.log(linkedin.skills.softskills.speaking); // access

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const add = {obj1,obj2} // create new array to add two array ( not valid method)
const add2 = Object.assign({},obj1,obj2) //  valid way 

const add3 = {...obj1,...obj2} // top valid way
// console.log(add3);

// array of objects
const newusers = [
    {
        id:1,
        uname:"sourav"
    },
    {
        id:1,
        uname:"sourav"
    },
    {
        id:1,
        uname:"sourav"
    },
    {
        id:1,
        uname:"sourav"
    }
]

// console.log(newusers[1].id); // access the array objects

const facebook = {
    name:"Rahul",
    age:21,
    location:"Jaipur"
}
//console.log(Object.keys(facebook)); // it will give all the key
//console.log(Object.values(facebook)); //  it will give all the values
//console.log(Object.entries(facebook)); // it will convert every key value into a array
//console.log(facebook.hasOwnProperty('location')); // checked key is present or not in object (true | false)


const course = {
    cname:"WevDev",
    price:999,
    teacher:"sourav"
}

const {cname} = course //simple way to access the key
console.log(cname); // to print

const {cname: coursename} = course //to change the key name
console.log(coursename); // to print
/*
{
    // this syntax is JSON (it look like  object but without name)
    // JSON => JavaScript Object Notation
     
    "name":"sourav",
    "age":21,
    "location":"jaipur"
}

// this syntax is also JSON (but in the array formate)

[
    {},
    {},
    {}
]

*/