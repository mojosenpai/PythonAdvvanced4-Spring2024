console.log("hello javascript!")
let x = 5
x = "bye!"

let s = 'this is a string'
let n = 7.35
let b = true

const pi = 3.14
// pi = 2

console.log(pi)

console.log(s, n, b)

console.log(x)

let firstName = "Ali"
let age = 20


console.log("Hello, my name is " + firstName + " and I'm " + age + " years old.")
console.log(`Hello, my name is ${firstName} and I'm ${age} years old.`)

age = 16
let guardian = true

if(age >= 18 || (age >= 15 && guardian == true)) {
    console.log("Here is your ticket!")
}
else {
    console.log("Sorry, I can't sell you the ticket.")
}

let command = "LOAN"

switch(command) {
    case "LOAN":
        console.log("here is your loan!")
        break
    case "DEPOSIT":
        console.log("Your balance decreased!")
        break
    case "INVEST":
        console.log("Here is your money!")
        break
    default:
        console.log("Command not found.")

}
// if(command == "LOAN") {
//     console.log("here is your loan!")
// }
// else if(command == "DEPOSIT") {
//     console.log("Your balance decreased!")
// }
// else if(command == "INVEST") {
//     console.log("Here is your money!")
// }
// else {
//     console.log("Command not found.")
// }

let counter = 0
while(counter < 10) {
    console.log("hello!")
    counter++
}

for(let i = 0; i < 10; i++) {
    console.log("hi!")
}

let arr = [2, 3, 5, 7]
//         0 |1 |2 |3
console.log(arr[2])
console.log(arr.indexOf(7))
console.log(arr.slice(1, 3))
arr.push(11)
console.log(arr)
let arr2 = ['a', 'b', 'c']
arr2[100] = 'd'
console.log(arr2)

let arr3 = ['a', 2, true, []]
console.log(arr3.length)

for(a of arr3) {
    console.log(`array element ${a}`)
}
