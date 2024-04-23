// declaramos las funcion para obtener los datos del usuario: 

function datosUsuario(){
    let nivelEnergia = Number(prompt("¿Cual es tu nivel de energia hoy? : "))
    let clime =  prompt("¿Como esta el clima hoy? ('soleado' - 'lluvioso' : )")
    let trabajo = prompt("Tines trabajo para el dia de hoy: ('si' o 'no') : ")
    let tienesTrabajo = trabajo.toLowerCase() === 'si' 

    return {nivelEnergia, clime, tienesTrabajo}
}

let solicitarDatos =  datosUsuario()
//funcion para determinar si es viable o no salir a correr o quedar a trabajar

function decision(solicitarDatos){
    if(solicitarDatos.nivelEnergia <= 5){
        console.log("EL usuario esta cansado, toma el dia libre")
    }
    else {
        if(solicitarDatos.clime.toLowerCase() === 'soleado'){
            console.log(`el clima esta ${solicitarDatos.clime} para salir hoy a correr`)  
    }else if(solicitarDatos.clime.toLowerCase === 'lluvioso'){
        console.log(`El clima esta ${solicitarDatos.clime}`)
    } else {
        console.log("No se reconoce el clima ingresado. ")
    }
    
    if(solicitarDatos.tienesTrabajo){
        console.log("Tienes trabajo hoy. MEjor ponte a trabajar")
        }else{
            console.log("No tienes trabjao, si lo deseas puedes salir a correr o relajarte")
        }
    }
}

decision(solicitarDatos)