let qs = location.search;
let qsObj = new URLSearchParams(qs)
let id = qsObj.get('id');

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`;

let buscador = document.querySelector('#buscador');
let campoBuscar = document.querySelector('#textoBuscado');

buscador.addEventListener('submit', function (e) {
    e.preventDefault();

    if (campoBuscar.value.length == 0) {
        alert('No puedes enviar el form vacio')
    } else if (campoBuscar.value.length < 3) {
        alert('El termino buscado debe tener mas de 3 caracteres')
    } else {
        this.submit();
    }
});

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let canciones = data
        let a = document.querySelector(".generolist")
        let contenedorCanciones = `<article class="song">
        <h2 class="cancion"> Nombre de la Canción: ${canciones.title}</h2>
        <img class="imagen" src="${canciones.album.cover_medium}" alt="${canciones.title}">
        <h3 class="album"> Nombre del Album: ${canciones.album.title}</h3>
        <h4 class="artista"> Nombre del Artista: ${canciones.artist.name}</h4>
        </article>`
        a.innerHTML += contenedorCanciones
    })
    .catch(function (error) {
        console.log(error);
    });

let playlist = [];


let recuperoStorage = localStorage.getItem('playlist');


if (recuperoStorage != null) {
    playlist = JSON.parse(recuperoStorage);
}

let fav = document.querySelector('.fav');


if (playlist.includes(id)) {
    fav.innerText = 'Sacar de mi Playlist'
}

fav.addEventListener('click', function () {
    if (playlist.includes(id)) {
        let indice = playlist.indexOf(id)
        playlist.splice(indice, 1);
        fav.innerText = 'Agregar a mi playlist'
    } else {
        playlist.push(id);
        fav.innerText = 'Sacar de mi playlist'
    }

    let favoritosToString = JSON.stringify(playlist);
    localStorage.setItem('playlist', favoritosToString)
})

let botonOscuro = document.querySelector(".botonOscuro")
let body = document.querySelector("body")

botonOscuro.addEventListener('click', function (e) {
    if (botonOscuro.innerText == "Modo Claro") {
        body.style.background = 'white';
        this.innerText = 'Modo Oscuro';
    } else {
        body.style.background = '#000000e2';
        this.innerText = 'Modo Claro';
    }
})

