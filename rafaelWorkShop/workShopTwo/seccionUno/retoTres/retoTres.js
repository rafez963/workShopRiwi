// Funcion donde obtenemos los datos del usuario
function datosViaje() {
    //DATOS
    let presupuestoInivial = Number(prompt("Ingrese le presupuesto incial para el viaje: "))

    let alojamientoCosto = Number(prompt("Ingrese el costo del alojamiento en el viaje: "))
    let transporteCosto = Number(prompt("Ingrese el costo del transporte en el viaje: "))
    let comidaCosto = Number("Ingrese el costo de la comida en el viaje: ")
    let seleccionArticulos = articulo()

    return {presupuestoInivial, alojamientoCosto, transporteCosto, comidaCosto, seleccionArticulos}
}
// funcion para almacenar los articulos que desearia llevar nuestro usuario
function articulo(){
    let conjutoArticulos = []
    decision = ""

    whileI(decision !== "s"){
        decision = prompt("Iingrese el nombre del articulo - (o escriba 's' para slair)")
        if(decision !== "s"){
            let costo = parseFloat(prompt("Ingrese el costo del articulo: "))
            conjutoArticulos.push({nombre: decision, costo: costo})
        }
    }
    // retornamos el conjunto de articulos que el usuario ingreso
    return conjutoArticulos
}

// function para saber si se puede comprar un articulo extra
function comprarArticuloExtra(datos){
    // calculamos el dinero extra que puede quedar de la diferencia de los costos de alojamiento,comida,
    // transporte del presupuesto que se tiene actualmente
    let presupuestoExtra = datos.presupuestoInivial - (datos.alojamientoCosto + datos.transporteCosto + datos.comidaCosto)

    let articuloAdsequible = null

    for(let i=0; datos.seleccionArticulos.length; i++){
        // recorremosnuestra lista de articulos con el objetivo de comparar el precio con el dinero restante
        let articulo = datos.seleccionArticulos[i]
        // ṕresungtamos de las diferencias se ajustan a la posibilidad de agregar un articulo extra
        if(articulo.costo <= presupuestoExtra){
            opcionArticulo = articulo.nombre
        }
        //Dado el caso que el costo del articulo sea mas alto que el presupuesto 
        else{
            console.log("No puedes agregar este articulo, el costo del articulo supera tu presupuesto")
        }
    }
    // retornamos el opccion del articulo que se presente acorde al presupuesto extra que tiene el usuario
    return opcionArticulo
}

// funcion para traer todos los datos y ejecutar
function itinerario(){
    //obtener los datos del viaje
    let informacionViaje = datosViaje()
    //articulo que se ajusta al dinero extra del usuario
    let articuloAcordePresupuesto = comprarArticuloExtra(datos)

    // El usuario puede ver si es posible llevar un articulo extra: 

    if(articuloAcordePresupuesto){
        console.log(`Puedes llevar el articulo ${opcionArticulo}`)
    }else{
        console.log("El articulo supera el presupuesto.")
    }
}
// llamamos a l a funcion itinerario para que nos muestre la posibilidad de llevar un articulo extra.
itinerario();




