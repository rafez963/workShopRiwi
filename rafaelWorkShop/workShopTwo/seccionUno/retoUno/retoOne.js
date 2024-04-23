// DEfinir variables 

// destino del viaje 
const destinoViaje =  prompt("Por favor ingresa el destino de tu viaje: ")
console.log('El destino del viaje es : ',destinoViaje)

// cantidad de dias
let cantidadDiasViaje = prompt("Por favor ingrese la cantidad de dias para su viaje: ")
console.log(`La cantidiad de dias para su viaje es: ${cantidadDiasViaje}`)

//presupuesto del viaje 
let presupuestoViaje = prompt("Por favor ingrese el presupuesto para su viaje: ")
console.log(`su presupuesto es ${presupuestoViaje }`)

// estimado minimo para hacer el viaje
const presupuestoMinimo = 50000 

//presupuesto estimado por dias
let presupuestoDiaEstimado = presupuestoMinimo / cantidadDiasViaje

// costo total estimado para el viaje
const costoTotalEstimado = cantidadDiasViaje * presupuestoDiaEstimado

// condiciones para el viaje 

if (presupuestoMinimo >= costoTotalEstimado ){
    console.log("Tu presupuesto actual es suficiente para cubrir el viaje")
}
else{
    console.log("tu presupuesto actual no es suficiente para cubir el viaje")
}