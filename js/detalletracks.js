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
        let contenedorCanciones = `<article>
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

let favoritos = [];


let recuperoStorage = localStorage.getItem('favoritos');


if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage);
}

let fav = document.querySelector('.fav');


if (favoritos.includes(id)) {
    fav.innerText = 'Sacar de mi Playlist'
}

fav.addEventListener('click', function () {
    if (favoritos.includes(id)) {
        let indice = favoritos.indexOf(id)
        favoritos.splice(indice, 1);
        fav.innerText = 'Agregar a mi playlist'
    } else {
        favoritos.push(id);
        fav.innerText = 'Sacar de mi playlist'
    }

    let favoritosToString = JSON.stringify(favoritos);
    localStorage.setItem('favoritos', favoritosToString)
})
