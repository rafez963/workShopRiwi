//SOlicitar la cantidad de souvenir desea ing

//Lista para agregar los suvenirs
const listaSouvenirs = []

// funcion verificacion de datos
function verificacionDatos (nombre, costo, disponible){
    console.log("ENtre en la fuck function")
    if(typeof nombre!=='string' && typeof costo!=='number' && typeof disponible!=='boolean' ){
        return true
    }
    else{
        return false
    }

}

//Funcion Agregar souvenir a la lista
function agregarSouvenir(){
    //pedir al usuario nombre, costo, disponibilidad
    let nombre = prompt("Ingrese el nombre del souvenir: ")
    let costo = parseFloat(prompt("Ingrese el costo del souvenir: "))
    let disponible = confirm("El souvenir esta disponible: ")

    verificacionDatos(nombre, costo, disponible)
    // si la condicion que verificacion de datos es true se añadiran los elementos(nombre, costo, dsponible)
    // if(!isNaN(costo) && disponible===true){
        if(verificacionDatos()){
            const souvenir = {
                "nombre": nombre,
                "costo": costo,
                "disponible": disponible
             }
        
        listaSouvenirs.push(souvenir)
        console.log(listaSouvenirs)
    }
    else{
        console.log("RECTIFIQUE los datos suministrados")
    }
}

// solicitamos cuanta es la cantidad de souvenir que desea ingresar
let cantidadSouvenirs = prompt("INgrese la cantidad de souvenir que desea agregar: ")
cantidadSouvenirs = parseInt(cantidadSouvenirs)
// vamos agregar la cantidad de souvenirs en relacion a la constante   cantidadSouvenirs

// en relacion a la cantidad de sourvenir proporcionadas por el usuario tendremos la cantidad de ciclos 
for (let i=0; i < cantidadSouvenirs; i++){
    console.log(`Ingrese los datos del souvenir: ${i + 1}:  `)
    agregarSouvenir()
}

console.log(`lista de souvenir: `)
console.log(listaSouvenirs)