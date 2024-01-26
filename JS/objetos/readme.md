<a id="top"></a>

# Objetos en JavaScript

#### Tabla de Contenidos
- [Objetos en JavaScript](#objetos-en-javascript)
      - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Objetos](#objetos)
    - [Creación de Objetos](#creación-de-objetos)
    - [Acceso a Propiedades](#acceso-a-propiedades)
    - [Modificación de Propiedades](#modificación-de-propiedades)
    - [Métodos de Objetos](#métodos-de-objetos)
  - [Objeto Math](#objeto-math)

## Objetos

Los objetos son estructuras de datos que permiten almacenar y organizar información de una manera muy particular. En JavaScript, los objetos se componen de pares clave-valor.

### Creación de Objetos

```javascript
var persona = {
  nombre: "Carlos",
  edad: 25,
  ciudad: "Madrid"
};
```

En este ejemplo vemos como la estructura principal del objeto son las llaves, seguida por una serie de pares clave-valor separados por comas. 
Las claves son palabras como si de declarar una variable se tratase.
Los valores pueden ser de cualquier tipo: string, boolean, number, incluso function.

>NOTA: cuando el valor de una propiedad es de tipo funcion, dicha propiedad pasa a llamarse metodo.

### Acceso a Propiedades

Tenemos dos formas de acceder a un objeto, bracjet notation y dot notation, veamos:
```javascript
// Dot notation:
console.log(persona.nombre); // "Carlos"
console.log(persona.edad);   // 25

// Bracket notation:
console.log(persona["nombre"]); // "Carlos"
console.log(persona["edad"]);   // 25
```

### Modificación de Propiedades

Podemos modificar los valores de un objeto, luego de que este haya sido creado, esto es por medio de asignaciones. Veamos un ejemplo:
```javascript
persona.edad = 26;
persona.ciudad = "Barcelona";

console.log(persona.edad); // 26
```

### Métodos de Objetos

Como mencionaba al principio, los objetos cuyas propiedades tienen como valor una funcion, son llamados metodos. En el siguiente ejemplo, el objeto perro tiene dos metodos: ladrar y dormir.

```javascript
var perro = {
  nombre: "Buddy",
  ladrar: function() {
    console.log("Guau, guau!");
  },
  dormir: function() {
    console.log("Zzz...");
  }
};

// Para poner en marcha las funciones, simplemente se accede a ellas con alguna de las dos formas y se ejecuta la funcion.

perro.ladrar(); // "Guau, guau!"
perro.dormir(); // "Zzz..."
```

## Objeto Math

El objeto Math proporciona funciones y propiedades para realizar operaciones matemáticas.

```javascript
// Metodo sqrt: raiz cuadrada
console.log(Math.sqrt(25));     // 5
// Metodo abs: valor absoluto
console.log(Math.abs(-7));      // 7
// Metodo pow: Elevar el primer parametro al segundo. 2 a la 3: 2*2*2
console.log(Math.pow(2, 3));     // 8
// Metodo random: Arroja un numero entre 0 y 1
console.log(Math.random());     // Número aleatorio entre 0 (inclusive) y 1 (exclusivo)
// Metodo floor: redondea hacia abajo
console.log(Math.floor(4.9));    // 4 
// Metodo ceil: redondea hacia arriba
console.log(Math.ceil(4.1));     // 5 
// Metodo round: Redondea para abajo o para arriba, dependiendo de cual este mas cerca
console.log(Math.round(4.1));     // 4 
console.log(Math.round(4.6));     // 5 
```

¡Felicidades! Ahora has cubierto la creación y manipulación de objetos en JavaScript, así como el uso del objeto Math.

Vamos con todo para la [Homework](./homework.js) 🏆

Has finalizado con exito la ruta de aprendizaje para este modulo 🫠🥳
¡Nunca pares de aprender! 🚀

[Regresar al inicio](#top)

</br>