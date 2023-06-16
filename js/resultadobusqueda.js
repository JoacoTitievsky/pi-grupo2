let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let valor = queryStringObj.get("buscar")
console.log(valor)

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


let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=" + valor
fetch(url)
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        console.log(data);
        document.querySelector(".results").innerHTML +=
            `<h1 class="titulosearch">RESULTADOS DE BÚSQUEDA PARA: "${valor}"</h1>`

        if (data.data.length === 0) {
            document.querySelector(".resultscanciones").innerHTML = "No se encuentran coincidencias";
            document.querySelector(".resultsartista").innerHTML = "No se encuentran coincidencias";
            document.querySelector(".resultsalbum").innerHTML = "No se encuentran coincidencias";
        } else {
            for (let index = 0; index < 5; index++) {
                document.querySelector(`.resultscanciones`).innerHTML += `<a href="./detallecancion.html?id=${data.data[index].valor}">
                <h3 class="nombrecancionsearch"> ${data.data[index].title}</h3>
                <img class="imgcancionsearch" src=${data.data[index].album.cover_medium} alt=""/>
                
                </a>`;
                document.querySelector(`.resultsartista`).innerHTML += `<a href="./detallecantante.html?id=${data.data[index].valor}">
                <h3 class="nombreartistasearch"> ${data.data[index].artist.name}</h3>
                <img class="imgartsearch" src=${data.data[index].artist.picture_medium} alt=""/>
                
                </a>`;

                document.querySelector(`.resultsalbum`).innerHTML += `<a href="./detallealbum.html?id=${data.data[index].valor}">
                <h3 class="nombrealbumsearch"> ${data.data[index].album.title}</h3>
                <img class="imgcancionsearch" src=${data.data[index].album.cover_medium} alt=""/>

                </a>`;
            }
        }   
    })
    .catch(function (error) {
        console.log(error);
    });

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
