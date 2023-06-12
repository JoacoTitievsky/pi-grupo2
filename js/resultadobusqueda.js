let queryString = location.search
let queryStringObj = new URLSearchParams (queryString)
let valor = queryStringObj.get("buscar")
console.log(valor)

let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart" + id
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
        <img class= "imgcancion" src=${data.data[index].title} alt=""/>
        <h3 class="nombreartista">${data.data[index].artists}</h3>
        <h4 class="nombrealbum">${data.data[index].albums}</h4>
        </a>`
    }
    let noSearch = document.querySelector(".noSearch")
    noSearch.style.display = "none"
}
})
.catch(function(error){
    console.log(error);
});

let urlArtista = 
fetch(urlArtista)
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
    let searchartista = document.querySelector(".searchartista")
    searchartista.style.display = "none"
} else{
    for (let index = 0; index < data.data.length; index ++){
        document.querySelector(`.resultsartistas`).innerHTML += `<a href = "./detallecantante.html?id=${data.data[index].id}">
        <img class= "imgcancion" src=${data.data[index].title} alt=""/>
        <h3 class="nombreartista">${data.data[index].artists}</h3>
        <h4 class="nombrealbum">${data.data[index].albums}</h4>
        </a>`
    }
    let noSearch = document.querySelector(".noSearch")
    noSearch.style.display = "none"
}
})
.catch(function(error){
    console.log(error);
});


let urlAlbum = 
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
        <img class= "imgcancion" src=${data.data[index].title} alt=""/>
        <h3 class="nombreartista">${data.data[index].artists}</h3>
        <h4 class="nombrealbum">${data.data[index].albums}</h4>
        </a>`
    }
    let noSearch = document.querySelector(".noSearch")
    noSearch.style.display = "none"
}
})
.catch(function(error){
    console.log(error);
});

