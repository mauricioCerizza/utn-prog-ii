---
sidebar_label: Introducción a C#
slug: /clases/introduccion/apuntes/introduccion-c-sharp
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Introducción a C#
Durante nuestro viaje a través de las características comunes de los lenguajes de alto nivel y la programación orientada a objetos nos acompañará el lenguaje de programación C#. 

Tal vez algunas de las características de este lenguaje les parezcan similares a otros lenguajes que conozcan, y están en lo correcto. El equipo de C#, desde sus inicios, no dudó en tomar grandes ideas de otros lenguajes y reformarlas para incorporarlas a C#. Las principales influencias han sido Java (sobre todo en los inicios), y más cerca en el tiempo el mismísimo F#. 

Fue diseñado por el ingeniero de Microsoft [Anders Hejlsberg](https://es.wikipedia.org/wiki/Anders_Hejlsberg), quien también es el creador de Delphi y Turbo Pascal y está involucrado en el desarrollo de Typescript desde 2012. 

## Características de C#
case sensitive
tipado estático
compilado

### Tipado estático y tipado dinámico
Recordemos la diferencia entre tipado estático y tipado dinámico.

__Tipado estático__ → Decimos que un lenguaje es de tipado estático, porque los tipos tienen que definirse en tiempo de compilación para que el programa funcione.




### Proceso de compilación

## Gramática de C#

sintaxis vocabulario semántica

### Sintaxis de C#
#### Declaraciones
Cuando escribimos en español, marcamos el fin de una oración con un punto. Una oración se compone de múltiples palabras y frases con un orden específico. Los lenguajes de programación también tienen reglas de sintaxis. 

C# indica el fin de una declaración con un punto y coma. Una **declaración (*statement*)** puede estar compuesta de múltiples **variables** y **expresiones (*expressions*)**. En el siguiente ejemplo, `sueldoNeto` es una variable y `sueldoBruto - aportes - impuestos` es una expresión compuesta de 3 **operandos** (`sueldoBruto`, `aportes` y `impuestos`) y los **operadores** `-`. 

```csharp
decimal sueldoNeto = sueldoBruto - aportes - impuestos;
```

El orden de los operadores y los operandos importa, si los cambiaramos de lugar daría un resultado completamente distinto. 

#### Comentarios
Los comentarios le indican al compilador que ignore su contenido. Permite realizar aclaraciones o deshabilitar código temporalmente. 

Para realizar un comentario en C# utilizamos la doble barra `//`. Lo que siga a la doble barra será ignorado por el compilador hasta el fin de la línea.

```csharp
// Falta descontar los aportes.
decimal sueldoNeto = sueldoBruto - impuestos;
```

Si queremos escribir un comentario multi-línea se utiliza `/*` al inicio y `*/` al final, todo el contenido entre esos dos símbolos será ignorado por el compilador. 

```csharp
/* 
    Estamos en programación II de UTN Fra. 

    string saludo = "¡Hola Mundo!"
    
    Aprendemos a realizar comentarios en C#.
*/
```

:::note Información

El atajo de teclado de Visual Studio para realizar comentarios es `CTRL + K + C`, y para deshacerlos `CTRL + K + U`. 

:::

#### Bloques
En C# para escribir un bloque de código se utilizan llaves `{}`. Si hacemos una comparación con el lenguaje humano, lo bloques serían análogos a los párrafos. Los bloques empiezan con una declaración que define el contenido del bloque. 

En el siguiente ejemplo vemos que tenemos 3 bloques anidados. Uno definido por la palabra clave `namespace`, otro por `class` y el último está definido por la firma del *método* (similar a un función).

```csharp
using System; // El ; indica el fin de la declaración

// 'namespace' define el tipo de bloque. 'Hola_Mundo' es un nombre o identificador para ese bloque. 
namespace Hola_Mundo
{ // La llave de apertura { indica el inicio de un bloque.
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!"); // Otra declaración.
        }
    }
} // La llave de cierre } indica el fin de un bloque.
```
### Vocabulario de C#
El vocabulario de C# está compuesto de **palabras clave (*keywords*)**, **símbolos** y **tipos**.

Entre las palabras claves encontraremos `using`, `namespace`, `class`, `static`, `int`, `string`, `double`, `bool`, `if`, `switch`, `break`, `while`, `do`, `for`, `foreach` y más. 

Entre los símbolos trabajaremos con `"`, `'`, `+`, `-`, `*`, `/`, `%`, `@`, `$`,entre otros.

#### Métodos, los verbos de C#
Los verbos en español representan acciones como *correr*, *jugar*, *saltar*. De la misma forma, los **métodos** en C# representan acciones que podrán ser ejecutadas por alguna parte del programa. Son similares a las funciones en otros lenguajes. 

```csharp
using System; 

namespace Hola_Mundo
{ 
    class Program
    {
        // Acá comienza la declaración del método Main.
        static void Main(string[] args)
        {
            /* Acá se invoca/llama al método WriteLine 
            y se le pasa como argumento (dato o valor de entrada) un string. 
            */
            Console.WriteLine("Hello World!"); 
        }
        // Acá finaliza la declaración del método Main.
    }
} 
```
#### Tipos, atributos y variables. Los sustantivos de C#.
En español los sustantivos son palabras que se utilizan para denominar seres, entidades u objetos. 

Por ejemplo, *Federico* es el nombre de un profesor. La palabra "profesor" nos indica el papel que juega *Fede* dentro del contexto de la universidad. Podemos decir que *Fede* es de tipo `Profesor`. `Profesor` no es el único tipo dentro del contexto de la facultad, también están `Alumno`, `Secretario`, `Coordinador`, `LibretaUniversitaria`, `Materia`, `Aula`, `Nota`, entre otros. Los **tipos** son sustantivos que categorizan cosas. 

`legajoDocente` y `antigüedad` son características que forman parte de lo que describe a *Fede* como profesor, son **atributos**.

Por otra parte, *Fede* no es el único ser de tipo `Profesor`, también están *Lucas*, *Ezequiel* y *Mauricio*. Cada uno de estos seres o manifestaciones concretas de un tipo son **variables**, sustantivos que se refieren a una cosa específica.  

## Trabajando con variables

### Constantes

### Inferencia de tipos

## Common Type System
C# por defecto sólo trae algunas palabras y, estrictamente, no define ningún tipo. Todos los tipos que usamos en C# son provistos por el entorno de .NET. Durante la cursada aprenderemos sobre muchos de los tipos que tenemos disponibles en la plataforma y también crearemos nuevos.

El **Common Type System (CTS)** define un conjunto de tipos de datos común a todos los lenguajes soportados por .NET. 
* Establece un marco de herramientas que habilita la ejecución de los distintos lenguajes de la plataforma. 
* Provee un modelo orientado a objetos. 
* Define un conjunto de reglas que todos los lenguajes deben seguir en lo que refiere a tipos.
* Provee una biblioteca que contiene los tipos primitivos básicos (Boolean, Int32, Byte, Char, etc). 
* Define tipos de dato en dos categorías: de valor y de referencia.

### Tipos de valor y tipos de referencia
Existen dos segmentos o categorías de memoria: la **pila (*stack memory*)** y el **montón (*heap memory*)**. La memoria stack es más rápiida pero limitada en tamaño. La memoria heap es más lenta pero más abundante.

:::warning Stack Overflow

La famosa excepción Stack Overflow se lanza al llenarse el espacio de la memoria stack, que es muy limitado. Suele suceder cuando se producen llamadas recursivas accidentales o nos encontramos dentro de un loop infinito. 

:::

Los **tipos de valor (*value types*)** son tipos de dato representados por su valor real. Si son asignados a una variable, esa variable obtendrá una nueva copia del valor. **Todos los tipos de valor se almacenan en la pila.** 

Los **tipos de referencia (*reference types*)**, al contrario, son tipos de dato representados por una referencia que apunta a un sector de memoria donde se encuentra el valor real. Si son asignados a una variable, esa variable almacenará la referencia y apuntará al valor original. No se realiza ninguna copia del valor. **Todos los tipos de referencia se almacenan en el montón.** 

### Categorías de tipos
.NET define cinco categorías de tipos de datos.

| Categoría       | Palabra clave   | Valor/Referencia   |
| --------------- | --------------- | ------------------ |
| **Clases**      | ***class***     | Tipo de referencia |
| **Estructuras** | ***struct***    | Tipo de valor      |
| **Enumerados**  | ***enum***      | Tipo de valor      |
| **Interfaces**  | ***interface*** | Tipo de referencia |
| **Delegados**   | ***delegate***  | Tipo de referencia |

Entraremos en el detalle de cada una de estas categorías a lo largo de la cursada. 

### Aliases
Algunas de las palabras clave de C# como `double`, `int` o `string` son **alias (*aliases*)** que representan tipos proveidos por la implementación de la plataforma .NET donde se ejecuta C#. Por ejemplo, `int` es un alias para el tipo `System.Int32`.

### Literales
Los **valores literales (*literal value*)** son una notación que representa un valor fijo. Dependiendo el tipo de dato, existe una notación diferente para los literales. 

```csharp
string saludo = "Hola Mundo"; // "Hola Mundo" es un literal de texto que se está asignando a la variable 'saludo' de tipo string.

int numero = 5; // 5 es un literal numérico que se está asignando a la variable 'numero' de tipo entero.
```

### Caracteres
Cuando trabajamos con un caracter individual, como podría ser una letra, el tipo a utilizar es `char`. 

Los literales de este tipo deben estar encerrados por comillas simples `'`.

Los `char` son tipos de valor.

```csharp
char simbolo = '$';
char letra = 'Z';
char numero = '1'; // '1' se almacena como tipo char, no es numérico.
```

### Strings
Cuando trabajamos con texto formado por múltiples caracteres el tipo a utilizar es `string`. 

Los literales de este tipo deben estar encerrados por comillas dobles `"`.

Los `string` son tipos de referencia. Internamente son arrays de `char`, incluso pueden ser recorridos con un bucle `for` o `foreach`.

Los `string` se pueden concatenar usando el operador `+`.

```csharp
string nombre = "Florencia";
string telefono = "(+54) 9 11-12345-15432";
string contacto = nombre + " tiene el número de teléfono " + telefono;
```

### Tipos numéricos
Los números son datos con los que vamos a realizar alguna operación aritmética (como sumar o multiplicar). Un DNI, un número de teléfono, un legajo, NO son números. 

Todos los tipos numéricos primitivos de C# son tipos de valor.

#### Enteros
El conjunto de **números reales** se puede dividir en dos subconjuntos: racionales e irracionales. Los **números racionales** son aquellos que pueden expresarse como la división de dos números enteros, los **números irracionales** son todos los demás. A su vez, el conjunto de los racionales se puede dividir en **números enteros** y **números fraccionarios**. 

![Clasificación de los números](/clases/00-introduccion/apuntes/clasificacion-numeros.png)

Los números enteros (sin punto decimal) se representan con los tipos `short`, `int` y `long`. Los enteros positivos incluyendo el cero se conocen como **números naturales** y se representan con los tipos enteros sin signo (***unsigned***) como `ushort`, `uint` y `ulong`.

Los literales de `long` deben ir acompañados del sufijo `L`. Para los enteros no es necesarario un sufijo.

```csharp
uint numeroNatural = 10;

int numeroEntero = -5;

long numeroGrande = 20L;
```

| Palabra clave | Rango                                                      | Tamaño                     | Tipo en .NET    |
| :------------ | :--------------------------------------------------------- | :------------------------- | :-------------- |
| `sbyte`       | *-128* a *127*                                             | Entero de 8-bit con signo  | `System.SByte`  |
| `byte`        | *0* a *255*                                                | Entero de 8-bit sin signo  | `System.Byte`   |
| `short`       | *32.768* a *32.767*                                        | Entero de 16-bit con signo | `System.Int16`  |
| `ushort`      | *0* a *65.535*                                             | Entero de 16-bit sin signo | `System.UInt16` |
| `int`         | *-2.147.483.648* a *2.147.483.647*                         | Entero de 32-bit con signo | `System.Int32`  |
| `uint`        | *0* a *4.294.967.295*                                      | Entero de 32-bit sin signo | `System.UInt32` |
| `long`        | *-9.223.372.036.854.775.808* a *9.223.372.036.854.775.807* | Entero de 64-bit con signo | `System.Int64`  |
| `ulong`       | *0* a *18.446.744.073.709.551.615*                         | Entero de 64-bit sin signo | `System.UInt64` |

#### Punto flotante


Por defecto los literales fraccionarios (con punto decimal) son de tipo `double`. Los literales de `float` deben ir acompañados del sufijo `F`. Los literales de `decimal` deben ir acompañados del sufijo `M`.

```csharp
float numeroFlotantePrecisionSimple = 2.5F;

double numeroFlotantePrecisionDoble = 2.5;

decimal numeroDecimal = 2.5M;
```

#### Decimales

:::warning Advertencia

No se deben comparar valores `double` usando `==`. El tipo `double` no garantiza precisión porque hay algunos números que no pueden ser representados como valores de punto flotante. 

En 1991, durante la primera guerra del golfo, usar números de punto flotante [le costó la vida a 28 soldados](https://www-users.cse.umn.edu/~arnold/disasters/patriot.html) al no poder rastrear e interceptar un misil con precisión. 

:::

:::tip Buena práctica

Es una buena práctica usar `int` para números enteros y `double` para fraccionarios que no serán comparados a otros valores. Usar `decimal` para dinero y valores donde la precisión es importante. 

:::

#### Notación binaria y hexadecimal
C# también permite escribir literales numéricos en binario (base 2) y hexadecimal (base 16). Un literal binario debe empezar con `0b`, mientras que uno hexadecimal con `0x`.

Desde C# 7.0 se puede usar el guión bajo `_` como separador de digitos con el único uso de mejorar la legibilidad del número. 

En el siguiente ejemplo vemos como escribir el valor de dos millones en decimal, binario y hexadecimal.

```csharp
// Notación decimal
int notacionBase10 = 2_000_000; // El _ es una ayuda visual para separar los dígitos. No cumple otra función. 

// Notación binaria
int notacionBase2 = 0b_0001_1110_1000_0100_1000_0000;

// Notación hexadecimal
int notacionBase16 = 0x_001E_8480;
```

Si comparamos las variables con el operador de igualdad `==` observaremos que, al ser el mismo valor pero expresado con diferentes notaciones, la igualdad es verdadera.

### Tipos booleanos
Los tipos booleanos sólo pueden contener dos valores literales `true` o `false`. Se usan principalmente en condiciones de bloques de selección  

```csharp
bool verdadero = true;
bool falso = false;
```

### Tipos dinámicos y tipo object

### Valores por defecto
Por defecto los tipos de valor contienen del valor `0` si son numéricos, `false` si son de tipo `bool` y `''` si son de tipo `char`. Por otra parte, si no se inicializan, las variables de tipos de referencia contendrán el valor `null` que indica que esa variable no apunta a ninguna dirección de memoria.

El operador `default` recibe como argumento un tipo de dato y nos devuelve el valor por defecto de ese tipo. 

```csharp
Console.WriteLine("Valor por defecto de enteros: {0}", default(int));
Console.WriteLine("Valor por defecto de flotantes: {0}", default(double));
Console.WriteLine("Valor por defecto de booleanos: {0}", default(bool));
Console.WriteLine("Valor por defecto de fechas: {0}", default(DateTime));
Console.WriteLine("Valor por defecto de strings: {0}", default(string));
Console.WriteLine("Valor por defecto de chars: {0}", default(char));
```

La salida del código anterior es:

```
Valor por defecto de enteros: 0
Valor por defecto de flotantes: 0
Valor por defecto de booleanos: False
Valor por defecto de fechas: 1/1/0001 00:00:00
Valor por defecto de strings:
Valor por defecto de chars:
```

