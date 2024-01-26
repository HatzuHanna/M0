<a id="top"></a>

# CSS - Cascading Style Sheets - Hojas de Estilo en Cascada

#### Table of Contents

- [CSS - Cascading Style Sheets - Hojas de Estilo en Cascada](#css---cascading-style-sheets---hojas-de-estilo-en-cascada)
      - [Table of Contents](#table-of-contents)
  - [Partes de un archivo CSS](#partes-de-un-archivo-css)
  - [Herencia](#herencia)
  - [Selectores](#selectores)
  - [Combinando selectores](#combinando-selectores)
  - [Pseudoclases](#pseudoclases)
  - [Particularidades](#particularidades)
  - [Agregando estilos a mi primera pagina web](#agregando-estilos-a-mi-primera-pagina-web)
  - [Herramientas utiles](#herramientas-utiles)
  - [Ir a la clase de HTML](../html/readme.md)
  - [Ir a la clase de JS](../../JS/readme.md)


El CSS es un lenguaje de diseño, de estilado y declarativo para describir el
como se ven los elementos en un documento.

El nombre de Hoja de estilo en cascada, se refiere a la forma en como se aplican
los estilos al documento, es decir, que debemos tener en cuenta el orden en el
cual se imponen los estilos. Tener un estilo por encima o por debajo de otro
afecta significativamente el resultado final.

## Partes de un archivo CSS

Las partes de un CSS son:

1.  El selector: Es el nombre que va a tomar el estilo, podemos usar nombres de
    las etiquetas para darle estilo a esa etiqueta en si o nombres especificos,
    estos nombres especificos seran tomados gracias al atributo id o al atributo
    class de la etiqueta CSS.
2.  Prodiedad: Una propiedad es aquella que ya viene nativa de css y que nos
    permite aplicar un tipo de estilo u otro.
3.  Valor: Es el que se le asigna a una propiedad para poder personalizarla
4.  Declaracion: Es agrupar una propiedad y un valor.

Veamos un ejemplo:

```css
selector {
  propiedad: valor; /* Esta linea es una declaracion */
}
/* Miremos como se acopla cada uno de estos conceptos: */
h1 {
  justify-content: center; /* Esta linea es una declaracion */
}
```

Como he mencionado antes, el estilo en cascada genera que si aplicamos estilos a
una etiqueta, estos se apliquen a todas las etiquetas que coincidad con el
nombre o el atributo de referencia ( id o class )

Revisa la carpeta prueba y veras dos archivos prueba.html y prueba.css

Si pones en marcha el html, te daras cuenta de esto que te comento.

## Herencia

Cuando trabajamos con CSS sabemos que ocurre un efecto en cascada, a esto se le
conoce como herencia. Esto es que cuando estilamos una etiqueta, todas las
etiquetas que se encuentren en el contenido de dicha etiqueta, heredaran los
mismos estilos.

```html
<article>
  <h1>Hola mundo</h1>
</article>
```

```css
article {
  color: red;
}
```

Te invito a que modifiques los archivos que se encuentran en la carpeta
'herencia' y verifiques esto que te comento.

Una vez hayas hecho eso, te animo a que ahora, rompas esa herencia, agregando
css al h1

```css
h1 {
  color: blue;
}
```

De esta manera si necesitamos algo particular diferente a los estilos provistos
por la herencia, lo podremos hacer.

> NOTA: No todas las propiedades son heredables, por ejemplo border, si le
> aplicas el border a una etiqueta, las que estan contenidas, no lo van a
> heredar, para esto, puedes forzarlo agregando la declaracion: border: inherit
> en la etiqueta interna que quieres que lo herede. Te animas a probarlo?

## Selectores

Como mencionaba al principio, puedes darle estilos a un elemento llamandolo por
el nombre de la etiqueta, pero tambien por medio de sus atributos id y class.

Visualiza este ejemplo en la carpeta selectores, veras que aunque las etiquetas
tengan el mismo nombre, los estilos seran unicos y diferentes

Abrelo en el navegador y podras comprobarlo 🙂

> NOTA: Te recomiendo que uses esto para casos particulares, debido a que si
> creas selectores para cada etiqueta, no aprovechas el estilo en cascada y a
> fin de cuentas vamos a tener que repetir mucho codigo.

## Combinando selectores

Ya viste lo facil que es darle estilos a un elemento, pero entenderas que es muy
tedioso tener que escribir etiqueta tras etiqueta, hay una forma muy util de
darle estilos a varias etiquetas al mismo tiempo.

Puedes ver el ejemplo en la carpeta combinando_selectores.

## Pseudoclases

La mayoria de las funcionalidades interesantes se agregan gracias a las
pseudoclases y es que, permiten animar, "darle un poco mas de vida" a los
elementos, gracias a las transiciones, animaciones y demas.

Para ver un ejemplo, te invito a que visites la carpeta pseudoclases

## Particularidades

1. El CSS admite una variedad de colores, incluso agregar transparencia, antes
   para esto se utilizaba

`color: rgba(0,0,0, 90%); `

Esto ha quedado deprecado y se recomienda utilizar `color: rgb(0 0 0 / 90%)`

2. Puedes utilizar transpoarent, para literalmente volver un elemento
   transparente `color: transparent`.

3. Para los colores con codigos hexadecimales, hay una version mas corta, por
   ejemplo si el color es color: `#0055ff`, puedes convertirlo en `#05f`, esto
   solo aplica si como ves, se repite o se esta duplicado cada numero.

## Agregando estilos a mi primera pagina web

Ahora te invito a que observes el archivo index.css y hagas comentarios tratando
de interpretar que hace cada linea, si no conoces una linea, no te preocupes, la
puedes probar con la herramienta que te dejo en "Herramientas utiles" al final
de este documento.

Por ultimo, vincula este index.css al index.html creado en la seccion anterior,
recuerda usar la etiqueta link para hacerlo

## Herramientas utiles

Practica HTML, CSS y JS en un solo lugar y mira los cambios en vivo
[Link](https://codi.link/%7C%7C)

Curso para aprender y entender CSS [Link](https://lenguajecss.com/css/)

[Ir a la clase de JS](../../JS/readme.md)
</br>

[Ir a la clase de HTML](../html/readme.md)

[Regresar al inicio](#top)

</br>
