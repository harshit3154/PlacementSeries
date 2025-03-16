// let a=prompt("Hey do you want to save?")
// console.log(typeof(a)) is string

/*
    type conversion
    null number string 
*/
let a="23";
a=Number.parseInt(a);
console.log(a)

/* 
    basic for loop
    for in loop
    do while
    while
*/

for(let i=0;i<5;i++){
    console.log(i);
}

for(let i=0;i<7;i++){
    for(let y=0;y<i;y++){
        process.stdout.write(" * ");
    }
    console.log()
}

let obj={
    harry : 90,
    harhit : 10000,
    raja : 3009,
    prahlad : 689898,
    vivek : 7989898
}


// for in loop.
for(let a in obj){
    //process.stdout.write(a);
    console.log(a+" ---> "+obj[a]);
}

/* for of loop
    iterate through each value of loop
    */
for(let a of "harshit kumar"){
    console.log(a);
}