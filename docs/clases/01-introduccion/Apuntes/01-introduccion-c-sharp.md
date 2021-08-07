---
sidebar_label: Introducción a C#
slug: /clases/introduccion/apuntes/introduccion-c-sharp
hide_table_of_contents: false
hide_title: true
author: 
authorURL: 
---
Durante nuestro viaje a través de las características comunes de los lenguajes de alto nivel y la programación orientada a objetos nos acompañará el lenguaje de programación C#. 

Tal vez algunas de las características de este lenguaje les parezcan similares a otros lenguajes que conozcan, y están en lo correcto. El equipo de C#, desde sus inicios, no dudó en tomar grandes ideas de otros lenguajes y reformarlas para incorporarlas a C#. Las principales influencias han sido Java (sobre todo en los inicios), y más cerca en el tiempo el mismísimo F#. 

## ¡Hello world!
Exploremos el entorno de trabajo y pongamos en ejecución nuestra primera aplicación de consola.

### Visual Studio
Podríamos usar Notepad o algún otro editor de texto para escribir código C#, pero Visual Studio es una mejor opción ya que es un IDE. 

**IDE** es un acrónimo para **Integrated Development Environment** (Entorno de Desarrollo Integrado, en español), una aplicación que proporciona todos los servicios y herramientas necesarios para desarrollar software (editor de texto, diseñador visual, administrador de archivos, debugger, entre otras). 

:::note Nota

NO confundir con __*Visual Studio Code*__, el cual es un excelente **editor de código** open source, gratuito y multiplataforma. 

Si bien se puede programar con C# en editores de código, Visual Studio (*no Code*) es más completo y especializado en el desarrollo sobre la plataforma .NET.   

:::

#### Instalación
Lo primero que tendremos que hacer es [instalar Visual Studio Community Edition](https://visualstudio.microsoft.com/es/), si es que aún no lo tenemos. Se puede descargar tanto para Windows como para Mac. Aún no existe una versión para Linux. 



Una vez instalado y ejecutado, nos mostrará la siguiente pantalla con acciones rápidas para arrancar:

![Inicio Visual Studio](/clases/00-introduccion/apuntes/inicio-visual-studio.png)

Elegiremos "Crear un proyecto". Lo siguiente que encontraremos es una serie de plantillas o templates de los distintos tipos de proyectos que podemos encarar con la plataforma. Elegiremos, para arrancar, "Aplicación de consola". *Asegúrense de consultar con su docente la versión indicada para la cursada.*

![Template Consola Visual Studio](/clases/00-introduccion/apuntes/template-consola-vs.png)

Lo siguiente será elegir un nombre para el proyecto y otro para la solución (o el mismo) y presionar el botón "Crear". 

Un __*proyecto*__ es una estructura que nos permitirá construir nuestros programas con .NET y compilarlos como una unidad independiente, mientras que a una __*solución*__ la podemos ver como una agrupadora de proyectos. Normalmente un programa de .NET está compuesto por varios proyectos inter-relacionados dentro de una solución. 

![Template Consola Visual Studio](/clases/00-introduccion/apuntes/nombre_proyecto_vs.png)

#### Módulos de Visual Studio
Como podemos observar rápidamente, Visual Studio se presenta como una interfaz de única página (SPI) compuesta por múltiples ventanas anidadas. Está de más decir que podremos administrar estas ventanas a gusto, todas soportan funcionalidades básicas como mover, cambiar el tamaño, ocultar y fijar. 

Hagamos un repaso rápido de cada sección.

Barra lateral derecha





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
