let qs = location.search;
let qsObj = new URLSearchParams(qs)
let id = qsObj.get('id');
let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track` + id;


fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let cancion = document.querySelector(".cancion")
        cancion.innerText = data.tracks.data;

    })
    .catch(function (error) {
        console.log(error);
    });