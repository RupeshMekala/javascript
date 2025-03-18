const score = 400;
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2)) 

const otherNumber = 123.84433
console.log(otherNumber.toPrecision(4)) // what does this do

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // what does this do and what does the paramerter do

 
// *****************************************************************

//******************************Maths*******************************

console.log(Math)

/*
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.min(3, -4, 5, 0))
console.log(Math.max(3, -4, 5, 0))
console.log(Math.max(3, -4, 5, 0))
*/

 /*
 const min = x
 cosnt max = y

 numbers between these two = Math.floor(Math.random()*(y-x+1)) + x
  */

let randomNumber = Math.random() * 6
console.log(Math.ceil(randomNumber))
