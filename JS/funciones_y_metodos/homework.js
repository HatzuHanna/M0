//! Homework de Funciones y Métodos
//* Practica el uso de funciones y métodos en JavaScript resolviendo los siguientes ejercicios.
//* Realiza un comentario en cada ejercicio escribiendo la posible solución antes de ejecutar el código.
//* Adicional, agrega dos ejemplos mas por cada ejercicio para practicar.
//* Al finalizar, ejecuta el archivo en Node.js para verificar tus resultados.

//? Ejercicio 1: Declaración de función
function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}

//? Ejercicio 2: Expresión de función
var sumar = function (a, b) {
  return a + b;
};

//? Ejercicio 3: Llamada a función
saludar("Juan");
var resultadoSuma = sumar(3, 5);
console.log("Resultado de la suma:", resultadoSuma);

//? Ejercicio 4: Método de cadena
var mensaje = "Hola, Mundo!";
console.log(mensaje.toUpperCase()); // "HOLA, MUNDO!"
console.log(mensaje.toLowerCase()); // "hola, mundo!"

//? Ejercicio 5: Método de array
var frutas = ["manzana", "plátano", "fresa"];
console.log(frutas.length); // 3
console.log(frutas.join(", ")); // "manzana, plátano, fresa"
