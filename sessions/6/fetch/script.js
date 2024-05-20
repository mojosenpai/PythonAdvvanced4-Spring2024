let b1 = document.getElementById('getText')
let res1 = document.getElementById('getTextResult')

b1.addEventListener('click', e => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        let output = ''
        data.forEach(post => {
            output += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `
        });
        res1.innerHTML = output
    })
})

