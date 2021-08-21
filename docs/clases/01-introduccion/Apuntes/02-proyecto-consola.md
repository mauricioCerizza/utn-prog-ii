---
sidebar_label: Crear un proyecto de consola
slug: /clases/introduccion/apuntes/proyecto-consola
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---
## Crear un proyecto de consola
Exploremos el entorno de trabajo y pongamos en ejecución nuestra primera aplicación de consola.

Lo primero que tendremos que hacer es abrir `Visual Studio`, nos mostrará la siguiente pantalla con acciones rápidas para arrancar:

![Inicio Visual Studio](/clases/00-introduccion/apuntes/inicio-visual-studio.png)

Presionaremos en `Crear un proyecto`. Lo siguiente que encontraremos es una serie de plantillas o templates de los distintos tipos de proyectos que podemos encarar con la plataforma. Arriba tendremos una barra de búsqueda y filtros por lenguaje, plataforma y tipo de aplicación. 

Elegiremos `Aplicación de consola`.

![Template Consola Visual Studio](/clases/00-introduccion/apuntes/template-consola-vs.png)

Lo siguiente será elegir un nombre para el proyecto y otro para la solución (o el mismo) y presionar el botón "Crear". 

Un **proyecto** es una estructura que nos permitirá construir nuestros programas con .NET y compilarlos como una unidad independiente, mientras que a una **solución** la podemos ver como una agrupadora de proyectos. Normalmente un programa de .NET está compuesto por varios proyectos inter-relacionados dentro de una solución. 

![Template Consola Visual Studio](/clases/00-introduccion/apuntes/nombre_proyecto_vs.png)

Una vez creado nos aparecerá el siguiente código:

```csharp
using System;

namespace Hola_Mundo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

Este es el código mínimo sobre el cual arrancaremos todas nuestras aplicaciones de consola. Nos adentraremos en los detalles más adelante.

Para ejecutar este programa tenemos 2 opciones, o presionar la tecla `F5` o el botón de "play" en la barra de acciones de arriba. 

Seguido veremos la consola con la salida en texto *"Hello World!"*.

¡Felicitaciones, acabás de crear tu primer programa con C#!

:::tip

Te recomendamos crear una nueva solución por cada ejercicio que vayas a realizar. También mantener todas las soluciones en una única carpeta que esté versionada con Git y enlazada a tu repositorio en GitHub.  

:::

## Entendiendo Visual Studio
Como podemos observar rápidamente, Visual Studio se presenta como una interfaz de única página (SPI) compuesta por múltiples ventanas anidadas. Está de más decir que podremos administrar estas ventanas a gusto, todas soportan funcionalidades básicas como mover, cambiar el tamaño, ocultar y fijar. 

Hagamos un repaso rápido de las secciones más importantes.

### Barra lateral derecha

:::note Información

Si por defecto no ves alguna sección, podés abrirlas desde el menú `View/Ver` o utilizando los atajos de teclado. 

:::

### IntelliSense
**IntelliSense** es la tecnología de autocompletado de código y de detección de errores de Visual Studio y Visual Studio Code. 

### Esquema de colores (Themes)
Para cambiar el esquema de colores de Visual Studio...




