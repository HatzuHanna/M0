//! Homework de Objetos
//* Practica el uso de objetos en JavaScript resolviendo los siguientes ejercicios.
//* Realiza un comentario en cada ejercicio escribiendo la posible solución antes de ejecutar el código.
//* Adicional, agrega dos ejemplos mas por cada ejercicio para practicar.
//* Al finalizar, ejecuta el archivo en Node.js para verificar tus resultados.

//? Ejercicio 1: Creación de un objeto

let persona = {
  nombre: "Carlos",
  edad: 25,
    ciudad: "Madrid",

};

//? Ejercicio 2: Acceso a propiedades
console.log(persona.nombre); 
console.log(persona.edad); 
console.log(persona.ciudad);
console.log(persona["nombre"]);
console.log(persona["edad"]);

//? Ejercicio 3: Modificación de propiedades
persona.edad = 26;
persona.ciudad = "Barcelona";
persona.nombre = "Juan";
persona["edad"] = 27;
persona["ciudad"] = "Valencia";
persona["nombre"] = "Pedro";



