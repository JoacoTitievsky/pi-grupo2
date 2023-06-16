let qs = location.search;
let qsObj = new URLSearchParams(qs)
let id = qsObj.get('id');

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}`;

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
        let generos = data
        let a = document.querySelector(".genre")
        let detalleGenero = `<article>
        <h2 class="titulosearch"> Artistas de ${generos.name}</h2>
        </article>`
        a.innerHTML += detalleGenero
    })
    .catch(function (error) {
        console.log(error);
    });


let url_dos = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/${id}`;

fetch(url_dos)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data);
    for (let index = 0; index < 10; index++) {
        document.querySelector('.generolista').innerHTML += `<a href="./detallecantante.html?id=${data.artists.data[index].id}">
        <h3 class="artistagenero">${data.artists.data[index].name}</h3>
        <img class="imagenartistagenero" src="${data.artists.data[index].picture_medium}" alt="">
        </a>`      
    }   
})
.catch(function (error) {
    console.log(error);
});
