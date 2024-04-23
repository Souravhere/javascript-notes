console.log(Math.PI);
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

// we can also created our own const descripter = Object.getOwnPropertyDescriptor()

const mynewobj = {
    name: "Sourav Chhimpa",
    charge:2000,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(mynewobj,"name"));

// Object.defineProperty(mynewobj,"name",{
//     writable: false,
//     enumerable:false // we cant repate the value (block the loop)
// })
// console.log(Object.getOwnPropertyDescriptor(mynewobj,"name"));

for (const [key,value] of Object.entries(mynewobj)) {
    console.log(`${key} : ${value}`);    
}