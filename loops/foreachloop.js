// // for each loop

// // normal function
// const coding = ["js", "python", "c", "cpp"]
// coding.forEach(function (items){
//    // console.log(items);
// })

// //use arrow function
// //coding.forEach( (val)=> {console.log(val);})

// function print(item){
//    // console.log(item);
// }
// coding.forEach(print)

// coding.forEach((data, index, arr)=> {
//     console.log(data,index, arr);
// } )


const mycoding = [
    {
        lname:"python",
        save:"py"
    },
    {
        lname:"javascript",
        save:"js"
    },
    {
        lname:"c lang",
        save:'c'
    }
]

mycoding.forEach((item)=> {
    // console.log(item.lname);
})


// const coding = ["js","python", "c", "cpp"]

// const vlaues= coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(vlaues);

// ---- Use of filter --------

const mynumbs = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynumbs.filter( (num) => num > 4)
// const newnums = mynumbs.filter( (num) => { return num > 4})

// - with foreach loop

// const newnumsfor = []
// mynumbs.forEach( (num) => {
//     if(num > 5){
//         newnumsfor.push(num)
//     }
// })

// console.log(newnumsfor);


// --- Use of filter -------

const mybookcollections = [
    {name: "Python lang", genre:"Basic", publish:1991, edition:2000},
    {name: "C lang", genre:"Complete", publish:1994, edition:2004},
    {name: "JS lang", genre:"Theory", publish:1993, edition:2006},
    {name: "Html lang", genre:"Syntax", publish:1997, edition:2007},
    {name: "Cpp lang", genre:"Code", publish:1996, edition:2008}
]
let userbooks = mybookcollections.filter((books) => books.genre === 'Complete')
userbooks = mybookcollections.filter((books) => books.publish < 1995)
// console.log(userbooks);

//  ------- Map ------
const mynums = [1,2,3,4,5,6,7,8,9]
// const newnumber = mynums.map((number) => number + 10)

//  in this 2 map are used 
const newnumber = mynums.map( (number) => number*10)
                        .map((number) => number+1) // in map we can apply the calculations
                        .filter( (number) => number >= 40) //  but in filter its all about the True or False
// console.log(newnumber);


//  ------ Reduce() methods -------
const reducemethod = [1,2,3]
// const resuletotal = reducemethod.reduce((acc, currvl)=> {
//     console.log(`acc ${acc} currval ${currvl}`);
//     return acc + currvl
// }, 0) //  starting value
const resuletotal = reducemethod.reduce((acc,curvl) => acc+curvl,0)
// console.log(resuletotal);


const shopcart = [
    {
        course:"JS course",
        price:2999
    },
    {
        course:"App develpment",
        price:2000
    },
    {
        course:"Wev course",
        price:3000
    }
]

const checkout = shopcart.reduce((acc,item)=>acc + item.price,0)
console.log(checkout);