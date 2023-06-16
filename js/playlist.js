let boton = document.querySelector(".btn-escuchar");

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

/* boton.addEventListener('click', function(){
    alert('Seras redirigido a escuchar tu cancion favorita')
}); */


/* Recupero el storage */
let recuperoStorage = localStorage.getItem('playlist');

/* transformar el json (string) en obj o un array */
let playlist = JSON.parse(recuperoStorage)

/* Recuperar el elemento del DOM */
let section = document.querySelector('#fav');

/* Crear personajesplaylist string vacio para luego ser completado con el fetch */
let cancionplaylist = '';

/* Preguntar: playlist es null O su longitus es igual a 0
TRUE: dar un mensaje en la section diciendo que no hay datos en playlist
FALSE: Hacer un FOR que recorra playlist y haga un fetch por cada elemento del array de playlist*/
    /* No hay playlist */
 
if (playlist == null || playlist.length == 0) {
    section.innerHTML = '<p class="titulosearch">No hay canciones en tu playlist</p>'
} else {

    for (let index = 0; index < playlist.length; index++) {

        let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${playlist[index]}`;

        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            cancionplaylist += `<article >
                                        <h2 class="">Nombre de la canción: ${data.title}</h2>
                                        <img src=${data.album.cover_medium} alt=""> </article>`;

            section.innerHTML += cancionplaylist;
            
        })
        .catch(function(error) {
            console.log(error);
        });
        
    }
}