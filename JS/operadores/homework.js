//! Homework de Operadores
//* La intencion de esta homework es que practiques los operadores vistos en clase.
//* Para ello se te presentan una serie de ejercicios que debes resolver utilizando los operadores que consideres necesarios.
//* Coloca un comentario con el posible resultado de cada operacion.
//* Adicional, agrega dos ejemplos mas por cada ejercicio para practicar
//* Al finalizar, ejecuta el archivo en Node.js para verificar tus resultados.

//TODO: Operadores Aritméticos

//? Ejercicio 1: Suma de dos números
let num1 = 10;
let num2 = 5;
let resultadoSuma = num1 + num2;
console.log("Resultado de la suma:", resultadoSuma);

//? Ejercicio 2: Multiplicación de dos números
let num3 = 8;
let num4 = 3;
let resultadoMultiplicacion = num3 * num4;
console.log("Resultado de la multiplicación:", resultadoMultiplicacion);

//? Ejercicio 3: Resta de dos números
let num5 = 15;
let num6 = 7;
let resultadoResta = num5 - num6;
console.log("Resultado de la resta:", resultadoResta);

//TODO: Operadores de Asignación

//? Ejercicio 4: Asignación con incremento
let a = 5;
let b = 3;
a += b;
console.log("Resultado de la asignación con incremento:", a);

//? Ejercicio 5: Asignación con multiplicación
let c = 2;
let d = 4;
c *= d;
console.log("Resultado de la asignación con multiplicación:", c);

//? Ejercicio 6: Asignación con división
let e = 10;
let f = 2;
e /= f;
console.log("Resultado de la asignación con división:", e);

//TODO: Operadores de Comparación

//? Ejercicio 7: Comparación de igualdad
let x = 10;
let y = 10;
let igualdad = x == y;
console.log("El resultado de la comparación de igualdad es:", igualdad);

//? Ejercicio 8: Comparación de desigualdad
let p = "Hola";
let q = "Mundo";
let desigualdad = p != q;
console.log("El resultado de la comparación de desigualdad es:", desigualdad);

//? Ejercicio 9: Comparación de mayor que
let m = 15;
let n = 8;
let mayorQue = m > n;
console.log("El resultado de la comparación de mayor que es:", mayorQue);

//TODO: Operadores Lógicos

//? Ejercicio 10: AND lógico
let condicion1 = true;
let condicion2 = false;
let resultadoAnd = condicion1 && condicion2;
console.log("El resultado del AND lógico es:", resultadoAnd);

//? Ejercicio 11: OR lógico
let condicion3 = true;
let condicion4 = false;
let resultadoOr = condicion3 || condicion4;
console.log("El resultado del OR lógico es:", resultadoOr);

//? Ejercicio 12: NOT lógico
let condicion5 = true;
let resultadoNot = !condicion5;
console.log("El resultado del NOT lógico es:", resultadoNot);

//TODO: Operadores de Incremento/Decremento

//? Ejercicio 13: Incremento
let contador1 = 5;
contador1++;
console.log("Resultado del incremento:", contador1);

//? Ejercicio 14: Decremento
let contador2 = 8;
contador2--;
console.log("Resultado del decremento:", contador2);

//? Ejercicio 15: Incremento en asignación
let variable1 = 3;
variable1++;
console.log("Resultado del incremento en asignación:", variable1);

//TODO: Operadores de Concatenación (para Strings)

//? Ejercicio 16: Concatenación de Strings
let nombre = "Juan";
let apellido = "Pérez";
let nombreCompleto = nombre + " " + apellido;
console.log("Nombre completo:", nombreCompleto);

//? Ejercicio 17: Concatenación con números
let numero1 = 5;
let numero2 = 10;
let resultadoConcatenacion = "El resultado es: " + (numero1 + numero2);
console.log(resultadoConcatenacion);

//? Ejercicio 18: Concatenación con variables
let ciudad = "Bogotá";
let mensaje = "Bienvenido a la ciudad de " + ciudad;
console.log(mensaje);

//TODO: Operador Ternario

//? Ejercicio 19: Uso del operador ternario
let edad = Infinity;
let estado = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log("Estado:", estado);
