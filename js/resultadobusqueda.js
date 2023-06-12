let queryString = location.search
let queryStringObj = new URLSearchParams (queryString)
let valor = queryStringObj.get("buscar")
console.log(valor)

let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart" + valor;
let resultscanciones = document.querySelector(".resultscanciones")

fetch(url)
    .then(function (response) {
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

        if (data.data.length == 0) {
            let searchartista = document.querySelector(".searchartista")
            let searchalbum = document.querySelector(".searchalbum")
            searchartista.style.display = "none"
            searchalbum.style.display = "none"
        } else {
            for (let index = 0; index < data.data.length; index++) {
                document.querySelector(".resultsartistas").innerHTML += `<a href = "./detallecancion.html?id=${data.data[index].id}">
        <img class= "imgcancion" src=${data.data[index].title} alt=""/>
        <h3 class="nombreartista">${data.data[index].artists}</h3>
        <h4 class="nombrealbum">${data.data[index].albums}</h4>
        </a>`
            }
        }
    })
    .catch(function (error) {
        console.log(error);
    });