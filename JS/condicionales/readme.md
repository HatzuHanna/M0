<a id="top"></a>

# Condicionales

#### Tabla de Contenidos

- [Condicionales](#condicionales)
      - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Definición general](#definición-general)
  - [Condicionales if](#condicionales-if)
  - [Condicionales if-else](#condicionales-if-else)
  - [Condicionales if-else if-else](#condicionales-if-else-if-else)
  - [Condicionales switch](#condicionales-switch)
  - [Ir a la siguiente clase](../bucles_y_arrays/readme.md)

## Definición general

Los condicionales son estructuras de control de flujo que nos permiten ejecutar
bloques de código dependiendo de si se cumple o no una condición. En JavaScript,
los condicionales son fundamentales para controlar el comportamiento del
programa.

## Condicionales if

El condicional `if` se utiliza para ejecutar un bloque de código si una
condición es verdadera.

```javascript
var edad = 20;

if (edad > 18) {
  console.log("Mayor de edad");
}
```

## Condicionales if-else

El condicional if-else se utiliza para ejecutar un bloque de código si la
condición es verdadera y otro bloque si es falsa.

```javascript
var edad = 16;

if (edad > 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}
```

La version del if-else en ternario para este caso en particular seria:

```javascript
var edad = 16;

edad > 18
? console.log("Mayor de edad")
: console.log("Menor de edad");
```

>NOTA: Por lo general se identa los ternarios de esta forma para que sea mas legible.

## Condicionales if-else if-else

El condicional if-else if-else permite evaluar múltiples condiciones en
secuencia.

```javascript
var hora = 15;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
```

>NOTA: Se pueden crear flujos de condicionales ternarios enlazados, pero se recomienda que sean como maximo 3, ya que, puede incluso llegar a ser mas confuso la lectura

Para el ejemplo anterior, la version de ternarios seria:

```javascript
var hora = 15;

hora < 12 
? console.log("Buenos días")
: hora < 18
? console.log("Buenas tardes")
: console.log("Buenas noches");
```

## Condicionales switch

El condicional switch se utiliza para evaluar una expresión contra múltiples
casos.

```javascript
var dia = "Lunes";

switch (dia) {
  case "Lunes":
    console.log("Comienzo de semana");
    break;
  case "Viernes":
    console.log("¡Viernes, por fin!");
    break;
  default:
    console.log("Otros días de la semana");
}
```

En el codigo anterior, el switch se queda "escuchando" los posibles valores que puede tomar la variable dia, dependiendo de cada caso, hace una cosa o la otra.

Es recomendable usar un caso por defecto por si el valor ingresado no matchea con ningun caso posible.

Ademas, el break, hace que si entra en un caso en particular, corte la ejecucion de codigo y no revise los demas casos, esto es sumamente importante, nos podemos llegar a encontrar problemas si no manejamos bien el corte.

Felicitaciones por llegar hasta aquí! 🎉
¡Continúa aprendiendo! 🤓🚀

Vamos con todo para la [Homework](./homework.js) 🏆

[Ir a la siguiente clase](../bucles_y_arrays/readme.md)

[Regresar al inicio](#top)

</br>