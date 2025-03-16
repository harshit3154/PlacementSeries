function sumNumber(a,b,c){
    return a+b+c;
}

function averageNumber(a,b,c){
    return Math.round((a+b+c)/3);
}

console.log(sumNumber(1,2,3));
console.log(sumNumber(8,9,29));
console.log(sumNumber(9,98,8));

console.log(averageNumber(4,3,4));

//arrow function.
const hello=()=>{
    console.log("Hey how are you? I a fine friend yakka");
}

hello();

