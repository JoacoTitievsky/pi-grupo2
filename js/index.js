let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart"

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


let imgcancion = document.querySelector('.imgcancion')

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let canciones = document.querySelector('.divpadrecanc')
        let objeto = data.tracks.data
        console.log(objeto);
        for (let index = 0; index < 5; index++) {
            canciones.innerHTML += `<article><a href = "./detallecancion.html?id=${objeto[index].id}">
            <h2 class="nombrecancion">${objeto[index].album.title}</h2>
            <img class= "imgcancion" src=${objeto[index].album.cover_medium} alt="${objeto[index].title}"/> </a>
            <a href="./detallealbum.html"> <h3 class="nombrealbum">${objeto[index].album.title}</h3></a> 
            <a href="./detallecantante.html"><h4 class="nombreartista">${objeto[index].artist.name}</h4></a>
           
            
           </article>`
        }
    })

    .catch(function (error) {
        console.log("Error: " + error);
    })

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);


        let albumes = document.querySelector('.divpadredisc')
        let objeto = data.albums.data
        console.log(objeto);
        for (let index = 0; index < 5; index++) {
            albumes.innerHTML += `<article><a href = "./detallealbum.html?id=${objeto[index].id}">
            <img class= "imgcancion" src=${objeto[index].cover_medium} alt="${objeto[index].title}"/>
            <h3 class="nombrealbum">${objeto[index].title}</h3>
            </article></a>`
        }
    })

    .catch(function (error) {
        console.log("Error: " + error);
    })
// Artista
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);


        let artista = document.querySelector('.divpadreart')
        let objeto = data.artists.data
        console.log(objeto);
        for (let index = 0; index < 5; index++) {
            artista.innerHTML += `<article><a href = "./detallecantante.html?id=${objeto[index].id}">
            <img class= "imgartista" src=${objeto[index].picture_medium} alt="${objeto[index].title}"/>
            <h4 class="nombreartista">${objeto[index].name}</h4> 
            </article></a>`

        }
    })

    .catch(function (error) {
        console.log("Error: " + error);
    })


let botonOscuro = document.querySelector(".botonOscuro")
let body = document.querySelector("body")

botonOscuro.addEventListener('click', function (e) {
    if (botonOscuro.innerText == "Modo Claro") {
        body.style.background = 'white';
        this.innerText = 'Modo Oscuro';
    } else {
        body.style.background = '#000000e2';
        this.innerText = 'Modo Claro';
    }
})




