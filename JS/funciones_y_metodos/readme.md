<a id="top"></a>

# Funciones y Métodos

#### Tabla de Contenidos
- [Funciones y Métodos](#funciones-y-métodos)
      - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Funciones](#funciones)
    - [Declaración de funciones](#declaración-de-funciones)
    - [Expresiones de funciones](#expresiones-de-funciones)
    - [Parámetros y argumentos](#parámetros-y-argumentos)
    - [Valor de retorno](#valor-de-retorno)
  - [Métodos](#métodos)
    - [Métodos de cadena](#métodos-de-cadena)
    - [Métodos de array](#métodos-de-array)
    - [Métodos de objeto](#métodos-de-objeto)
    - [Ir a la siguiente clase](../objetos/readme.md)

## Funciones

Las funciones son bloques de código reutilizables que realizan una tarea específica. Podemos pensar en ellos como una fabrica, a la que le ingresa materia prima ( tela ), en la cual se hacen ciertos procesos ( tintura y estampado ) y nos devuelve un resultado ( pantalon ).

En JavaScript, existen diferentes formas de definir funciones.

### Declaración de funciones

Definiendola con notacion de funcion
```javascript
function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}

saludar("Juan");
```

Definiendola como variable
```javascript
var saludar = function(nombre){
    console.log("Hola, " + nombre "!");
}
saludar("Pedro");
```

Definiendola como arrow function (Incorporada en ES6)
```javascript
var saludar = (nombre) => {
    console.log("Hola, " + nombre "!");
}
saludar("Andres");
```

Mas adelante veremos las implicaciones que tiene definirla como fuincion o como variable

### Parámetros y argumentos

Los parametros son los datos que se reciben entre parentesis al principio de la funcion.
En los ejemplos anteriores, el parametro recibido era `nombre`

>NOTA: Es importante decir que el nombre que le demos al parametro es totalmente arbitrario, es decir que no afecta en nada, sin embargo, es recomendable darle nombres a los parametros que nos den indicios de que es lo que contienen, si una edad, un email, un nombre, etc.

### Valor de retorno

El valor de retorno es lo que una funcion le devuelve al codigo, es diferente al console.log, debido a que el console.log nos imprime un resultado a nosotros, pero no le transmite esa informacion al codigo, sin embargo el `return` que se usa en una funcion para retornar un resultado si.

Como ninguna de las funciones anteriores esta retornando algo, puedes comprobar que:

```javascript
function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}
var resultado = saludar("Ana");
console.log(resultado); // undefined
```

El console.log de resultado va a arrojar undefined.
Si quisieras que en resultado se almacene el mensaje del saludo, la funcion debe retornarlo, asi:

```javascript
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}
var resultado = saludar("Ana");
console.log(resultado); // Hola Ana!
```

En ocasiones necesitaremos que las funciones retornen un resultado y en otras ocasiones no sera necesario. Lo veremos en la practica.

## Métodos

Los métodos son funciones que están asociadas a las estructuras que ya hemos visto, como arrays, strings, objetos, etc y se invocan con un punto:

### Métodos de cadena

Se le aplican a un string, veamos algunos:
```javascript
var mensaje = "Hola, Mundo!";

console.log(mensaje.toUpperCase());    // "HOLA, MUNDO!"
console.log(mensaje.toLowerCase());    // "hola, mundo!"
console.log(mensaje.indexOf("Mundo")); // 6
console.log(mensaje.chartAt(3)) // a
```
>NOTA: El metodo indexOf para strings, devuelve el indice de la primera letra con la que matchea lo que estamos buscando. En nuestro caso Mundo, la M se encuentra en el indice 6. Para los strings al igual que los arrays, los indices comienzan desde cero.

Podemos acceder a una letra en particular sin necesidad de usar el metodo chartAt, como lo haciamos con los arrays gracias a que la notacion de corchetes esta permitida para los strings. Esto se conoce como Array-like, es una estructura que puede usar metodos de array, sin ser uno propiamente.
```javascript
console.log(mensaje[0]) // H
console.log(mensaje[2]) // l
```

### Métodos de array

Ya vimos algunos metodos en la clase de Arrays, aca te dejo un par mas:

```javascript
var frutas = ["manzana", "plátano", "fresa"];

// Metodo reverse: ordena el array al reverso
console.log(frutas.reverse()); // ["fresa", "plátano", "manzana"]

// Metodo pop: Extrae y retorna el ultimo elemento del array
console.log(frutas.pop()); // "manzana"
console.log(frutas); // ["fresa", "plátano"]

//Metodo push: Agrega un elemento al final del array. Retorna la nueva longitud del array
console.log(frutas.push("uva"));  // 3
console.log(frutas); // ["fresa, "plátano", uva"]

// Metodo shift: Extrae y retorna el primer elemento del array
console.log(frutas.shift());  // "fresa"
console.log(frutas) // ["plátano", "uva"]

// Metodo unshift: Agrega un elemento al comienzo del array. Retorna la nueva longitud del array
console.log(frutas.unshift("cereza"));  // 3
console.log(frutas) // ["cereza","plátano","uva"]
```

### Métodos de objeto

Si aun no conoces lo que es un objeto, te invito a que explores la clase, dando click [aca](../objetos/readme.md).

En un objeto, las cosas cambian un poco, debido a que en un objeto llamamos metodo a una funcion definida en la propiedad del objeto. Por ejemplo:

```javascript
var persona = {
  nombre: "Ana",
  edad: 30,
  saludar: function() {
    console.log("Hola, soy " + this.nombre + ".");
  }
};

persona.saludar(); // "Hola, soy Ana."
```
En este caso, saludar ya no es una propiedad, es un metodo del objeto persona.

Lo vamos a ir tomando con calma por ahora, pero esto de los metodos sera muy util mas adelante.

¡Muy bien! Ahora has cubierto funciones y métodos en JavaScript. ¡Sigue aprendiendo! 🌟

Vamos con todo para la [Homework](./homework.js) 🏆

[Ir a la siguiente clase](../objetos/readme.md)

[Regresar al inicio](#top)

</br>