let endpoint_album = "https://api.allorigins.win/raw?url=https://developers.deezer.com/api/album" 
let endpoint_artista = "https://api.allorigins.win/raw?url=https://developers.deezer.com/api/artist"
let endpoint_tracks = "https://api.allorigins.win/raw?url=https://developers.deezer.com/api/track"


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

fetch

