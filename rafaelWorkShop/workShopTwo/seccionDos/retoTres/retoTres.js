
function principal(){
    console.log("Por favor ingrese los siguientes datos: ")

    let clima = prompt("¿Cual es el pronostico del clima? (coleado - lluvia - nublado: )")
    let maletaEspacio = Number(prompt("Ingrese el espacio en litros que tiene la maleta: "))
    let pesoMaximo = Number(prompt("Ingrese el peso en Kg maximo para el equipaje: "))

    while( isNaN(maletaEspacio) || isNaN(pesoMaximo) || pesoMaximo <= 0){
        console.log("Ingrese un valor valido: ")
        let maletaEspacio = Number(prompt("Ingrese el espacio en litros que tiene la maleta: "))
        let pesoMaximo = Number(prompt("Ingrese el peso en Kg maximo para el equipaje: "))
    }
    decision(clima.toLocaleLowerCase(), maletaEspacio, pesoMaximo)
}

function decision(clima, maletaEspacio, pesoMaximo){

    let llevarParaguas = false;
    let llevarCamara = false
    let llevarRopaExtra =  false
    
    if (clima === "lluvia"){
        llevarParaguas = true;
    }
    if(maletaEspacio > 0){
        llevarCamara = true
    }
    if(pesoMaximo < 20){
        llevarRopaExtra = true
    }

    console.log("DAdas las condiciones: ")

    if (puedeLlevarParaguas) {
        console.log("Puedes llevar un paraguas.");
    } else {
        console.log("No necesitas llevar un paraguas.");
    }

    if (puedeLlevarCamara) {
        console.log("Puedes llevar una cámara.");
    } else {
        console.log("No hay suficiente espacio para llevar una cámara.");
    }

    if (puedeLlevarRopaExtra) {
        console.log("Puedes llevar ropa extra.");
    } else {
        console.log("El peso total de tu equipaje ya está en su límite.");
    }

    
}

principal()