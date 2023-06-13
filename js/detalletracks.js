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
        let canciones = data.tracks
        let a = document.querySelector(".tracklist")

        let queryString = location.search;
        let queryStringObj = new URLSearchParams(queryString);
        let i = queryStringObj.get('id') - 1;

        let character = `<article>
        <img src= ${objeto[index].image} alt='' />
        <p>ID = ${objeto[index].id}</p><p>Name: ${personajes[i].name}</p>
        </article>`
        a.innerHTML = character;

        let nombre = personajes[i].name
        document.querySelector("h1").innerText = `Detalle de ${personajes[i].name}`
        h1.innerHTML += nombre
    })
    .catch(function (error) {
        console.log(error);
    });

    // FALTA TERMINAR