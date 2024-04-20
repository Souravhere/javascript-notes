//  Loop in javascript (itractions)

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("The condition is working");
//     }
//     console.log(element);

// }

// const a = 2
// for (let i = 1; i < 11; i++){
//    const number = a * i;
//    console.log(`${a} X ${i} = ${number}`);
// }


for(let i = 1; i <= 10; i++){
    // console.log(`value of i ${i}`);
    for(let j = 1; j<=10; j++){
        // console.log(`value of j ${j}`);
        // console.log(i + "*" + j + "=", i*j);
    }
}

let array = ["ironman", "spiderman", "captionamerica"]
// console.log(array.length);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
}


//  keywords (break, continue)

for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log("five detected");
        // break;
        continue;
    }
    console.log(i);
}