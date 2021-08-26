function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
loadAlbums()

function displayAlbums(albums){
    console.log(albums)
    const albumsContainer = document.getElementById('albums')
    for (const album of albums){
        const p = document.createElement('p')
        p.innerText = album.title;
        albumsContainer.appendChild(p)
    }
}

