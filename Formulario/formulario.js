(function() {
    var formulario = document.getElementById('formulario'),
        nombre= formulario.nombre,
        correo= formulario.correo,
        sexo= formulario.sexo,
        terminos= formulario.terminos,
        error= document.getElementById('error');

function validarNombre(e){
    if(nombre.value=='' || nombre.value==null){
        console.log("ingrese nombre");
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Por favor ingrese el nombre</li>';
        e.preventDefault();
    }else {
        error.style.display= 'none';
    }
}

function validarCorreo(e) {
    if(correo.value=='' || correo.value==null){
        console.log("ingrese correo");
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Por favor ingrese el correo</li>';
        e.preventDefault();
}else {
    error.style.display= 'none';
}
}

function validarSexo (e){
    if(sexo.value=='' || sexo.value==null){
        console.log("ingrese sexo");
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Por favor ingrese el sexo</li>';
        e.preventDefault();
}else {
    error.style.display= 'none';
}
}

function validarTerminos (e){
    if(terminos.checked == false){
        console.log("acepte los terminos");
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Por favor acepte los terminos</li>';
        e.preventDefault();
}else {
    error.style.display= 'none';
        }

}

function validarFormulario(e) {
    error.innerHTML= '';
    validarNombre(e);
    validarCorreo(e);
    validarSexo(e);
    validarTerminos(e);
    
}
formulario.addEventListener('submit', validarFormulario);

}())