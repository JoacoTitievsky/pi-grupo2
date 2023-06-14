let qs = location.search;
let qsObj = new URLSearchParams(qs)
let id = qsObj.get('id');

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`;

let buscador = document.querySelector('#buscador');
let campoBuscar = document.querySelector('#textoBuscado');

buscador.addEventListener('submit', function (e){
e.preventDefault();

if(campoBuscar.value.length == 0) {
    alert('No puedes enviar el form vacio')
} else if(campoBuscar.value.length < 3){
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
        let a = document.querySelector(".tracklist")
        let contenedorCanciones = `<article>
       
        <p class="cancion"> Nombre de la Canción: ${canciones.title}</p>
        <img class="imagen" src="${canciones.album.cover}" alt="${canciones.title}">
        <p class="album"> Nombre del Album: ${canciones.album.title}</p>
        <p class="artista"> Nombre del Artista: ${canciones.artist.name}</p>
        </article>`
        a.innerHTML += contenedorCanciones
    })
    .catch(function (error) {
        console.log(error);
    });


