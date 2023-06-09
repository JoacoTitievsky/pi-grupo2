let endpoint_album = "https://api.allorigins.win/raw?url=https://developers.deezer.com/api/album" 
let endpoint_artista = "https://api.allorigins.win/raw?url=https://developers.deezer.com/api/artist"
let endpoint_tracks = "https://api.allorigins.win/raw?url=https://developers.deezer.com/api/track"

let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart"

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

let topalbums = ""
let imgcancion= document.querySelector('.imgcancion')

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        // rellenarCanciones(data.tracks)
        // rellenarCanciones(data.albums)
        // rellenarCanciones(data.artists)
        // rellenarCanciones(data.playlists)
   
        
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

let album = document.querySelector('.album')

function rellenarCanciones(data) {
    console.log(data.data);
    for (let index = 0; index < data.data.length; index++) {
        album.innerHTML += `<a href = "./detallealbum.html?id=${data.data[index].id}">
        <img class= "imgcancion" src=${data.data[index].title} alt=""/>
        <h3 class="nombreartista">${data.data[index].artists}</h3>
        <h4 class="nombrealbum">${data.data[index].albums}</h4>
        </a>`
    }
}



