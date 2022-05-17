// Template Literals
    // Old Method
let word1 = "Enrico"
let word2 = "Second"

const oldFullName = word1 + ' ' + word2
console.log("Full Name: " + fullName)

let oldMultiLine = 'Hello \n World'                                     // We cannot print \n in console
document.getElementById('oldMultiLine').innerText = oldMultiLine
    // New Method
const newFullName = `${word1} ${word2}`
console.log("Full Name: " + fullName)

let newMultiLine = ` 
Hello
World
`


// Destructuring Objects
const personalInformation = {
    firstName : 'Enrico',
    lastName : 'Pasetto',
    country : 'Italy'
}
const {firstName : fn, lastName : ln} = personalInformation
console.log(`${fn} ${ln}`)


// Destructuring Arrays
let [first, second, third] = ['Enrico', 'Hello There', 'General Kenobi']
first = 'New Name'
console.log(`${first} ${second} ${third}`)


// Object Literal
function addressMaker(city, state){
    const newAddress = {city, state}

    console.log(newAddress)
}
addressMaker('Ospedaletto', 'Veneto')
// Ex
function addressMakerChallenge(address){
    const {city, state} = address
    const newAddress = {
        city,
        state,
        country : 'Italy'
    }
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}
addressMakerChallenge({city : 'Ospedaletto', state : 'Veneto'})


// For loop
// We can iterate trough strings with this for loop (strings, arrays, ...)
let incomes = [62000, 67000, 75000]
let total = 0

for(const income of incomes){
    total += income
}

console.log(total)

let fullName = "Enrico Pasetto"

for(const char of fullName){
    console.log(char)
}
// Ex
let incomesEx = [62000, 67000, 75000]
for(let income of incomes){
    // We cannot perform
    // income += 50000
    // we must reassign income to another variable and increment this one!
}
console.log(incomes)


// Spread Operator
let exampleArray = [1,2,3,4,5,6,7,8,9,10]
// Instances another array from exampleArray (by value and not by reference)
let exampleArray2 = [...exampleArray]

let objectExample1 = {
    firstName : "Enrico"
}

let objectExample2 = {
    ...objectExample1
}


// Rest Operator
function add(...nums){
    // This only prints the first argument (WITHOUT ... before, otherwise it prints every number)
    console.log(nums)
    // This prints all the arguments (old method)
    console.log(arguments)
}
add(4,5,6,7,8,9)


// Arrow Functions
function arrowAdd(...nums){
    // Old Method
    let total = nums.reduce(function (x, y){
        return x+y
    })
    // New Method
    total = nums.reduce((x, y) => x + y)
    console.log(total)
}
arrowAdd(4,5,6,7,8,9)


// Default Params
function defaultParamsAdd(numArray = []){
    let total = 0
    // If numArray is null, it throws an error, we must add a default value
    numArray.foreach((element) => {
        total += element
    })
    console.log(total)
}
defaultParamsAdd()


// includes()
let numArrayIncludes = [1,2,3,4,5,6]
// Previous method
console.log(numArrayIncludes.indexOf(5))
// New method
console.log(numArrayIncludes.includes(5))


// Let & Const
if(false){
    // Var can be seen by outside it's block scope so it's seen by the console.log but has not been declared and so it's null
    var example = 5
    // If we try to print a let outside its block scope it throws an exception
    let exampleLet = 5
}
console.log(example)
console.log(exampleLet)
// If an array is a const we can still push elements in it, same with objects


// Import & Export
export const data = [1,2,3]
// We can import data in other classes with the following code
import {data, data2} from this
console.log(data)


// padStart() && padEnd()
let example = 'Enrico'

console.log(example.padStart(12, 'A'))
console.log(example.padEnd(12, 'B'))


// Classes
class Animal{
    constructor(type, legs){
        this.type = type
        this.legs = legs
    }
    makeNoise(sound = "Loud Noise"){
        console.log(sound)
    }
    // It does not need to be called as a function
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`
    }
    // This works even with a non instanceated object
    static return10() {
        return 10
    }
}
class Cat extends Animal {
    constructor(type, legs, tail){
        super(type, legs)
        this.tail = tail
    }
    makeNoise(sound = "Meow"){
        console.log(sound)
    }
}
let cat = new Animal('cat', 4)
cat.legs = 3
cat.makeNoise("Meow")
console.log(cat)
console.log(cat.return10())
console.log(cat.metaData)


// Trailing Commas
function add(param1,){          // The comma does not show/throws exceptions
    const example = {
        name: 'Enrico',
    }
}


// Async & Await
// Old Method
const apiUrl = "ApiUrl"
function getTopUsers() {
    fetch(apiUrl).then((resp) => resp.json()).then((json) => {
        console.log(json[0])
    }).catch((error) => {
        console.log("Something Went Wrong")
    })
}
getTopUsers()
// With Async & Await
async function getTopUsers() {
    const response = await fetch(apiUrl)
    // This line is not executed until the upper one finished
    const json = await response.json()

    console.log(json[0])
}