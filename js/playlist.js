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

let recuperoStorage = localStorage.getItem('playlist');

let playlist = JSON.parse(recuperoStorage)

let section = document.querySelector('#fav');

let cancionplaylist = '';

 
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

            cancionplaylist += `<article>
                                        <h2 class="titulosearch">Nombre de la canción: ${data.title}</h2>
                                        <img src=${data.album.cover_medium} alt=""> </article>`;

            section.innerHTML += cancionplaylist;
            
        })
        .catch(function(error) {
            console.log(error);
        });
        
    }
}