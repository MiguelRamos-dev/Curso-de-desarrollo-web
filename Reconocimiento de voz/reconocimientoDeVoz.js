let rec;
    if (!("webkitSpeechRecognition" in window)) {
        alert("Disculpas , no tenes la api de reconocimiento de voz");
    } else {
        console.log("escuchando");
        rec = new webkitSpeechRecognition();
        rec.lang = "es-MEX";
        rec.continuous = true;
        rec.interim = true;
        rec.addEventListener("result",inicial);
    }

function inicial(event){
        let areaIngreso = document.getElementById('texto');
        let textoFinal = document.getElementById('textoFinal');
        let parrafo = document.createElement('p')

    for (i = event.resultIndex; i < event.results.length; i++){
        areaIngreso.innerHTML = event.results[i][0].transcript; 
        parrafo.innerHTML = event.results[i][0].transcript;
        textoFinal.appendChild(parrafo);               


    }

    


    function crearMensaje(resultado) {
        let sectionMensajes = document.getElementById('mensajes')
        let parrafo = document.createElement('p')
        parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con '+ ataqueEnemigo + ' -' + resultado
    
        sectionMensajes.appendChild(parrafo)
    
    }



}

rec.start();