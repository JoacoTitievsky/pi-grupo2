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
        let artistas = document.querySelector('.divpadreartistas')
        let objeto = data.data
        for (let index = 1; index < 10; index++) {
            let contenedorArtista = `<article>
            <img class="imagen" src="${objeto.album.cover}" alt="">
            <h4 class="artista"> Nombre del Artista: ${objeto.artist.name}</h4>
            </article>`
            artistas.innerHTML += contenedorArtista
        }

    })
    .catch(function (error) {
        console.log(error);
    });
