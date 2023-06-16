let qs = location.search;
let qsObj = new URLSearchParams(qs)
let id = qsObj.get('id');

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`;

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
        let artistas = document.querySelector('.generolist')
        let objeto = data

        let contenedorArtista = `<article>
            <img class="imagen" src="${objeto.picture_medium}" alt="">
            <h2 class="nombreartista"> Nombre del Artista: ${objeto.name}</h2>
            </article>`
        artistas.innerHTML += contenedorArtista


    })
    .catch(function (error) {
        console.log(error);
    });

let listaartista = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/albums`
let detalleartista = document.querySelector(".detalleartista")


fetch(listaartista)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
    console.log(data);
        for (let i = 0; i < 6 ; i++) {
            
            let artistdetail = document.querySelector('.detalleartista');
                 artistdetail.innerHTML +=
                `  <a href="./detallealbum.html?id=${data.data[i].id}">${data.data[i].title}
                <h2 class="artistdetail"></h2>
                <img class="imagen" src="${data.data[i].cover}" alt=""></a>`;     
        }
        
    })
    .catch(function (error) {
        console.log(error);

    });


