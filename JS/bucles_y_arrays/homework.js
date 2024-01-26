//! Homework de Bucles y Arrays
//* Practica el uso de bucles y arrays en JavaScript resolviendo los siguientes ejercicios.
//* Realiza un comentario en cada ejercicio escribiendo la posible solución antes de ejecutar el código.
//* Adicional, agrega dos ejemplos mas por cada ejercicio para practicar.
//* Al finalizar, ejecuta el archivo en Node.js para verificar tus resultados.

//? Ejercicio 1: Bucle for con array
var colores = ["rojo", "verde", "azul"];

for (var color of colores) {
  console.log(color);
}

//? Ejercicio 2: Bucle while
var contador = 0;

while (contador < 5) {
  console.log("Iteración:", contador);
  contador++;
}

//? Ejercicio 3: Bucle do-while
var contador = 0;

do {
  console.log("Iteración:", contador);
  contador++;
} while (contador < 5);
