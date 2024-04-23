// Inheritance in js 

// this class is user for everyone for login
class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

//  but this class is for teachers so students are not use this 
class teacher extends user {
    constructor(username,email,pass){
        super(username) //  user name is import for the user class
        this.email = email;
        this.pass = pass;
    }
    addcourse(){
        console.log(`new course add by ${this.username}`);
    }
}

const teacher1 =  new teacher("sourav","ram@gamil.com","123") //  we call the teacher class
teacher1.addcourse()
const student1 = new user("rahul") //  we call the main longin class
student1.logMe()

console.log(teacher1 === student1); //  false
console.log(teacher1 instanceof user); //  true
