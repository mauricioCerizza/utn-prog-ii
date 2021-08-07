# UTN Fra - Apuntes y ejercicios de Programación II <!-- omit in toc -->
***This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.***

- [Cómo trabajar con el proyecto](#cómo-trabajar-con-el-proyecto)
  - [Ejecución local](#ejecución-local)
  - [Despliegue en producción](#despliegue-en-producción)
  - [Versionado de código fuente](#versionado-de-código-fuente)
  - [Generar apuntes en PDF](#generar-apuntes-en-pdf)
- [Convenciones](#convenciones)
  - [Estructura del proyecto](#estructura-del-proyecto)
    - [Índice](#índice)
    - [Apuntes](#apuntes)
    - [Ejercitación práctica](#ejercitación-práctica)
  - [Ejemplos de código](#ejemplos-de-código)
  - [Archivos estáticos](#archivos-estáticos)
  - [Comentarios y pendientes](#comentarios-y-pendientes)

## Cómo trabajar con el proyecto
Este proyecto es una web estática construida con el framework [Docusaurus 2](https://v2.docusaurus.io/). Para más detalles de su funcionamiento consultar la documentación oficial: https://docusaurus.io/docs.

### Ejecución local
Para correr el proyecto localmente ejecutar el siguiente comando desde el directorio raíz:

```console
npm run docusaurus start
```

### Despliegue en producción
Para poder realizar el despliegue se deberá configurar la siguiente variable de entorno en el sistema operativo:

```console
GIT_USER=<Tu usuario en GitHub>
```

El valor de la variable debe ser el usuario de github con el que se tenga privilegios para trabajar sobre el repositorio. 

Por último, para realizar el despliegue se deberá ejecutar desde el directorio raíz el siguiente comando:

```console
npm run docusaurus deploy
```

### Versionado de código fuente
Se deberá mantener el repositorio con el código fuente actualizado. 

Siempre pushear a la rama `master`, salvo que se esté trabajando por algún motivo en otra rama que finalmente igual deberá ser mergeada a `master`. 

### Generar apuntes en PDF
Para generar los apuntes en PDF se deberá ejecutar el siguiente comando desde el directorio raíz (***después de haber deployado la última versión***):

```console
npx mr-pdf --initialDocURLs="https://mauriciocerizza.github.io/utn-prog-ii/docs/clases/programa" --contentSelector="article" --paginationSelector=".pagination-nav__item--next > a" --excludeSelectors=".margin-vert--xl a" --coverImage="https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg" --coverTitle="Programación II" --pdfFormat="A4" --outputPDFFilename="static/clases/Programacion-II.pdf"
```

## Convenciones
### Estructura del proyecto
Se deberá trabajar dentro de la carpeta `clases` la cual cuenta con varios directorios hijos, cada uno representando un tema de la materia. 

Cada una de estas sub-carpetas se divide en 3 partes:
#### Índice 
Aquí se encontrarán los enlaces a cada una de las páginas de apuntes y a cada ejercicio. 

Comenzará con un ***resumen*** del tema, seguido de los enlaces a los ***apuntes*** y cuestionario, ***ejercicios prácticos*** y, por último, también contendrá las referencias a la ***bibliografía*** del tema.

#### Apuntes 
En la carpeta `Apuntes` iremos generando un archivo `.md` por cada página de apuntes. 

Cada uno de estos archivos empezará con un número de dos dígitos que deberá incrementarse de acuerdo al orden que se establezca para cada página. 

Todo conjunto de apuntes finaliza con el ***cuestionario*** teórico del tema en cuestión. 

A medida que se agregan nuevas páginas, se deberá ir actualizando el índice para el tema en cuestión. 

#### Ejercitación práctica
Cada ejercicio práctico deberá estar colocado dentro de la carpeta `Ejercicios` de su respectivo tema. 

Se deberá generar un archivo `.md` por cada ejercicio, el cual deberá ser nombrado siguiendo la siguiente ***categorización***:

| Categorías               | Prefijo       | Descripción                                                                                                                                                                 |
| ------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Introductorio            | I##           | Se enfocan en el contenido de la sección, no dependen de ejercicios previos y vienen acompañados de un diagrama de clase o descripción paso a paso de lo que hay que hacer. |
| Análisis funcional       | A##           | Plantean un requerimiento funcional y no especifican en profundidad cómo resolverlo. Sirven para ejercitar la creatividad junto con las capacidades de análisis y diseño.   |
| Corrección de errores    | E##           | Son ejercicios de detección y corrección de errores, una tarea habitual en el ambiente profesional.                                                                         |
| Consolidación            | C##           | Sirven para ejercitar el tema de la sección en conjunto con los aprendidos en clases anteriores. Pueden tener dependencias con ejercicios previos.                          |
| Investigación            | R##           | Para resolverlos se requerirá investigar contenido no abarcado por el temario. Son desafiantes y refuerzan las habilidades de búsqueda de soluciones en internet, aprendizaje auto-didacta e interpretación de documentación. |

Al final de cada página de ejercicio podremos enlazar la ***resolución*** en código y/o video.

A medida que se agregan nuevos ejercicios, se deberá ir actualizando el ***índice*** para el tema en cuestión. 

### Ejemplos de código
Para insertar fragmentos de código en la documentación se deberá utilizar la siguiente sintaxis:

````markdown
  ```csharp
  public class Prueba
  {
    string s = "C# syntax highlighting"
    Console.WriteLine(s)
  }
  ```
````

:fire: **NO utilizar imagenes para mostrar código, es dificil de mantener y no permite copiar y pegar.** 

### Archivos estáticos
Los archivos estáticos se deberán almacenar en la carpeta `static` la cual refleja una estructura similar a la carpeta `docs`.

Cuando se necesite almacenar una imagen, diagrama, documento, o cualquier otro archivo estático, se deberá colocar en la carpeta correspondiente a donde esté ubicada la página donde se mostrará.

Por ejemplo, si se trata de un diagrama que se mostrará en los ejercicios de colecciones, va en el directorio `static/clases/06-colecciones/Ejercicios/`. Si se tratara de una imagen para un apunte: `static/clases/06-colecciones/Apuntes/`.

Para insertar una imagen con markdown se utiliza la siguiente sintaxis:

```markdown
![Descripción de la imagen](/directorio/imagen.png)
``` 

### Comentarios y pendientes
Para hacer un ***comentario*** en markdown se deberá usar la siguiente sintaxis:

```markdown
[//]: # "Comentario"
```

Para marcar una ***tarea pendiente***, se deberá dejar un comentario con el **prefijo TODO**:

```markdown
[//]: # "TODO Descripción de tarea pendiente"
```