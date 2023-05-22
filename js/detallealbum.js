function formulario() {
    let termino = document.querySelectorAll('form-result').value;
    if (termino.length < 3) {
        alert ("Debe ingresar al menos 3 caracteres")
        return false;
    }

    return true;
}