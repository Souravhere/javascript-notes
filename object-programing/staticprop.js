class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`user name is ${this.username}`);
    }

    // stop for access
    static creatid(){
        return `${this.username}123`
    }

}

const soruav = new user("souravv")
// console.log(soruav.creatid()); //  throw error

class teacher extends user{
    constructor(username, emali){
        super(username) // this will get the value for the user because the both calss will attached with extends
        this.email = emali;

    }
}

const rahulteacher = new teacher("Rahul","rahul@gmail.com")
console.log(rahulteacher.creatid());