//funcion para solicitar los datos del usuario
function datosUsuario(){
    let presupuestoDia = Number(prompt("Ingrese el presupuesto del dia: "))
    let costoComida = Number(prompt("Ingrese los costos de la comida en un restaurante: "))
    let costoLibro = Number(prompt("Ingrese el costo del libro que desea llevar: "))
    let ahorroDiario = Number(prompt("Ingrese el ahorro del dia: "))

    return {presupuestoDia, costoComida, costoLibro, ahorroDiario};
}

// funcion para verificar el si el presupuesto diario es mayor o menor que el costo de una eleccion comer o libro
function compra(presupuestoDia, costoAccion){
    return presupuestoDia >= costoAccion
}

// funcion para para saber si el ahorro del dia es mayor o menor que el dinero restante despues de cubir los gastos minimos
function Ahorro(dineroRestante, ahorroDia){
    return dineroRestante >= ahorroDia
}

// funcion para determinar si el dinero es suficiente para cubiri los gastos extras
function gastoExtra(presupuestoDia, costoComida, costoLibro){
    let comidaRestaurante = compra(presupuestoDia, costoComida)
    let compraLibro = compra(presupuestoDia, costoLibro)

    return {comidaRestaurante, compraLibro}
}

// funcion para evaluar la decicion de comprar un libro o una comida en un restaurante o ninguna de los dos 
function decision(comidaRestaurante, compraLibro, dineroRestante, ahorroDia){
    // comprovamos me diante condicionales si es posible realizar la comprar 
    if(!comidaRestaurante && !compraLibro){
        console.log("No te sobra dinero para comprar el libro o comer en un restaurante")
    }else{
        if(!comidaRestaurante){
            console.log("Puedes comprar un libro, pero no ir a comer a un restaurante.")
        } else if(!compraLibro){
            console.log("Puedes ir a comer en un restaurante, pero no comprar el libro")
        }else{
            console.log("Puedes comprar el libro y comer afuera.")
        }
    }

    if(Ahorro(dineroRestante, ahorroDia)){
        console.log("Lograste llegar a la meta de ahorro diario")
    }else{
        console.log("no lograste a tu meta de ahorro, tener mas cuidad el dia de mañana con los gatos.")
    }
}

// funcion para encontrar el presupuesto
function calculo(){
    let usuarioDato = datosUsuario()
    let gastoExtra = gastoExtra(datos.presupuestoDia, datos.costoComida, datos.costoLibro)
    let dinerorestante = datos.presupuestoDia - datos.costoComida - datos.costoLibro

    decision(gastoExtra.comidaRestaurante, gastoExtra.compraLibro, dinerorestante, usuarioDato.ahorroDiario)
}

calculo()