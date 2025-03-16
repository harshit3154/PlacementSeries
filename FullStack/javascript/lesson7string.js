/*
    string is a collection of character
    string is immutable in java script.
    */

let name="harry"
let fname='Mr Ajay kumar Choudhary'
console.log(name);
console.log(fname);
console.log(name.length)
console.log(fname.length)

console.log(name[0])

/*  
    tempelate literal
    */

let boy1='harshit'
let boy2='golu'
process.stdout.write(boy1);
process.stdout.write(boy2);

//string interpolation uses backtics insted of quote to define literals.
process.stdout.write(`\n\n\t\t${boy1} is a friend of ${boy2}`)


// Escape sequence character

let fruit ='Ba\rnana\'3'
console.log()
console.log(fruit)

let h="harshit"
console.log(h)
for(let a of h){
    process.stdout.write(a);
}

console.log()

console.log(h.toUpperCase())

console.log(h.toLowerCase())

// slicing the string
console.log(h.slice(2,4))   //rs
console.log(h.slice(2,))    //rshit

console.log(h.replace('har','peb'))

let ab='harshit'
let ba='kumaar'
console.log(ab.concat(ba))

let friend='   Menna'
console.log(friend)
console.log(friend.trim())

let fr="shivika"

for( let a of fr){
    console.log(a);
}

let ac=""
for(let a of fr){
    ac+=a;
}

console.log(ac)

// str.include(word) return true if the word is there in the string.

let str='harshit is a good boy  and he like surfing'
let goal='harshit'
console.log(`The word ${goal} ${str.includes(goal)?' is ':' is not '} there in the string ${str}`)

// startWith() and endWith()
console.log(`The string ${str} ${str.startsWith(goal)?'starts':'donot start'} with ${goal}`)

let str1='Please give me thousand ruppes.'
console.log(str1.slice('Please give me'.length))

let str3='deepika'
str3[0]='R' // doesnot chang because string is immutable.
console.log(str3)