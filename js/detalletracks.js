let qs = location.search;
let qsObj = new URLSearchParams(qs)
let id = qsObj.get('id');
let url = `https://api.allorigins.win/raw?url=https://developers.deezer.com/api/track` + id;


fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        let cancion = document.querySelector(".cancion")
        cancion.innerText = data.title;

        let album = document.querySelector(".album")
        album.innerText = data.album.title;

        let artista = document.querySelector(".artista")
        artista.innerText = data.artist.name;

        let imagen = document.querySelector(".imagen")
        imagen.src = data.album.cover;

    })
    .catch(function (error) {
        console.log(error);
    });