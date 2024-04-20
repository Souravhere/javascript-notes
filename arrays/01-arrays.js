const myarray = [1,3,4,5]
const newarray = ["ram", "rahul","satish","ramesh"]
const newwarray = new Array(1,2,3,5)
//console.log(myarray[2]); //to get index number
//console.table([myarray,newarray,newwarray]) //to print all arrays\
//console.log(`first array ${myarray} second array ${newarray} third array ${newwarray}`);

// ---- Array Functions() ----
//myarray.push(6 ,"ram") //to add new value
//console.log(myarray);

//myarray.pop() // no argument required
//console.log(myarray);

//myarray.unshift(9)
// it used to add values but it add value at stating point on array
//console.log(myarray); 

//myarray.shift() //it will used to remove the element form starting index
//console.log(myarray); 

//console.log(myarray.includes(3)); // check the element is present or not (true | false)
//console.log(myarray.indexOf(5)); // use to check the index ( element name )


const array = myarray.join() // it converts into string
//console.log(array);
//console.log(myarray);

// Slice and Splice

const maa = [1,2,3,4,5,6] 
//console.log(maa.slice(1,3)) // in the slice() the array cant change it is part if stack  (range not includes)
//console.log(maa);

const maa1 = [1,2,3,4,5]
//console.log(maa1.splice(1,3)); // in the splice() the arry are change there orginal vlaue from heap (range includes)
//console.log(maa1);


const hero = ["thor", "ironman","spiderman", "doctar strang"]
const dcheros = ["superman","flash","batman"]
//hero.push(dcheros)
//console.log(hero[3][1]); //it will combined two array but its not correct way
//const allhero = hero.concat(dcheros) //this will converted two array into one array 
//console.log(allhero[4]);

//const allhero = [...hero,...dcheros] //this will also converted two or more array in one array
//console.log(allhero);

const dataset = [1,2,3,[3,2,1],4,[5,6,7],7] //depth array 
const datasolveset = dataset.flat(Infinity) //with flat( depth size (infinity) ) we can short it
//console.log(datasolveset);

console.log(Array.isArray("sourav"))
console.log(Array.from("sourav")) // from() function converts a data into a array
console.log(Array.from({name: "sourav"})) // with we also used the objects

let ram = 100
let ram2 = 200
let ram3 = 300
console.log(Array.of(ram,ram2,ram3)) // with the help of of() we can change the variable into array