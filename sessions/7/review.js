let x = 5
x = 'hello'

let predicate1 = 5 > 6
let predicate2 = 'hello'.length == '12345'.length

if(predicate1 && predicate2) {
    console.error("IMPOSSIBLE!")
}
else if(predicate1 || predicate2) {
    console.log('expected')
}
else {
    console.warn('not the expected behavior')
}

let arr = [2, 3, 5, 7]
arr.forEach(x => {
    console.log(`${x} is a prime number`)
})

let arr2 = arr.map(x => x + 7)
console.log(arr2)

let arr3 = arr.filter(x => x % 2 == 0)
console.log(arr3)