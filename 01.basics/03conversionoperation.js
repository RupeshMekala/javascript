let score = "rupesh"

// console.log(typeof score); // score = 33
// console.log(typeof(score));

// let valueInNumber = Number(score) // score = "33"
// console.table([valueInNumber, typeof valueInNumber]);

// let valueInNumber = Number(score) // score = "33abc"
// console.log(typeof valueInNumber, valueInNumber);

/**
 Nan means not a number but it's type is a number
 */

// let valueInNumber = Number(score) // score = null
// console.log(typeof valueInNumber, valueInNumber);

// let valueInNumber = Number(score) // score = undefined
// console.log(typeof valueInNumber, valueInNumber);

// let valueInNumber = Number(score) // score = true
// console.log(typeof valueInNumber, valueInNumber);

// let valueInNumber = Number(score) // score = "string"
// console.log(typeof valueInNumber, valueInNumber);


/*
 notes
 "33" --> 33
 "33abc" --> NaN
 true --> 1, false --> 0
 */

let isLoggenIn = ""

// let booleanisLoggedIn = Boolean(isLoggenIn) // isLoggedIn = 1
// console.log(typeof booleanisLoggedIn, booleanisLoggedIn);

// let booleanisLoggedIn = Boolean(isLoggenIn) // isLoggedIn = ""
// console.log(typeof booleanisLoggedIn, booleanisLoggedIn);


// boolean
// 1 --> true, 0 --> false
// "" --> false, " " --> true, "string" --> true


// every basic datatype can be converted to string


// **************************************** OPERATONS ****************************************

let value = 3;
let negValue = -value;
// console.log(negValue)

// console.log(2**4) // 2^4
// console.log(2%2) // modulo opertaor

// "Hello " + "World" // what will this return?

// let a = "1" + 2 + 2 // what ?
// let b = 1 + 2 + "2" // what ? 
// console.log(a, typeof a)
// console.log(b, typeof b)

// console.log(+true) // what will it print ? and why?
// console.log(+"") //unary plus operator it converts into number

a = 1;
b = ++a;
console.log(a, b);

c = 1;
d = c++;
console.log(c, d);





