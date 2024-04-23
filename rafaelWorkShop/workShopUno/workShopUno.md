Taller Práctico de JavaScript para Principiantes
Sección 1: Estructura Básica de un Archivo HTML con JavaScript

    Ejercicio 1: Crea un archivo HTML y nómbralo index.html. Dentro del archivo, estructura tu documento con las etiquetas básicas: , , , y .

        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Taller de JavaScript</title>
        </head>
        
        <body>
            <header>
            </header>
            <main>
            </main>
            <footer>
            </footer>
        </body>
        
        </html>

    Ejercicio 2: Dentro del , añade el siguiente código y observa qué sucede al abrir tu archivo HTML en un navegador:


<script>
  alert("¡Bienvenido al taller de JavaScript!");
</script>

    Ejercicio 3: Mueve la etiqueta script al final del y explica en un comentario HTML () por qué podría ser una mejor práctica.

    <!-- poner la etiqueta script al final del body perimte que el contenido html se cargue primero, pude mejorar el rendimiento y problemas de carga -->

Sección 2: Comentarios, Variables y Tipos de Datos

    Ejercicio 4: Dentro de tu proyecto, crea un archivo app.js o index.js y añade un comentario de una sola línea y un comentario de bloque en tu archivo JavaScript que explique qué se espera en los siguientes ejercicios.

/* Este bloque de comentario explica que se espera en los siguientes ejercicios del taller. */


    Ejercicio 5: Declara una variable llamada miNumero y asígnale el valor 10. Usa console.log para imprimir tu variable en la consola.

let miNumero = 10;
console.log(miNumero);

    Ejercicio 6: Crea una variable llamada miBooleano con el valor true. Imprime el tipo de dato usando typeof en un console.log.

let miBooleano = true;
cosole.log(typeof miBooleano);

    Ejercicio 7: Crea una variable llamada miCadena y asígnale un valor de tu elección. Imprime la longitud de la cadena en la consola.

ler miCadena = "prueba de string"
console.log(miCadena.length)

    Ejercicio 8: Crea una variable llamada miArray y asígnale un array con 3 elementos de tu elección, estos elementos deben ser string, number y array. Imprime el array en la consola.

le miArray= ["hola", 3, [1,2,3,4]]

    Ejercicio 9: Crea una variable llamada miObjeto y asígnale un objeto con 3 propiedades de tu elección. Imprime el objeto en la consola.

let miObjeto = {
    nombre : "pedro",
    apellido : "perez",
    lugares : ["chicago", "nuevaYork","alaska"]
}
consle.log(miObjeto)

Sección 3: Interacción con el Usuario

    Ejercicio 10: Utiliza prompt para pedirle al usuario su nombre y almacénalo en una variable llamada nombreUsuario. Usa alert para mostrar un saludo que incluya el nombre del usuario.

let nombreUsuario = prompt("¿Cuál es tu nombre?");
alert("¡Hola, " + nombreUsuario + "!");


    Ejercicio 11: Crea una confirmación con confirm que pregunte al usuario si le gusta JavaScript. Guarda la respuesta en una variable y muestra en consola un mensaje acorde a la respuesta.

let gustaJavaScript = confirm("¿Te gusta JavaScript?");
if (gustaJavaScript) {
    console.log("¡Genial! A nosotros también nos gusta JavaScript.");
} else {
    console.log("Qué lástima, JavaScript es genial.");
}


Sección 4: Uso de console para Depuración

    Ejercicio 9: Escribe un mensaje de advertencia usando console.warn con el texto "Esto es solo una práctica".

console.warn("Esto es solo una práctica");

    Ejercicio 10: Genera un mensaje de error utilizando console.error para simular un fallo al intentar ejecutar una operación.

console.error("Hubo un fallo al ejecutar una operación");


    Ejercicio 11: Crea una tabla en la consola a partir de un array con los números del 1 al 5 utilizando console.table.

console.table([1, 2, 3, 4, 5]);


Sección 5: Trabajando con el Script en un Archivo Externo

    Ejercicio 12: Crea un nuevo archivo llamado app.js. Mueve todas las etiquetas script que has escrito hasta ahora a este nuevo archivo.
    Ejercicio 13: Enlaza el archivo app.js a tu index.html utilizando la etiqueta script al final del .
<script src="app.js"></script>