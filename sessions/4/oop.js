class Cat {
    constructor(name, age, color) {
        this.name = name
        this.age = age
        this.color = color
    }
    introduce() {
        console.log(`Meow! My name is ${this.name} and I'm ${this.age} years old!`)
    }
}

let hana = new Cat('Hana', 2, 'orange')
let alex = new Cat('Alex', 5, 'black')
hana.introduce()
alex.introduce()

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`)
    }
}

class Dog extends Animal {
    introduce = () => console.log(`My name is ${this.name}, I'm ${this.age} years old and I'm a dog.`)
    bark = () => console.log('Woof woof!')
}
let max = new Dog('Max', 4)
max.introduce()
max.bark()

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    perimeter = () => (this.width + this.height) * 2
    area = () => this.width * this.height
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side)
    }
}

let s = new Square(5)
console.log(s.area())
console.log(s.perimeter())

let r = new Rectangle(5, 7)
console.log(r.area())
console.log(r.perimeter())