let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/genre'

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

        let generos = document.querySelector('.divpadregenres')
        let objeto = data.data
        for (let index = 1; index < 10; index++) {
            generos.innerHTML += `<article><a href = "./detalledelgenero.html?id=${objeto[index].id}">
            <img class= "imggenero" src=${objeto[index].picture} alt="${objeto[index].name}"/>
            <h2 class="nombregenero">${objeto[index].name}</h2> 
            </a></article>`
        }
    })

    .catch(function (error) {
        console.log("Error: " + error);
    })