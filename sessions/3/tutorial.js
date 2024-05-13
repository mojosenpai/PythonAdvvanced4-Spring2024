function power(a, b) {
    if(b == 0) {
        return 1
    }
    else {
        return a * power(a, b - 1)
    }
}

function isEven(n) {
    if(n % 2 == 0) {
        console.log('The number is even.')
    }
    else {
        console.log("The number is odd.")
    }
}

function introduce(name, age) {
    return `My name is ${name} and I'm ${age} years old.`
}

console.log(introduce('Ali', 25))

function add(a = 0, b = 0) {
    return a + b
}

console.log(add(3, 5))
console.log(add(3))

let subtract = (a, b) => a - b
console.log(subtract(5, 3))

let isOdd = n => {
    if(n % 2 != 0) {
        console.log('The number is odd.')
    }
    else {
        console.log('The number is even.')
    }
}

isOdd(18)
isOdd(23)

function executeTwice(f, n) {
    f(n)
    f(n)
}

executeTwice(a => console.log(`the input is ${a}`), 5)

let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34]

arr.forEach (n => console.log(n % 3))

let arrMultThree = arr.map(n => n * 3)
console.log(arrMultThree)

let grades = [50, 90, 100, 97, 10, 83, 78, 63, 92]

result = []
grades.forEach(n => {
    if(n < 60 || n >= 95) {
        result.push(n)
    }
})
console.log(result)

let result2 = grades.filter(n => n < 60 || n >= 95)
console.log(result2)

let me = {
    firstName: "Mohammad Javad",
    lastName: "Hosseinpour",
    age: 25,
    address: {
        country: "Iran",
        city: "Tehran"
    },
    courses: ["Flask", "Client Advanced", "React"]
}

console.log(me.age)
console.log(me.address.city)