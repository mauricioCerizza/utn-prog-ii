---
title: Matrices
sidebar_label: Matrices
slug: /apuntes/matrices-colecciones/matrices
---

Las matrices, también llamadas arrays, arreglos o vectores, son estructuras de datos que nos permiten almacenar múltiples variables **del mismo tipo**.

## Características de las matrices
### Dimensionalidad 
Las matrices pueden ser **unidimensionales**, **bidimensionales** o **multidimensionales**.

Las matrices unidimensionales tienen una sola dimensión. , es decir, tener una sola dimensión. multidimensionales. 

### Tamaño fijo
La cantidad y el tamaño de las dimensiones son establecidos al momento de instanciar la matriz **y no pueden ser cambiados**. Si necesitamos alterar el tamaño de un array, tendremos que instanciar uno nuevo con distinta longitud y migrar los datos almacenados en el array original. 

### Indexación base-cero 
Se puede acceder a los elementos de una matriz a través de un índice numérico entero. En el caso de las matrices con más de una dimensión será un sub-índice por dimensión, y se accederá a un elemento específico con una determinada combinación de los distintos sub-índices. 

Se dice que las matrices tienen indexación de base-cero (zero indexed) porque sus elementos pueden ser accedidos a través de un índice numérico que comienza en el número cero y se incrementa de uno en uno.

Si tenemos un array con tamaño **_n_**, su primera posición se accederá con el **_índice 0_** y la última con el **_índice n-1_** (el tamaño menos uno).

### Seguridad de tipos
Los elementos de una matriz pueden ser de cualquier tipo, incluyendo el tipo Array.

Todos los elementos de una matriz son inicializados en su valor por defecto. 


Las matrices tienen indexación base-cero (zero indexed). 
Sus elementos pueden ser accedidos a través de un índice numérico que comienza en el número cero y se incrementa de uno en uno.

Todos los elementos de una matriz son inicializados en su valor por defecto.
Los elementos pueden ser de cualquier tipo, incluyendo el tipo Array.


### Multi-plataforma
Existió una época donde esta plataforma sólo nos permitía trabajar para Windows, pero esos tiempos quedaron muy atrás. Desde la salida de .NET Core en 2016, podemos implementar nuestros sitios web, aplicaciones para servidores y programas de consola también en Linux y macOS. 

### Open Source
El [código fuente de .NET](https://github.com/dotnet) es público y es mantenido por miles de desarrolladores y compañias. Es soportado por [.NET foundation](https://dotnetfoundation.org/), una organización sin fines de lucro, la cual se encarga de promover el desarrollo y la colaboración alrededor del ecosistema de .NET.

### Multi-lenguaje
.NET admite varios lenguajes de programación, los cuales se pueden utilizar para programar sobre la plataforma:

**C#** → Lenguaje orientado a objetos con una sintaxis similar a C y JAVA.

**F#** →  Lenguaje orientado principalmente a la programación funcional, de sintaxis liviana.

**Visual Basic** → La sintaxis de este lenguaje es la que más se asemeja al lenguaje humano (inglés), lo que facilita el trabajo para personas sin experiencia en el desarrollo de software. 

## Componentes de .NET
![.NET Platform](/clases/apuntes/introduccion/dotnet5_platform.png)

#### Runtime
Un runtime (entorno de ejecución, en español) es un programa encargado de ejecutar y administrar 

#### Base Class Library
Cuando trabajamos con .NET contamos con

#### Frameworks

#### Herramientas 
Lo que hace a una plataforma de desarrollo es que nos otorga todas las herramientas necesarias para llevar el diseño de un sistema a su implementación en la realidad. 

Además de las antes mencionadas, .NET integra las siguientes herramientas:
* __[.NET CLI](https://docs.microsoft.com/en-us/dotnet/core/tools/)__ → Una interfaz de línea de comandos que nos provee una serie de instrucciones de consola que nos permitirán desarrollar, construir, ejecutar y públicar aplicaciones construidas con .NET. 
* __Compiladores__ para los lenguajes soportados.
* __MSBuild__ → Un motor para cargar y construir nuestras aplicaciones.
* __[NuGet](https://www.nuget.org/)__ → Un administrador de paquetes desde donde podremos incorporar distintas librerías a nuestros proyectos, muchas de ellas desarrolladas por la comunidad.

## Common Type System
El Common Type System (CTS) define un conjunto de tipos de datos común a todos los lenguajes soportados por .NET. 

* Establece un marco de herramientas que habilita la ejecución de los distintos lenguajes de la plataforma. 
* Provee un modelo orientado a objetos. 
* Define un conjunto de reglas que todos los lenguajes deben seguir en lo que refiere a tipos.
* Provee una biblioteca que contiene los tipos primitivos básicos (Boolean, Int32, Byte, Char, etc). 
* Define tipos de dato en dos categorías: de valor y de referencia.

### Tipos de valor y tipos de referencia
Los **tipos de valor** son tipos de dato representados por su valor real. Si son asignados a una variable, esa variable obtendrá una nueva copia del valor. 

Los **tipos de referencia**, al contrario, son tipos de dato representados por una referencia que apunta a un sector de memoria donde se encuentra el valor real. Si son asignados a una variable, esa variable almacenará la referencia y apuntará al valor original. No se realiza ninguna copia del valor.
La referencia se almacena en 

### Categorías de tipos
.NET define cinco categorías de tipos de datos.

| Categoría       | Valor/Referencia   | Descripción |
| --------------- | ------------------ | ----------- |
| **Clases**      | Tipo de referencia |             |
| **Estructuras** | Tipo de valor      |             |
| **Enumerados**  | Tipo de valor      |             |
| **Interfaces**  | Tipo de valor      |             |
| **Delegados**   | Tipo de referencia |             |

Entraremos en el detalle de cada una de estas categorías a lo largo de la cursada. 




