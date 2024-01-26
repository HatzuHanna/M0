<a id="top"></a>

# Variables y Tipos de Datos

#### Table of Contents

- [Variables y Tipos de Datos](#variables-y-tipos-de-datos) -
  [Table of Contents](#table-of-contents)
  - [Variables](#variables)
    - [Declarar una variable vs definir una variable](#declarar-una-variable-vs-definir-una-variable)
  - [Tipos de Datos](#tipos-de-datos)
    - [String](#string)
    - [Number](#number)
    - [Boolean](#boolean)
    - [Undefined](#undefined)
    - [Null](#null)
    - [Undefined vs Not Defined](#undefined-vs-not-defined)
    - [BigInt](#bigint)
    - [Array](#array)
    - [Object](#object)
    - [Symbol](#symbol)
    - [Function](#function-function)
    - [Ir a la siguiente clase](../operadores/readme.md)

## Variables

Una variable es un espacio de almacenamiento que es utilizado para almacenar un
valor, como cuando en el colegio veiamos que x = 1, deciamos que x era la
variable y que estaba igualada a 1. Tranqui que aca no tendremos que despejar
ecuaciones 😮‍💨

Solo recuerda que existen tres formas de definir una variable: `var`, `let` y
`const`. De momento vamos a manejar `var`.

Por ejemplo:

```javascript
var nombre;
var edad;
```

> NOTA: Como puedes ver, en JavaScript agregamos punto y coma al final de cada
> linea, pero esto no es obligatorio, el lenguaje compila si no lo agregas, sin
> embargo, la recomendacion es que si lo hagas. Para no hacerlo manualmente la
> extension Prettier de VSC las agrega automaticamente cuando guardas los
> cambios.

### Declarar una variable vs definir una variable

Como pudiste ver en el ejemplo, esas son maneras de declarar variables, sin
embargo, definir una variable implica justo eso, definirle un valor.

Para darte un ejemplo concreto veamos otro componente importante, que sera el
que determine con que vamos a llenar nuestra variable:

## Tipos de Datos

Los tipos de datos son los diferentes valores que puede tener una variable,
nosotros ya conocemos muchos de ellos, pero quizas con otros nombres, veamos los
tipos de datos mas usados:

### String

Un string es una cadena de texto, siempre van entre comillas, pueden ser
comillas dobles `("")`, comillas simples `('')` o template strings ` (``) `.

Veamos algunos ejemplos:

```javascript
var nombre = "Felipe";
var apellidos = "Ciro Montoya";
var rol = `Instructor`;
```

Ahora el uso para cada una de estas comillas difiere poco, al menos entre dobles
y simples, las templates son un tanto mas especiales.

El uso de las comillas dobles y simples no es que una sea mejor que otra, sino
que supongamos, queremos escribir una narracion y queremos citar la frase de
alguien mas, lo tipico es decir, "abro comillas" e introducir una frase, bien,
lo que sucede es que NO se puede aplicar una cita con las mismas comillas con
las que iniciaste la frase. Por ejemplo:

```javascript
// La frase a continuacion no es valida
var fraseIncorrecta = "Ayer estaba viendo la tele y el presentador dijo: "Habran 40 grados al medio dia"";
// Las posibles formas correctas son:
var fraseCorrecta1 = "Ayer estaba viendo la tele y el presentador dijo: 'Habran 40 grados al medio dia'";
var fraseCorrecta2 = 'Ayer estaba viendo la tele y el presentador dijo: "Habran 40 grados al medio dia"';
```

> NOTA: En el ejemplo anterior, vemos una variable declarada y definida, gracias
> a que tiene el var al inicio y se le esta asignando un valor.

### Number

Un number, como su nombre lo indica es un numero, a diferencia de otros
lenguajes que diferencian flotantes, enteros, entre otros, JS no discrimina. Lo
unico es que si tiene un tipo de dato para numeros extremadamente grandes
conocido como BigInt, enseguida lo abordaremos

Veamos unos ejemplos de number:

```javascript
var dni = 101202303;
var temperatura = 36.9;
var infinito = Infinity;
```

> NOTA: Como puedes ver, tambien existe la palabra reservada Infinity y a su vez
> -Infinity, las cuales nos sirven para representar una cantidad muy grande.

### Boolean

Puede ser que hayas escuchado/usado estos valores en algun momento, hablamos de
que Boolean se refiere a `true` y `false`, si, exacto, solo puede tener esos dos
valores:

```javascript
var auxiliar = true;
var off = false;
```

### Undefined

Si eres perspicaz, seguro te preguntaste que valor tomaran las variables que
solo se declaran y no se definen, es decir que no les asignamos un valor, bien
estamos en ese tipo de dato. Por defecto las variables y en general varias
estructuras toman este valor si nosotros no le definimos uno. Sin embargo, si
asi lo queremos, tambien podemos agregarlo. Veamos un ejemplo:

```javascript
var email;
var pais = undefined;

// El console.log es la manera en la que podemos verificar el valor de algo:
console.log(email); // undefined
```

> NOTA: No es recomendable definir variables con undefined, para eso existe un
> mejor tipo de dato, el null.

### Null

El null es un tipo de dato que nos permite decirle a una variable
intencionalmente que esta vacia, ya que, posiblemente nuestra intencion sera
cambiar ese valor luego.

```javascript
var dia = null;
```

> NOTA: 😵‍💫 confuso? :monocle_face: una buena analogia es: supon que tenemos un
> termo no transparente que solo podemos observar desde arriba, debido a que si
> este no tiene tapa podemos ver si el termo esta vacio o no, si el termo esta
> vacio, podemos decir que es null, sin embargo, si tiene tapa, no sabremos si
> este esta vacio o no, quedamos en incertidumbre, por ende podemos decir que es
> undefined.

### Undefined vs Not Defined

Es necesario explicar que undefined y not defined son totalmente diferentes.
Como vimos, undefined se refiere a una variable declarada, pero no definida. Not
Defined por su parte se refiere a una variable que no fue declarada ni definida
y queremos usara. Por ejemplo:

```javascript
var nombre;
console.log(nombre); // undefined
console.log(universidad); // universidad is not defined
```

> NOTA: Debemos tener mucho cuidado con esto, debido a que el "is not defined"
> hara que nuestro codigo se rompa. Tiene sentido, debido a que el codigo no
> logra encontrar dicha variable, no existe en el codigo, por lo que de
> inmediato corta la ejecucion del codigo.

### BigInt

Ya mencionado anteriormente, fue introducido en ECMAScript 2020. En JavaScript,
los números enteros se pueden representar de manera precisa hasta
Number.MAX_SAFE_INTEGER. Este valor es 2^53 - 1, que es igual
a 9007199254740991. A partir de ahi, ya son considerados como BigInt y comienzan
a adherirle una n al final del numero.

```javascript
const numeroGrande = BigInt(9007199254740991);

console.log(numeroGrande); // Output: 9007199254740991n
console.log(numeroGrande + 1n); // Output: 9007199254740992n
console.log(numeroGrande + 1); // TypeError
```

> NOTA: Como los BigInt tienen una n al final que los identifica, no es posible
> operarlos con numeros enteros, sino que se deben sumar con otros BigInt

### Array

Llegamos a una de las estructuras principales y mas usadas. Un array es una
coleccion de datos o siendo concretos, de elementos. Tambien conocidos como
listas o matrices de dimension 1. Veamos un ejemplo:

```javascript
var array = [undefined, 10, "Felipe", true, Infinity, , , null];
```

Esta estructura se compone de elementos e indices. Cada elemento ocupa una
posicion en el array. SIEMPRE en un array la posicion inicial toma el indice 0.

Para acceder a un elemento existen varias formas. La mas comun es `array[2]` con
esto le estamos indicando que queremos acceder al indice 2 del array, este valor
seria "Felipe" debido a que el primer elemento tiene el indice 0.

### Object

Hemos llegado al que posiblemente es la estructura mas importante de JS, debido
a que todo en JS es un objeto, luego vamos a entender esto a profundidad.
Primero veamos cual es su estructura:

Un objeto se conforma de pares clave valor, separadas por comas. Estas comas son
obligatorias, ya que pertimen separar un par de otro.

Ademas, la asignacion del valor a la clave debe hacerse con los `:` y no con el
`=` como estabamos acostumbrados en las variables.

```javascript
var miObjeto = {
  nombre: "Felipe",
  edad: 25,
};
```

Para acceder a los valores, existen varias formas, las mas comunes son: Dote
Notation ( Notacion de punto ) y Bracket Notation ( Notacion de corchetes ).

```javascript
// Dot Notation:
console.log(miObjeto.nombre); // "Felipe"
console.log(miObjeto.edad); // 25
console.log(miObjeto.email); // undefined
// Bracket Notation
console.log(miObjeto["nombre"]); // "Felipe"
console.log(miObjeto["edad"]); // 25
console.log(miObjeto["email"]); // undefined
// Podemos usar la notacion de corchetes si tenemos el valor que le queremos pasar alojado en una variable:
var propiedad = "edad";
console.log(miObjeto[propiedad]); // 25
```

> NOTA: Si tratamos de acceder a una propiedad del objeto que no existe, nos
> arrojara undefined.

### Symbol

Introducido en ES6. Permite crear valores unicos

Por ejemplo:

```javascript
var simboloUnico = Symbol("nombre");
// Lo que se termina guardando en simboloUnico no es visible.
// Este tipo de dato es util en los objetos, para que los nombres de las propiedades no sean "visibles"
var myObject = {
  [mySymbol]: "Esto es un secreto",
};
console.log(myObject["nombre"]); // undefined
console.log(myObject[mySymbol]); // 'Esto es un secreto'
```

### Function

Este tipo de dato es el ultimo y mas especial, no el mas importante, pero si el
mas especial. Esto debido a que nosotros vamos a escribir la mayor parte del
tiempo funciones, van a ser muy utiles, pensemos una funcion como una fabrica
que recibe una materia prima ( tela ) y devuelve un resultado luego de haber
procesado esa materia prima ( un pantalon ).

Por ejemplo:

```javascript
function sumar(a, b) {
  return a + b;
}
var resultado = sumar(4, 6);
console.log(resultado); // 10
```

> NOTA: Como puedes observar las funciones tienen su propia palabra reservada
> function, gracias a esta podemos crear la estructura, sin embargo tambien
> podemos crear funciones en variables. Tienen comportamientos diferentes que
> veremos en modulos posteriores.

```javascript
var sumar = function (a, b) {
  var operacion = a + b;
  return operacion;
};
var resultado = sumar(4, 6);
console.log(resultado); // 10
```

La funcion recibe unos parametros, en nuestro caso son a y b, hace una
transformacion, en este caso los esta sumando y retorna, es decir, que devuelve
su resultado

> NOTA: Una funcion que no retorna nada, por defecto estaria retornando
> undefined

```javascript
function saludar() {
  console.log("Hola");
}
var saludo = saludar();
console.log(saludo); // undefined
```

Esto es debido a que el console.log nos arroja un valor a nosotros, pero no le
devuelve un valor al codigo. Es como una impresora, nos puede imprimir un
documento a nosotros, pero eso no asegura que lo escaneo y lo guardo en el pc.

Genial, has completado la primera parte. 🚀 Continua aprendiendo! 🤓

Vamos con toda para la [Homework](./homework.js) 🥇

[Ir a la siguiente clase](../operadores/readme.md)

[Regresar al inicio](#top)

</br>
