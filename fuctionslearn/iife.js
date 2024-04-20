// Immediately Invoked Function Expressions (IIKE)

//syntax
//we used the iife to proctect from the global scope pollutions
(function ram(){
    // this is called named IIFE
    console.log("db connected");
})();
// use ; to stop the process

//(function defination)(exugation call)

// in arrow function
((n)=>{
    // simple IIFE
    console.log(n+1);
} )(4);

((name)=>{
    console.log(name+" chhimpa");
} )('sourav');
