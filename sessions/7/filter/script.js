let result = document.getElementById('result')
let filter = document.getElementById('filter')
let itemList = []

async function getData() {
    let { results } = await (await fetch('https://randomuser.me/api?results=50')).json()
    result.innerHTML = ''
    results.forEach(user => {
        let li = document.createElement('li')
        itemList.push(li)
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city} ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    }

    )
}

function filterData(searchTerm) {
    itemList.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            // TODO
        }
        else {
            // TODO
        }
    })
}

getData()

filter.addEventListener('input', e => filterData(e.target.value))
