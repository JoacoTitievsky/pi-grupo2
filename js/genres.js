let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/genre'

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let generos = document.querySelector('.divpadregenres')
        let objeto = data.data
        for (let index = 1; index < data.data.length ; index++) {
            generos.innerHTML += `<a href = "./detalledelgenero.html?id=${objeto[index].id}">
            <img class= "imggenero" src=${objeto[index].picture} alt="${objeto[index].name}"/>
            <h2 class="nombregenero">${objeto[index].name}</h2> 
            </a>`
        }
    })

    .catch(function (error) {
        console.log("Error: " + error);
    })