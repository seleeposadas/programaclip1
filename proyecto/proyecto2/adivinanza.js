let trivia = () => {

    let trys = 3;
    const respuestaCorrecta = 'torta matilda';
    let correct = false;
    
    
        while (trys > 0 && correct != true) {
            trys--;
            respuesta = prompt("pastel de la iconica pelicula de Disney \n Ingrese la respuesta");
            console.log(respuesta)
            if (respuesta === respuestaCorrecta) {
                alert( `Ganaste una box gulera!!!`);
                correct = true;
            } else if (trys == 2) {
                alert(`Incorrecto, te quedan ${trys} intentos, pista: Le encanta a Bruce`);
            } else if (trys == 1) {
                alert(`Incorrecto, te quedan ${trys} intentos, pista: La directora lo pide especialmente \n Ingrese la nueva respuesta:`);
            } else if (trys == 0) {
                alert(`Incorrecto, te queda ${trys} intento, pista: M...  \n Ingrese la nueva respuesta`);
            }
        }        
    }