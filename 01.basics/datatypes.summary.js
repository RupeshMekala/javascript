// js is dynamically typed language, as the type of variable is not needed to be declared
// it is automatically assigned at the time of execution

// primitive datatypes --> single value

// 7 types - Number, string, Boolean, null, undefined, Symbol, bigInt
let num = 23
let letter = "23"
let isNum = true
let temperature = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id == anotherId)

const bigNumber = 32798238823073288023923923323n
console.log(typeof bigNumber);


// reference(non-primitive) --> can hold collection of data

// arrays, objects, functions

// const heros = ["thor", "hulk", "ironman"]

// let myObject = {
//     name : "Rupesh",
//     age : 20,
//     mail : "rupesh.dev@gmail.com"
// }

// const myFunction = function(){
//     console.log("Hello world!")
// }


// console.log(typeof(myFunction))

// what is the return type of all the primitive and reference datatypes?


// ******************************************************************************************

// Stack(used for primitive datatypes) //Heap(used for reference datatypes)
// when stack memory is used, a copy of the original one is sent rather than original itself

let nameOne = "Rupesh"
let nameTwo = nameOne
nameTwo = "Virat Kohli"
console.table([nameOne, nameTwo]) //what hapens?

// when heap memory is used, the reference value is sent(means the original value)

let userOne = {
    name : "Rupesh",
    age : 20,
    mail : "rupesh@anotherId.com",
}

let userTwo = userOne

userTwo.mail = "rupesh@dev.com"

console.table([userOne.mail, userTwo.mail]) // what happens and why ?

