//! Homework de Variables y Tipos de Datos
//* En esta homework deberás practicar declarar variables y asignarles valores de distintos tipos de datos. 
//* Agrega mas ejemplos de los que se te presentan para que practiques.

//TODO: Variables y Tipos de Datos

//? Ejercicio 1: Declaración de variables
let nombre;
let edad;

//? Ejercicio 2: Asignación de valores a variables
nombre = "Ana";
edad = 25;

//? Ejercicio 3: Mostrar variables en la consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);

//? Ejercicio 4: Variables con distintos tipos de datos
let numero = 10;
let texto = "Hola, mundo!";
let esVerdadero = true;
let arreglo = [1, 2, 3];
let objeto = { nombre: "Carlos", edad: 30 };

//? Ejercicio 5: Mostrar tipos de datos en la consola
//! Nota: El tyoeof es un operador que nos permite conocer el tipo de dato de una variable.
console.log("Número:", numero, typeof numero);
console.log("Texto:", texto, typeof texto);
console.log("Booleano:", esVerdadero, typeof esVerdadero);
console.log("Arreglo:", arreglo, typeof arreglo);
console.log("Objeto:", objeto, typeof objeto);

//? Ejercicio 6: Operaciones con variables
let a = 5;
let b = 3;
let suma = a + b;
let concatenacion = texto + " " + nombre;

//? Ejercicio 7: Mostrar resultados de operaciones en la consola
console.log("Suma:", suma);
console.log("Concatenación:", concatenacion);

//? Ejercicio 8: Cambio de valor de variable
let cantidad = 10;
console.log("Cantidad inicial:", cantidad);

cantidad = 15;
console.log("Cantidad actualizada:", cantidad);

//? Ejercicio 9: Declaración y asignación simultánea
let precio = 20,
  cantidadProductos = 5,
  total = precio * cantidadProductos;

console.log("Precio:", precio);
console.log("Cantidad de productos:", cantidadProductos);
console.log("Total:", total);
