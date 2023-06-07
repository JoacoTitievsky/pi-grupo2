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

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.results);

        let characters = ""
        for (let index = 0; index < data.results.length; index++) {
            characters += `<article>
                                    <img src= ${data.results[index].image}  alt='' />
                                    <p>Name: ${data.results[index].name} </p>
                                    <p>Status: ${data.results[index].status}  </p>
                                    <a href="./detallepersonajes.html?id=${data.results[index].id}"> Ver mas </a>
                            </article>`
        }
        personajes.innerHTML= characters
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


