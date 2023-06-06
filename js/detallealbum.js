let endpoint_album = "https://api.allorigins.win/raw?url=https://developers.deezer.com/api/album" 





function formulario() {
    let termino = document.querySelectorAll('.form-result');
    if (termino.value.length < 3) {
        alert ("Debe ingresar al menos 3 caracteres")
        return false;
    }
    return true;
}




