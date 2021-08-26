function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
}

function displayUsers(data){
    const ul = document.getElementById('users')
    for (const user of data){
        const li = document.createElement('li')
        li.innerText = `name: ${user.name} email: ${user.email}`
        ul.appendChild(li)
    }
}

/*
function displayUsers(data){
    const ul = document.getElementById('users')
    for (const user of data){
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}`
        ul.appendChild(li)
    }
}
*/
/*
function displayUsers(data){
    const ul = document.getElementById('users')
    for (const user of data){
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}, email: ${user.email}`
        ul.appendChild(li)
    }
}
*/
/*
function displayUsers(data){
    const ul = document.getElementById('users')
    for (const user of data){
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}`
        ul.appendChild(li)
    }
}
*/
/*
function displayUsers(data){
    const ul = document.getElementById('users')
    for (const user of data){
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}, email: ${user.email}`
        ul.appendChild(li)
    }
}
*/
/*
function displayUsers(data){
    const ul = document.getElementById('users')
    for (const user of data){
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}`
        ul.appendChild(li)
    }
}
*/
/*
function displayUsers(data){
    const ul = document.getElementById('users')
    for (const user of data){
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}, email: ${user.email}`
        ul.appendChild(li)
    }
}
*/
/*
function displayUsers(data){
    const ul = document.getElementById('users')
    for (const user of data){
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}`
        ul.appendChild(li)
    }
}
*/
/*
function displayUsers(data){
    const ul = document.getElementById('users')
    for (const user of data){
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}, email: ${user.email}`
        ul.appendChild(li)
    }
}
*/
/*
function displayUsers(data){
    const ul = document.getElementById('users')
    for (const user of data){
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}, email: ${user.email}`
        ul.appendChild(li)
    }
}
*/
/*
function displayUsers(data){
    const ul = document.getElementById('users')
    for (const user of data){
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}`
        ul.appendChild(li)
    }
}
*/