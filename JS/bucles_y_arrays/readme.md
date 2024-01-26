<a id="top"></a>

# Bucles y Arrays

#### Tabla de Contenidos
- [Bucles y Arrays](#bucles-y-arrays)
      - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Arrays](#arrays)
    - [Creación de Arrays](#creación-de-arrays)
    - [Acceso a elementos](#acceso-a-elementos)
    - [Modificación de Arrays](#modificación-de-arrays)
    - [Métodos de Arrays](#métodos-de-arrays)
  - [Bucles](#bucles)
    - [Bucle while](#bucle-while)
    - [Bucle do-while](#bucle-do-while)
    - [Bucle for](#bucle-for)
    - [Bucle for-in](#bucle-for-in)
    - [Bucle for-of](#bucle-for-of)
    - [Ir a la siguiente clase](../funciones_y_metodos/readme.md)

## Arrays

Los arrays son estructuras de datos que permiten almacenar múltiples valores en una sola variable. Podemos verlos como una lista, coleccion de datos o tambien son conocidos como matrices de primer grado.

### Creación de Arrays

```javascript
var numeros = [1, 2, 3, 4, 5];
var frutas = ["manzana", "plátano", "fresa"];
var mezclado = [1, "dos", true];
```
Como puedes ver, la estructura de un array se establece entre corchetes, lo que ves que se agrega, son llamados elementos y estos son separados por comas. Esa es la estructura. Pueden almacenar cualquier tipo de dato.

Decimos que cada elemento ocupa un indice en el array. El indice es un numero que siempre comienza desde cero.
Por ejemplo, para la variable frutas, "manzana" se encuentra en el indice cero, "plátano" en el indice uno y "fresa" en el indice dos.

### Acceso a elementos

Podemos tener varias formas para acceder a los valores del array, veamos esta notacion que es la mas frecuente:

```javascript
var frutas = ["manzana", "plátano", "fresa"];

console.log(frutas[0]); // "manzana"
console.log(frutas[2]); // "fresa"
```

En esta como puedes intuir, le estamos pasando el indice entre corchetes, lo que nos devuelve el elemento que se encuentra en esa posicion.

### Modificación de Arrays

Podemos acceder a un indice especifico y modificar su valor

```javascript
var frutas = ["manzana", "plátano", "fresa"];

frutas[1] = "uva";
frutas[3] = "frambuesa"

console.log(frutas) // ["manzana", "uva", "fresa", "frambuesa"];
```

>NOTA: Es curioso, pero si intentas acceder a una posicion que en teoria no tiene ningun elemento, el resultado sera undefined. Por ende, podemos acceder a una posicion que tenga el valor de undefined y modificar su valor.

### Métodos de Arrays

Las estructuras de JS ya traen incorporados ciertos metodos ( un metodo es una funcion que esta especializada para hacer algo especifico, puedes ahondar en esto si vas a la clase de funciones, [aca](../funciones_y_metodos/readme.md)) te dejo el link.

```javascript
var numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Metodo length: para calcular la longitud del array
console.log(numeros.length);        // 11
// Metodo sort: para ordenar los elementos del array
console.log(numeros.sort());        // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
// Metodo indexOf: para que pasandole un elemento del array, nos diga en que indice esta. Si el elemento no esta en el array, devuelve -1.
console.log(numeros.indexOf(5));    // 4
//  Metodo lastIndexOf: para un array con elementos repetidos, nos devuelve el index del ultimo elemento.
console.log(numeros.lastIndexOf(5));// 9
// Metodo slice: corta el array segun los indices que le pasemos. Como si de un rango se tratase. No se trae al elemento del ultimo indice.
console.log(numeros.slice(2, 6));    // [4, 1, 5, 9]
// Metodo join: permite unir los elementos del array en un string. Los pega con la condicion que le pasemos entre comillas
console.log(numeros.join("-"));      // "3-1-4-1-5-9-2-6-5-3-5"
```

## Bucles

Los bucles son estructuras de control que permiten ejecutar un bloque de código varias veces. JavaScript proporciona diferentes tipos de bucles. Veamos algunos de estos:

### Bucle while

El bucle `while` ejecuta un bloque de código mientras una condición sea verdadera.

```javascript
var contador = 0;

while (contador < 5) {
  console.log("Iteración:", contador);
  contador++;
}
```
El bucle while, dice: Mientras (la condicion que me pasaste sea verdadera), entonces voy a hacer esto. 

Es de los bucles mas bonitos y tambien mas arriesgados, debido a que si no hay una condicion que corte, se puede quedar en un bucle infinirto, por ejemplo:

```javascript
var contador = 0;

while (contador < 5) {
  console.log("Iteración:", contador);
}
```

Como puedes ver es muy similar al anterior, pero en esta ocasion, no tiene la linea `contador++`, lo que implica que: la primera vez pregunta si el contador es menor a 5, lo que es verdadero, imprime "Iteracion: 0" y vuelve y pregunta si contador es menor a 5, como el contador no se incrementa, va a seguir preguntandose esto hata el infinito, lo que puede gastar recursos de nuestro pc indefinidamente. 

Asi que el bucle while esta bien, siempre y cuando no se te olvide actualizar la condicion para que en algun momento corte.

### Bucle do-while

El bucle `do-while` es similar al `while`, pero garantiza que el bloque de código se ejecute al menos una vez antes de verificar la condición. Esto quiere decir, que el codigo se ejecutara la primer vez y si la condicion no se cumple, ahi para, pero si la condicion se cumple, vuelve y ejecutaria el codigo del `do`.

```javascript
var contador = 0;

do {
  console.log("Iteración:", contador);
  contador++;
} while (contador < 5);
```

### Bucle for

El bucle `for` es una forma más compacta de escribir bucles y permite definir la inicialización, la condición y la actualización en una sola línea.

```javascript
for (var i = 0; i < 5; i++) {
  console.log("Iteración:", i);
}
```

Aca le estamos diciendo que inicialice una variable en 0, luego que compare si es menor que 5, como esto es cierto, el for, entra al bloque, ejecuta el codigo, y al final es cuando se incrementa la variable, tomando un valor de 1 para la siguiente iteracion. Ahi vuelve y pregunta, si se cumple la condicion, entra al bloque, ejecuta el codigo e incrementa la variable... Asi hasta que llega un punto en el que al incrementar la variable, al momento de hacer la comparacion, esta ya no se cumple, ahi es cuando corta el for.

### Bucle for-in

El bucle `for-in` se utiliza para iterar sobre las propiedades de un objeto.

Si aun no sabes lo que es un objeto, puedes ir a dicha clase y luego volver. Te dejo el link [aca](../objetos/readme.md)

```javascript
var persona = { nombre: "Juan", edad: 25, ciudad: "Barcelona" };

for (var propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}
```

Lo que hace este flujo es definir una variable, en este caso `propiedad`, esta variable va a ir cambiando su valor, a medida que se desplace en el objeto de propiedad en propiedad. Primero va a valer "nombre", luego "edad" y asi sucesivamente.

Por eso es que puede hacerse lo de persona[propiedad], porque esto es como decir persona["nombre"] en la primera iteracion, persona["edad"] en la segunda y asi...

### Bucle for-of

El bucle `for-of` se utiliza para iterar sobre los elementos de un dato iterable, como un array.

Si no sabes lo que es un array, es el tema que estaba al principio, asi que puedes [ir](#arrays) y luego volver

```javascript
var colores = ["rojo", "verde", "azul"];

for (var color of colores) {
  console.log(color);
}
```

¡Genial! Has cubierto bucles y arrays en JavaScript. ¡Sigue así! 🚀

Vamos con todo para la [Homework](./homework.js) 🏆

[Ir a la siguiente clase](../funciones_y_metodos/readme.md)

[Regresar al inicio](#top)

</br>