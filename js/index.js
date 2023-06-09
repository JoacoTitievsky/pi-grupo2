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
        console.log(data.results);

        rellenarCanciones(data.tracks)
        rellenarCanciones(data.albums)
        rellenarCanciones(data.artists)
        rellenarCanciones(data.playlists)



        let album = ""
        for (let index = 0; index < data.results.length; index++) {
            album += `<a href = "./detallealbum.html?id=${data.results[index].id}">
            <img class= "imgcancion" src=${data.results[index]} alt=""/>
            <h3 class="nombreartista">${data.results[index].title}</h3>
            <h4 class="nombrealbum">${data.results[index].artist.name}</h4>
            </a>`
        }
        
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


function rellenarCanciones(data) {
    
}
function rellenarCanciones(data) {
    
}
function rellenarCanciones(data) {
    
}
function rellenarCanciones(data) {
    
}


