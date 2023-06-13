let endpoint_album = "https://api.allorigins.win/raw?url=https://developers.deezer.com/api/album" 

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



function formulario() {
    let termino = document.querySelectorAll('.form-result');
    if (termino.value.length < 3) {
        alert ("Debe ingresar al menos 3 caracteres")
        return false;
    }
    return true;
}






