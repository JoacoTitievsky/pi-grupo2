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


let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=" + valor
fetch(url)
.then(function(response){
    return response.json()
})

.then(function (data) {
    console.log(data);
    document.querySelector(".results").innerHTML += `<h3 class="titulosearch">
    Termino buscado : "${valor}"
</h3>
<h3 class="titulosearch">
    Resultados que coinciden:
</h3>` 

if (data.data.length === 0) {
    document.querySelector(".resultscanciones").innerHTML = "No se encuentran coincidencias";
  } else {
    for (let index = 0; index < 5; index++) {
    document.querySelector(`.resultscanciones`).innerHTML += `<a href="./detallealbum.html?id=${data.data[index].id}">
    <img class="imgcancionsearch" src=${data.data[index].cover_medium} alt=""/>
    <h3 class="nombreartistasearch">Nombre Artista: ${data.data[index].artist.name}</h3>
    <h4 class="nombrealbumsearch">Nombre Álbum: ${data.data[index].album.title}</h4>
    <h4 class="nombrecancionsearch">Nombre Canción: ${data.data[index].title}</h4>
    </a>`;
    }
  }
})
.catch(function(error){
    console.log(error);
});
