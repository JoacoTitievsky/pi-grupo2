let queryString = location.search
let queryStringObj = new URLSearchParams (queryString)
let valor = queryStringObj.get("buscar")
console.log(valor)

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

let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart" + valor
let resultscanciones = document.querySelector(".resultscanciones")

fetch(url)
.then(function(response){
    return response.json()
})

.then(function (data) {
    console.log(data);
    document.querySelector(".searchcancion").innerHTML += `<h3 class="titulosearch">
    Termino buscado : "${valor}"
</h3>
<h3 class="titulosearch">
    Resultados que coinciden:
</h3>` 

if (data.data.length == 0){
    let searchcancion = document.querySelector(".searchcancion")
    searchcancion.style.display = "none"
} else{
    for (let index = 0; index < data.data.length; index ++){
        document.querySelector(`.resultscanciones`).innerHTML += `<a href = "./detallecancion.html?id=${data.data[index].id}">
        <img class= "imgcancionsearch" src=${data.data[index].album.cover_medium} alt="${data.data[index].title}"/>
        <h3 class="nombreartistasearch">${data.data[index].artist.name}</h3>
        <h4 class="nombrealbumsearch">${data.data[index].title}</h4>
        </a>`
    }
    let noSearch = document.querySelector(".noSearch")
    noSearch.style.display = "none"
}
})
.catch(function(error){
    console.log(error);
});

let urlArtist = "https://api.allorigins.win/raw?url=https://api.deezer.com/artist/" + valor
fetch(urlArtist)
.then(function(response){
    return response.json()
})

.then(function (data) {
    console.log(data);
    document.querySelector(".searchArtista").innerHTML += `<h3 class="titulosearch">
    Termino buscado : "${valor}"
</h3>
<h3 class="titulosearch">
    Resultados que coinciden:
</h3>` 

if (data.data.length == 0){
    let searchartista = document.querySelector(".searchArtista")
    searchartista.style.display = "none"
} else{
    for (let index = 0; index < data.data.length; index ++){
        document.querySelector(`.resultsartistas`).innerHTML += `<a href = "./detallecantante.html?id=${data.data[index].id}">
        <img class= "imgcancionsearch" src=${data.data[index].picture_medium} alt="${data.data[i].name}"/>
        <h3 class="nombreartistasearch">${data.data[index].name}</h3>
        <h4 class="nombrealbumsearch"> Cantidad de albums: ${data.data[i].nb_tracks}</h4>
        </a>`
    }
    let noSearch = document.querySelector(".noSearch")
    noSearch.style.display = "none"
}
})
.catch(function(error){
    console.log(error);
});


let urlAlbum = "https://api.allorigins.win/raw?url=https://api.deezer.com/album/" + valor
fetch(urlAlbum)
.then(function(response){
    return response.json()
})

.then(function (data) {
    console.log(data);
    document.querySelector(".searchArtista").innerHTML += `<h3 class="titulosearch">
    Termino buscado : "${valor}"
</h3>
<h3 class="titulosearch">
    Resultados que coinciden:
</h3>` 

if (data.data.length == 0){
    let searchAlbum = document.querySelector(".searchAlbum")
    searchAlbum.style.display = "none"
} else{
    for (let index = 0; index < data.data.length; index ++){
        document.querySelector(`.resultsalbumes`).innerHTML += `<a href = "./detallealbum.html?id=${data.data[index].id}">
        <img class= "imgcancionsearch" src=${data.data[index].cover_medium} alt=""/>
        <h3 class="nombreartistasearch">${data.data[index].artist.name}</h3>
        <h4 class="nombrealbumsearch">${data.data[index].title}</h4>
        </a>`
    }
    let noSearch = document.querySelector(".noSearch")
    noSearch.style.display = "none"
}
})
.catch(function(error){
    console.log(error);
});
