let qs = location.search;
let qsObj = new URLSearchParams(qs)
let id = qsObj.get('id');

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/3135556${id}` ;


fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
    console.log(data);
        // let detailcancion = document.querySelector(".detailcancion")
        // detailcancion.innerText = data.tracks.data;

    })
    .catch(function (error) {
        console.log(error);
    });