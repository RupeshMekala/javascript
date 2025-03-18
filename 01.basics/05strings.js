const name = "Rupesh"

const repoCount = 30

// console.log(name + " Value:" + repoCount) // syntax not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
// string interpolation, placeholders are created for variables inside string (``)

const gameName = new String('rupesh')

console.log(gameName[3]);
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.indexOf('e'))
console.log(gameName.charAt(5))

console.log(gameName.substring(0, 4)) //can -ve index be passed?
console.log(gameName.slice(-5, -1))


const newName = "    Rupesh    "
console.log(newName)
console.log(newName.trim())

const url = "https://www.google.com/hitesh%20ch-oud-ary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

console.log(url.split('-'))
