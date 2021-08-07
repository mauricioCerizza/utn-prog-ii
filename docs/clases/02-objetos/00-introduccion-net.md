---
title: Introducción a .NET
sidebar_label: Introducción a .NET
slug: /apuntes/objetos/abstracción
---

En esta asignatura haremos uso de la plataforma de desarrollo .NET y del lenguaje de programación C# para entender conceptos y prácticas que son comunes a muchas otras herramientas que se utilizan al desarrollar software. 

## Introducción a .NET
.NET (*pronunciado como “dot net”*) es una plataforma gratuita y de código abierto que nos provee una serie de herramientas y programas para construir fácilmente una gran variedad de software, así como el entorno necesario para ejecutarlo sobre distintas arquitecturas y sistemas operativos. 

### Características de .NET
En esta sección se apuntará a introducir las principales características de la plataforma para que puedan alcanzar un entendimiento general sobre las herramientas que utilizaremos durante la cursada.

#### Multi-plataforma
Existió una época donde esta plataforma sólo nos permitía trabajar para Windows, pero esos tiempos quedaron muy atrás. Desde la salida de .NET Core en 2016, podemos implementar nuestros sitios web, aplicaciones para servidores y programas de consola también en Linux y macOS. 

#### Open Source
El [código fuente de .NET](https://github.com/dotnet) es público y es mantenido por miles de desarrolladores y compañias. Es soportado por [.NET foundation](https://dotnetfoundation.org/), una organización sin fines de lucro, la cual se encarga de promover el desarrollo y la colaboración alrededor del ecosistema de .NET.

#### Multi-lenguaje
.NET admite varios lenguajes de programación, los cuales se pueden utilizar para programar sobre la plataforma:

**C#** → Lenguaje orientado a objetos con una sintaxis similar a C y JAVA.

**F#** →  Lenguaje orientado principalmente a la programación funcional, de sintaxis liviana.

**Visual Basic** → La sintaxis de este lenguaje es la que más se asemeja al lenguaje humano (inglés), lo que facilita el trabajo para personas sin experiencia en el desarrollo de software. 

### Componentes de .NET
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
* __NuGet__ → Un administrador de paquetes desde donde podremos incorporar distintas librerías a nuestros proyectos, muchas de ellas desarrolladas por la comunidad.

## Introducción a C#
Durante nuestro viaje a través de las características comunes de los lenguajes de alto nivel y la programación orientada a objetos nos acompañará el lenguaje de programación C#. 

Tal vez algunas de las características de este lenguaje les parezcan similares a otros lenguajes que conozcan, y están en lo correcto. El equipo de C#, desde sus inicios, no dudo en tomar grandes ideas de otros lenguajes y reformarlas para incorporarlas a C#. Las principales influencias han sido Java (sobre todo en los inicios), y más cerca en el tiempo el mismísimo F#. 

### ¡Hello world!
Exploremos el entorno de trabajo y pongamos en ejecución nuestra primera aplicación de consola.

Lo primero que tendremos que hacer es [instalar el IDE Visual Studio Community](https://visualstudio.microsoft.com/es/), si es que aún no lo tenemos. Una vez instalado y ejecutado, nos mostrará la siguiente pantalla con acciones rápidas para arrancar:

![Inicio Visual Studio](/clases/apuntes/introduccion/inicio-visual-studio.png)

Elegiremos "Crear un proyecto". Lo siguiente que encontraremos es una serie de plantillas o templates de los distintos tipos de proyectos que podemos encarar con la plataforma. Elegiremos, para arrancar, "Aplicación de consola". *Asegúrense de consultar con su docente la versión indicada para la cursada.*

![Template Consola Visual Studio](/clases/apuntes/introduccion/template-consola-vs.png)

Lo siguiente será elegir un nombre para el proyecto y otro para la solución (o el mismo) y presionar el botón "Crear". 

Un __*proyecto*__ es una estructura que nos permitirá construir nuestros programas con .NET y compilarlos como una unidad independiente, mientras que a una __*solución*__ la podemos ver como una agrupadora de proyectos. Normalmente un programa de .NET está compuesto por varios proyectos inter-relacionados dentro de una solución. 

![Template Consola Visual Studio](/clases/apuntes/introduccion/nombre_proyecto_vs.png)

#### Módulos de Visual Studio
Como podemos observar rápidamente, Visual Studio se presenta como una interfaz de única página (SPI) compuesta por múltiples ventanas anidadas. Está de más decir que podremos administrar estas ventanas a gusto, todas soportan funcionalidades básicas como mover, cambiar el tamaño, ocultar y fijar. 

Hagamos un repaso rápido de cada sección.

Barra lateral derecha



### Common Type System
El Common Type System (CTS) define un conjunto de tipos de datos común a todos los lenguajes soportados por .NET. 

* Establece un marco de herramientas que habilita la ejecución de los distintos lenguajes de la plataforma. 
* Provee un modelo orientado a objetos. 
* Define un conjunto de reglas que todos los lenguajes deben seguir en lo que refiere a tipos.
* Provee una biblioteca que contiene los tipos primitivos básicos (Boolean, Byte, Char, etc). 

### Tipado estático y tipado dinámico
Recordemos la diferencia entre tipado estático y tipado dinámico.

__Tipado estático__ → Decimos que un lenguaje es de tipado estático, porque los tipos tienen que definirse en tiempo de compilación para que el programa funcione.




### Proceso de compilación


## Conclusión

## Cuestionario
1. Enumere y describa las características de C#.
2. ¿Qué funciones cumple el entorno de ejecución o runtime?
3. Explique y compare tiempo de compilación y tiempo de ejecución.
4. Describa el proceso de compilación de C#.
5. ¿Qué es el Common Type System (CTS)?
6. Explique las diferencias entre los tipos por referencia y los tipos por valor.
7. Explique las diferencias entre variables escalares y no escalares. Ejemplifique. 
8. ¿Qué es un “entry point”? ¿Cuál es el entry point de los programas construidos con C#? 

## Bibliografía
* “.NET Architectural Components.” Microsoft Docs, https://docs.microsoft.com/en-us/dotnet/standard/components.
* "Common Type System & Common Language Specification." Microsoft Docs, https://docs.microsoft.com/en-us/dotnet/standard/common-type-system
