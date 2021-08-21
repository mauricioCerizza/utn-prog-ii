---
title: Apuntes - Introducción a .NET y C#
sidebar_label: Introducción a .NET
slug: /clases/introduccion/apuntes/introduccion-net
hide_table_of_contents: false
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Introducción a .NET
.NET (*pronunciado como “dot net”*) es una plataforma gratuita y de código abierto que nos provee una serie de herramientas y programas para construir fácilmente una gran variedad de software, así como el entorno necesario para ejecutarlo sobre distintos sistemas operativos y tipos de arquitectura. 

## Implementaciones de .NET
Actualmente existen cuatro implementaciones distintas de .NET las cuales conviven y tienen muchos puntos en común:
* .NET Framework
* .NET Core
* Xamarin
* .NET 5 

:::note Información

Para quienes les interese profundizar la historia de .NET, Richard Campbell nos resume 20 años en menos de una hora: [The History of .NET - Richard Campbell](https://youtu.be/iMM4Nq9Xqw0).

:::

### .NET Framework
**.NET Framework** es una plataforma de desarrollo que fue diseñada por Microsoft a fines de la década de los 90s y cuya primera versión fue lanzada en 2002. Desde entonces y hasta 2019 fue recibiendo múltiples actualizaciones. Su versión final es la 4.8.

Nació de la necesidad de unificar los distintos componentes necesarios para construir, implementar y ejecutar una aplicación desarrollada para Windows. 

![.NET Framework Logo](/clases/00-introduccion/apuntes/net-framework-logo.jpg)

Los pilares sobre los que se construyó esta implementación son el **Common Language Runtime (CLR)**, un programa que se encarga de todo lo necesario para ejecutar una aplicación construida con .NET, y la **Base Class Library (BCL)**, una enorme biblioteca con funcionalidades útiles para construir software. Ambas herramientas son comunes a todos los lenguajes de programación soportados por la plataforma. 

Así, .NET Framework permitió desarrollar software cuyo código fuente fuera agnóstico de la plataforma de destino. El único componente dependiente de la computadora sobre la que se ejecutaba era el entorno de ejecución encargado de ejecutar ese código. Llegó a soportar hasta 22 lenguajes de programación distintos. 

Actualmente se sugiere utilizar esta implementación únicamente para mantener o extender software originalmente programado sobre la plataforma. No se recomienda su uso para nuevos proyectos. 

### Mono/Xamarin
A fines del año 2000 Microsoft publicó la [**Common Language Infrastruture (CLI)**](https://en.wikipedia.org/wiki/Common_Language_Infrastructure), especificando cómo construir código ejecutable y un entorno de ejecución que permitiera usar múltiples lenguajes de alto nivel en diferentes plataformas, eliminando así la necesidad de reescribir el código fuente para cada una de ellas. Todas las implementaciones de .NET cumplen con las especificaciones del Common Language Infrastructure. 

Originalmente, Microsoft sólo ofrecía un entorno de ejecución para Windows, el Common Language Runtime. [Miguel de Icaza](https://en.wikipedia.org/wiki/Miguel_de_Icaza) de la empresa Ximian, se interesó en la plataforma y empezó a evaluar la posibilidad de desarrollar un entorno de ejecución para Linux. Así nace el proyecto de código abierto **Mono**, el cual vio la luz por primera vez en 2004. 

![Mono logo](/clases/00-introduccion/apuntes/mono-logo.png)

Ximian fue adquirida por Novell en 2003. A su vez, Novell fue adquirida a Attachmate en 2011. Esto último fue sucedido por múltiples despidos dentro de la flota de trabajo que había sido heredada de Novell, incluyendo a Miguel de Icaza. A raíz de esto, Miguel y gran parte del equipo original de Mono, terminan fundando Xamarin. Xamarin fue la empresa que continuó soportando el desarrollo de Mono. 

Para este tiempo, lograron adquirir los permisos y licencias para continuar trabajando sobre MonoTouch (para iOS) y Mono for Android, los cuales pasaron a llamarse respectivamente Xamarin.iOS y Xamarin.Android. En 2012 Xamarin lanza Xamarin.Mac, que permitía desarrollar aplicaciones para MacOS con C#. En 2013 lanzan el IDE Xamarin Studio, un cambio de marca del IDE original para Mono "Monodevelop" y la integración con Visual Studio, lo que permitió usar Visual Studio para crear aplicaciones para Android, iOS y Windows. 

![Xamarin logo](/clases/00-introduccion/apuntes/xamarin-logo.png)

En 2016, la empresa es adquirida por Microsoft que liberó el código fuente del SDK de Xamarin y comenzó a ofrecer gratuitamente las integraciones y características para Visual Studio.

Fue así como Mono dio origen a la plataforma para desarrollo mobile **Xamarin** y otras como **Unity**, que se utiliza para el desarrollo de videojuegos multiplataforma. La versión final de Mono es la 5.0.

:::note Curiosidad

El nombre de Xamarin proviene de los monos tamarinos (tamarins, en inglés), sólo que se reemplaza la T por una X. Similar a como Ximian, la empresa original de Miguel de Icaza, deriva de simians (simios)[*](https://www.computerworld.com/article/2799001/nat-friedman--in-his-own-right.html).

:::

### .NET Core
Cuando nació .NET Framework, el modelo de negocio de Microsoft consistía principalmente en vender licencias de Windows y Office. No es extraño entonces que se tratara de una implementación ligada tan estrechamente a Windows. 
Hoy vivimos en un mundo multi-plataforma, donde el desarrollo para dispositivos móviles y la infraestructura en "la nube" transformaron a Windows en un sistema operativo mucho menos relevante. Microsoft se adaptó al cambio y su modelo de negocio pasó a ser vender sus servicios en la nube. 

Fue bajo este nuevo contexto que en 2016 se lanza la primera versión de **.NET Core**, una nueva implementación multi-plataforma y de código abierto. Para esta implementación se rescribió desde cero toda la plataforma de .NET, logrando mejoras de rendimiento, eficiencia y un enfoque de desarrollo mucho más moderno. 

![Net Core logo](/clases/00-introduccion/apuntes/net-core-logo.png)

.NET Core trajo un nuevo entorno de ejecución ***multi-plataforma*** llamado **CoreCLR** con soporte para Windows, Linux y MacOS. También incluyó una nueva Base Class Library más liviana y simple, conocida como **CoreFX**.

Con esta implementación también se eliminaron grandes piezas de código que estaban estrechamente ligadas a tecnologías legado y exclusivas de Windows. Muchas fueron modularizadas en forma de **paquetes NuGet**, bibliotecas externas que uno puede incorporar a sus proyectos a necesidad. ***Modularizar*** .NET para que tenga menos depedencias hizo de .NET Core una implementación mucho más ligera y simple que .NET Framework, a su vez permitiendo que las nuevas actualizaciones tengan menos impacto sobre la plataforma. 

La versión final de .NET Core es la 3.1.

### .NET Standard
Para 2019 existían y convivían 3 implementaciones vigentes de .NET:

* .NET Core para multi-plataforma y nuevos desarrollos.
* .NET Framework para aplicaciones legado.
* Xamarin para aplicaciones mobile. 

Si bien cada una estaba especializada en escenarios diferentes, condujo al problema de que un desarrollador tenía que aprender a trabajar con las tres plataformas. 

Esto condujo a Microsoft a desarrollar una especificación que todas las implementaciones de .NET debían cumplir. Así nace **.NET Standard**, permitiendo a los desarrolladores compartir código entre cualquiera de las tres plataformas. 

### .NET 5 y versiones superiores
En 2020 .NET Core cambia de nombre a .NET y se lanza **.NET 5**, la primera versión unificada de la plataforma con soporte para construir aplicaciones de todo tipo (cloud, desktop, mobile, gaming, y más). Esta nueva implementación combina las herramientas y frameworks de .NET Framework, .NET Core y Mono/Xamarin. 

Al haber una sola plataforma unificada de .NET, la necesidad de .NET Standard (que dio la base para soñar con la posibilidad .NET 5) se reduce significativamente.

Esta implementación reemplazará a todas las anteriores, convirtiéndose en un único estándar. 

![.NET Platform](/clases/00-introduccion/apuntes/dotnet5_platform.png)

## Niveles de soporte
Las versiones de .NET se categorizan en dos grandes grupos que determinan por cuántos años tendrán soporte (mantenimiento):

* **Long-Term Support (LTS)**: Son versiones estables y que se actualizarán con poca frecuencia. Se garantiza su soporte por 3 años desde su lanzamiento. Por ejemplo, la versión 3.1 que fue lanzada en Diciembre de 2019 tiene soporte hasta Diciembre de 2022.
* **Current**: Contienen las últimas mejoras y tienden a actualizarse con frecuencia. Reciben actualizaciones hasta 18 meses después de su lanzamiento. Por ejemplo, la versión 5.0 que fue lanzada en Noviembre de 2020 tiene soporte hasta Mayo de 2022.

Ambas reciben correcciones críticas relacionadas a temas de seguridad. Debemos mantenernos al día con estas actualizaciones para obtener soporte. Por ejemplo, si tenemos instalada la versión 5.0.0 y existe una versión 5.0.1, necesitaremos estar actualizados a la 5.0.1 para obtener soporte.

![Release schedule](/clases/00-introduccion/apuntes/release-schedule.png)

## Características de .NET

#### Multi-plataforma
Existió una época donde esta plataforma sólo nos permitía trabajar para Windows, pero esos tiempos quedaron muy atrás. Desde la salida de .NET Core en 2016, podemos implementar nuestros sitios web, aplicaciones para servidores y programas de consola también en Linux y Mac. 

#### Open Source
El [código fuente de .NET](https://github.com/dotnet) es público y es mantenido por miles de desarrolladores y compañias. Es soportado por [.NET foundation](https://dotnetfoundation.org/), una organización sin fines de lucro, la cual se encarga de promover el desarrollo y la colaboración alrededor del ecosistema de .NET.

#### Multi-lenguaje
.NET soporta varios lenguajes de programación, los cuales se pueden utilizar para programar sobre la plataforma:

**C#** → Lenguaje orientado a objetos con una sintaxis similar a C y JAVA.

**F#** →  Lenguaje orientado principalmente a la programación funcional, de sintaxis liviana.

**Visual Basic** → La sintaxis de este lenguaje es la que más se asemeja al lenguaje humano (inglés), lo que facilita el trabajo para personas sin experiencia en el desarrollo de software. 

### Componentes de .NET
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





