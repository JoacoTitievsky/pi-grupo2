// NO FUNCIONA
let qs = location.search;
let qsObj = new URLSearchParams(qs)
let id = qsObj.get('id');
console.log(id);

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`;

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

function formulario() {
    let termino = document.querySelectorAll('.form-result');
    if (termino.value.length < 3) {
        alert ("Debe ingresar al menos 3 caracteres")
        return false;
    }
    return true;
}

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let album = data
        let a = document.querySelector(".albumlist")
        let contenedorAlbum = `<article>
        <h3 class="album"> Nombre del Album: ${album.title}</h3>
        <img class="imagen" src="${album.tracks.album.cover}" alt="">
        <h4 class="artista"> Nombre del Artista: ${album.artist.name}</h4>
        <h4 class="genero">Género: ${album.genres.data[0].name}</h4>
        </article>`
        a.innerHTML += contenedorAlbum
    })
    .catch(function (error) {
        console.log(error);
    });







