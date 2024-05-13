let header = document.getElementsByTagName('h1')
let uniqueHeader = document.getElementById('myHeader')
let elements = document.getElementsByClassName('cls')
let query1 = document.querySelector('p.cls')

uniqueHeader.innerText = 'Modified by Javascript!'
query1.style.backgroundColor = 'blue'

// for(let i = 0; i < header.length; i++) {
//     header[i].style.backgroundColor = 'yellow'
// }

// for(e of header) {
//     e.style.backgroundColor = 'black'
// }

Array.from(header).forEach(element => {
    element.style.backgroundColor = 'green'
});


console.log(header)
console.log(uniqueHeader)
console.log(elements)
console.log(query1)

let target = document.getElementById('target')
let visible = true

let alertButton = document.getElementById('alertButton')
alertButton.addEventListener('click', e => {
    visible = !visible

    if(visible) {
        target.hidden = false
    }
    else {
        target.hidden = true
    }
    
}
)