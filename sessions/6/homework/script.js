let p = document.getElementById('paragraph')
let b = document.getElementById('button')

let isShown = true

b.addEventListener('click', e => {
    if(isShown) {
        p.hidden = true
        b.innerText = 'Show'
    }
    else {
        p.hidden = false
        b.innerText = 'Hide'
    }
    isShown = !isShown
})