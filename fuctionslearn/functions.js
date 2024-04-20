// function Name(parameters)
function hello() {

    //fnction Scope
    console.log("hello Function");
}
hello //referances
//hello() //executions

function addtwono(a,b){
    console.log(a+b);
}
//addtwono(2,3) //(arguments)
//const add = addtwono(2,3) //(arguments)
//console.log("results",add);

// this is the right way to write functions
function number(number1,number2) {
   // let result = number1+number2
    //return result
    //after return keyword the fuction will stoped exucation
    // console.log("print this")
    return number1 + number2
}
const output = number(2,3)
//console.log("resule",output);


// ----------- different way to get (parameters) -----------

function loginmessage(usernaem = "sourav") //if add value in arguments (it will replaced) defaulet
{
    if(usernaem === undefined) //(!usernaem) it also same condition
    {
        console.log("Please enter Your name");
        return //if condition true this condition will executed and stoped
    }
        return `${usernaem} just logged in`
}

//console.log(loginmessage("sourav")); //working method
//console.log(loginmessage()); //undefined
//oginmessage("sourav") // this is not working

function calculatecardprice(...num1){ // ... it is called rest operstor(bundle the data and give us) stored in array
//function calculatecardprice(val1,val2,...num1){ // ... value wil stored in the array
    return num1
}
//console.log(calculatecardprice(3,3,5));

// ------ Object in functions -------
const userdate = {
    name:"sourav",
    age:21,
    location:"jaipur"
}
console.log(userdate);

function objecthandel(anyobject) {
    console.log(`name ${anyobject.name} age ${anyobject.age} location ${anyobject.location}`);
}
//objecthandel(userdate) //all ready object passed
// objecthandel({ // after object data update
//     name:"rahul",
//     location:"delhi",
//     age:32
// })
//console.log(objecthandel(userdate));

// --------- Array In functions --------
const userdatearray = [12,13,14,15]
function arrayreturnvalue(getarray){
    return getarray[1] //index and (getarray)
}
//console.log(arrayreturnvalue(userdatearray)); //peredefind array
//console.log(arrayreturnvalue([120,130,140])); //array definde in log
