// use of class in js 
class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptpass(){
        return `${this.password}abc`
    }
    upperuname(){
        return `${this.username.toUpperCase()}`
    }
}
const user1 = new user("sourav","ram@gmail.com","123")
console.log(user1.password);
console.log(user1.encryptpass());
console.log(user1.username);
console.log(user1.upperuname());