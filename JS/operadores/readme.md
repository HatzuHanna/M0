<a id="top"></a>

# Operadores

#### Table of Contents
- [Operadores](#operadores)
      - [Table of Contents](#table-of-contents)
  - [Definicion general](#definicion-general)
  - [Operadores aritmeticos](#operadores-aritmeticos)
  - [Operadores logicos](#operadores-logicos)
    - [AND](#and)
    - [OR](#or)
    - [NOT](#not)
  - [Operadores de asignacion](#operadores-de-asignacion)
  - [Operadores de comparacion](#operadores-de-comparacion)
    - [Mayor que \>](#mayor-que-)
    - [Menor que \>](#menor-que-)
    - [Igualdad sencilla ==](#igualdad-sencilla-)
    - [Igualdad estricta ===](#igualdad-estricta-)
    - [Mayor o igual que \>=](#mayor-o-igual-que-)
    - [Menor o igual que \<=](#menor-o-igual-que-)
    - [Diferencia sencilla !=](#diferencia-sencilla-)
    - [Diferencia estricta !==](#diferencia-estricta-)
  - [Operadores de Incremento/Decremento ++ --](#operadores-de-incrementodecremento----)
  - [Operadores de Concatenacion](#operadores-de-concatenacion)
  - [Operador ternario](#operador-ternario)
  - [Ir a la siguiente clase](../condicionales/readme.md)


## Definicion general

Los operadores son simbolos o palabras clave que en programacion se utilizan para realizar operaciones aritmeticas, logicas, de asignacion, de comparacion, de incremento, de concatenacion y muchas mas.

Veamos las mas usadas:

## Operadores aritmeticos

Realizan operaciones matematicas basicas.

```javascript
var a = 5;
var b = 2;

var suma = a + b;        // Suma: 7
var resta = a - b;       // Resta: 3
var multiplicacion = a * b;   // Multiplicación: 10
var division = a / b;    // División: 2.5
var modulo = a % b;      // Módulo (resto): 1
var exponenciacion = a ** b; // Exponenciacion: 25
```

>NOTA: El modulo o resto, representado con `%`, es la operacion resultante de tomar el residuo de la division, en el ejemplo anterior, si dividimos 5 entre 2, el cociente es 2 y el residuo 1.

## Operadores logicos

Son muy utilizados, corresponden a las tablas de verdad, brevemente te doy un repaso:
Existen 3 operadores logicos basicos: AND, OR, NOT.

### AND

El AND se representa en matematicas con `^`, pero en javascript lo usamos con `&&`. La forma mas facil de recordarlo es que solo es verdadero si todas las sentencias son verdaderas, en otras palabras, si al menos una sentencia es falsa, todo es falso:

```javascript
var p = true;
var q = true;
var r = false;

console.log(p && q); // true
console.log(p && r); // false
```

### OR

El OR se representa en matematicas con `v`, pero en javascript lo usamos con `||`. La forma mas facil de recordarlo es que solo es falso si todas las sentencias son falsas, en otras palabras, si al menos una sentencia es verdadera, todo es verdadero:

```javascript
var p = false;
var q = false;
var r = false;
var s = true

console.log(p || q || r); // false
console.log(p || q || r || s); // true
```

### NOT

El Not en matematicas se representa con `-`, pero en programacion lo usamos con `!`. Y en escencia se basa en negar la sentencia.

```javascript
var p = true;
var q = false;

console.log(!p); // false 
console.log(!q); // true
```

## Operadores de asignacion

Asignan valores a las variables.

```javascript
var a = 4;
var b = 5;

a += b; // Equivale a hacer: a = a + b
a -= b; // Equivale a hacer: a = a - b 
```

## Operadores de comparacion

Seguramente sean de los que mas usaremos. Nos permiten justamente eso, comparar dos valores y devolver un boolean.

Existen diversos operadores de comparacion, para no dar muchas definiciones, con los ejemplos seran sufientes:

### Mayor que >
```javascript
var m = 7;
var n = 10;

console.log(m > n); // false 
```
### Menor que >
```javascript
var m = 7;
var n = 10;

console.log(m < n); // true 
```
### Igualdad sencilla ==
Compara el valor.
```javascript
var m = 7;
var n = "7";
var o = 7;

console.log(m == o); // true 
console.log(m == n); // true 
```

>NOTA: Parece extraño que `m == n`, sucede que para JavaScript, el valor de `7` y `"7"` es el mismo. por eso arroja `true`.
### Igualdad estricta ===
Compara el valor y el tipo de dato.
```javascript
var m = 7;
var n = "7";
var o = 7;

console.log(m === o); // true 
console.log(m === n); // false 
```
>NOTA: En este caso si arroja `false`, esto es porque ademas de comparar el valor, compara el tipo de dato, uno es de tipo Number y el otro de tipo String, por eso arroja `false`.
### Mayor o igual que >=
```javascript
var m = 7;
var n = 6;
var o = 7;

console.log(m >= o); // true 
console.log(m >= n); // true 
```
### Menor o igual que <=
```javascript
var m = 7;
var n = 6;
var o = 7;

console.log(m <= o); // true, ya que, m y o son iguales
console.log(m <= n); // false 
```
### Diferencia sencilla !=
Compara el valor.
```javascript
var m = 7;
var n = "7";
var o = 7;

console.log(m != o); // false
console.log(m != n); // false, para JS no son diferentes en su valor, ambos son 7
```
### Diferencia estricta !==
Compara el valor y el tipo de dato.
```javascript
var m = 7;
var n = "7";
var o = 7;

console.log(m !== o); // false
console.log(m !== n); // true, ya que, ahora ademas del valor, compara el tipo de dato
```
## Operadores de Incremento/Decremento ++ --

Aumentan o disminuyen el valor de una variable.
```javascript
var contador = 0;

contador++;    // Es equivalente a: contador = contador + 1;
contador--;    // Es equivalente a: contador = contador - 1;
```
## Operadores de Concatenacion

Concatenan cadenas de texto.

```javascript
var nombre = "Felipe";
var apellido = "Ciro Montoya";

var nombreCompleto = nombre + " " + apellido;  // "Felipe Ciro Montoya"
```

Tambien existe una forma de concatenar incorporada en ECMA2015 con `` que es equivalente a la anterior:

```javascript
var nombre = "Felipe";
var apellido = "Ciro Montoya";

var nombreCompleto = `${nombre} ${apellido}`;  // "Felipe Ciro Montoya"
```

## Operador ternario ? :

Este operador es una alternativa al condicional if/else, si no has visto este condicional, puedes echarle un vistazo, dando click [aqui](../condicionales/readme.md/#condicionales-if-else) y luego vuelves aqui.

El mecanismo del ternario es el siguiente:

Si tienes una operacion que te arroja un boolean, puedes agregarle `?` al final para declarar lo que va a ocurrir en caso de que sea true y luego de este agregarle un `:` para declarar lo que se hara en caso de un false. Por ejemplo:

```javascript
var edad = 20;

var esMayor = edad > 18 ? "Mayor de edad" : "Menor de edad"
```

Felicidades por llegar hasta aca! 🥳
Continua aprendiendo! :nerd_face:🚀

Vamos con toda para la [Homework](./homework.js) 🥇

[Ir a la siguiente clase](../condicionales/readme.md)

[Regresar al inicio](#top)

</br>