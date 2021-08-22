---
sidebar_label: Trabajando con la consola
slug: /clases/introduccion/apuntes/input-output
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Trabajando con la consola
Las aplicaciones de consola se basan en texto y corren sobre la línea de comandos. Se suelen utilizar para ejecutar tareas simples y concretas. Entre sus tareas más habituales se encuentra escribir y leer datos. 

## Salida de datos por consola
Para mostrar texto se utilizan los métodos `Write` y `WriteLine` de la clase `Console`, cuya única diferencia es que el último genera un salto de línea después de imprimir el texto. 

Reciben como argumento el texto a mostrar en la consola.

```csharp
Console.WriteLine("Texto con salto de línea.");
Console.Write("Texto sin ");
Console.Write("salto de línea.");
```

La salida del código anterior es:

```
Texto con salto de línea.
Texto sin salto de línea.
```

### Formato compuesto
Ambos métodos soportan una característica llamada **formatos compuestos** que consisten es una lista de valores y una cadena de formato compuesto. Una **cadena de formato compuesto** está formada por texto fijo combinado con **marcadores de posición** que corresponden con los elementos de la lista. 

El resultado de la operación de formato es una cadena de texto compuesta por el texto fijo combinado con la representación en texto de los objetos de la lista. 

```csharp
string facultad = "UTN Fra";
string materia = "Programación II"; 
short anio = 2021;
byte cuatrimestre = 2;

Console.WriteLine("Estamos en la materia {0} de {1}. Es el año {2} y el cuatrimestre {3}.", materia, facultad, anio, cuatrimestre);
```

La salida del código anterior es:

```
Estamos en la materia Programación II de UTN Fra. Es el año 2021 y el cuatrimestre 2.
```

Los marcadores de posición (`{0}`, `{1}`, `{2}`, `{3}`) corresponden a la posición de las variables desde el segundo argumento del método en adelante. Es decir, `{0}` corresponde a la representación en texto de `facultad`, `{1}` corresponde a la representación en texto de `materia`, y así sucesivamente. Podemos observar que las posiciones se empiezan a contar partiendo del número cero.

Si cambiaramos de orden las variables o los marcadores, daría un resultado completamente distinto. 

```csharp
Console.WriteLine("Estamos en la materia {1} de {0}. Es el año {3} y el cuatrimestre {2}.", materia, facultad, anio, cuatrimestre);
```

La salida del código anterior es:

```
Estamos en la materia UTN Fra de Programación II. Es el año 2 y el cuatrimestre 2021.
```

En el ejemplo anterior se cambia el número de los marcadores, y como representa a las posición de las variables podemos observar que nos muestra completamente distinto. Lo mismo sucede en el siguiente ejemplo donde lo que cambia es el orden de la lista de variables. 

```csharp
Console.WriteLine("Estamos en la materia {0} de {1}. Es el año {2} y el cuatrimestre {3}.", cuatrimestre, anio, facultad, materia);
```

La salida del código anterior es:

```
Estamos en la materia 2 de 2021. Es el año UTN Fra y el cuatrimestre Programación II.
```

#### Aplicar formatos a cadenas de texto
A los formatos compuestos de los métodos de entrada y a cualquier `string` le podemos aplicar formatos especiales o personalizados. 

Por ejemplo, si queremos dibujar una tabla con el nombre de distintos productos alineados a la izquierda y dentro de una columna de 10 caracteres, y los precios de cada uno alineados a la derecha con separador de miles, con dos decimales y con una columna de 6 caracteres:

```csharp
string placaDeVideo = "Nvidia RTX 3080";
decimal precioPlacaVideo = 344663.36M;
string procesador = "Ryzen 7 5800x";
decimal precioProcesador = 63595M;

Console.WriteLine("{0,-20} {1,10}", "Producto", "Precio");
Console.WriteLine("{0,-20} {1,10:N2}", placaDeVideo, precioPlacaVideo);
Console.WriteLine("{0,-20} {1,10:N2}", procesador, precioProcesador);
```

La salida del código anterior es:

```
Producto                 Precio
Nvidia RTX 3080      344.663,36
Ryzen 7 5800x         63.595,00
```

Primero se debe escribir entre llaves la posición o índice de la variable que queremos imprimir. `{1}` indica que allí se deberá insertar la representación en texto de la variable que está en la segunda posición. 

Se puede definir el ancho del campo agregando una coma y un valor. Si el valor es positivo la cadena se alinea a la derecha, si es negativo se alinea a la izquierda. `{1,10}` aplica al valor de la variable en la segunda posición un ancho de columna de 10 caracteres y alineación a la derecha.

También se puede aplicar un formato específico agregando al marcador el símbolo de dos puntos `:` seguido de la cadena de formato. `{1,10:N2}` aplica al valor del marcador el formato `N2` que representa un número con separadores de dígitos y hasta 2 decimales. 

Como formula general tenemos:

```
{N[,M][:Formato]}
```

* `N` será el número que representa a la posición o índice del parámetro, empezando por cero. 
* `M` será el ancho usado para mostrar el parámetro, el cual se rellenará con espacios. Si `M` es negativo se justificará a la izquierda, si es positivo a la derecha. Es opcional.
* `Formato` será una cadena que indicará un formato a aplicar sobre ese parámetro. Es opcional.


:::note Información

Para conocer más detalles sobre los tipos de formato aplicables visita la [documentación oficial](https://docs.microsoft.com/es-es/dotnet/standard/base-types/formatting-types). 

:::

#### Aplicar un formato numérico estandar
¿Qué pasa si quiero mostrar un precio y quiero que los números siempre se impriman con 2 decimales y con el signo de la moneda? Cambio la última línea y aplico un **formato numérico estandar**. 

```csharp
Console.WriteLine("Se ingreso el precio {0:C2}, con IVA incluido suma ${1:C2}", precioSinIva, precioFinal);
```

`:C2` es el formato que se aplica sobre el valor en el marcador `0`. `C` se utiliza para formato de monedas y el `2` indica la cantidad de digitos desde el punto decimal que quiero mostrar. 

La salida del código anterior es:

```
Ingrese un precio: 12
Se ingreso el precio $ 12,00, con IVA incluido suma $ 14,52
```

:::note Información

Para conocer todos los formatos numéricos estandard visita la [documentación oficial](https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings). 

:::

#### Aplicar un formato numérico personalizado
Otra forma de hacer lo mismo es con un **formato numérico personalizado** 

```csharp
Console.WriteLine("Se ingreso el precio {0:$#.00}, con IVA incluido suma ${1:$#.00}", precioSinIva, precioFinal);
```
El signo `$` es un literal fijo. `#` representa un digito siempre que exista, de lo contrario muestra un string vacío. `.` es el punto decimal. `00` indica hasta dos decimales, y si hay menos o no existen rellena con ceros. 

La salida del código anterior es:

```
Ingrese un precio: 12
Se ingreso el precio $12,00, con IVA incluido suma $14,52
```

:::note Información

Para conocer todos los formatos numéricos personalizados visita la [documentación oficial](https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings). 

:::

### Secuencias de escape
Dentro de los `string` se puede incluir **secuencias de escape** que se utilizan para representar caracteres especiales. Los caracteres de escape vienen acompañados con el prefijo `\` (contra barra).

| Secuencia de escape | Descripción                  |
| :------------------ | :--------------------------- |
| `\'`                | Comilla simple               |
| `\"`                | Comilla doble                |
| `\\`                | Contra barra                 |
| `\n`                | Nueva línea / Salto de línea |
| `\t`                | Tabulación horizontal        |

```csharp
Console.WriteLine("Texto con salto de línea.\n")
Console.WriteLine("\tTexto tabulado horizontalmente.");
Console.WriteLine("Pongo \"comillas dobles\" a mi texto y también \'comillas simples\'.");
Console.WriteLine("Para trabajar con caracteres especiales hay que usar \\.");
```

La salida del código anterior es:

```
Texto con salto de línea.

        Texto tabulado horizontalmente.
Pongo "comillas dobles" a mi texto y también 'comillas simples'.
Para trabajar con caracteres especiales hay que usar \.
```

Existe una forma de escapar todos los caracteres especiales de un texto con el prefijo `@`, que también sirve para trabajar con texto multi-línea.   

```csharp            
Console.WriteLine(@"La ruta al archivo es: C:\\usuario\documentos\texto.txt");
Console.WriteLine(@"
Un texto
en más de una línea
es posible con C#
anteponiendo @ al literal de string.
");
```

La salida del código anterior es:

```
La ruta al archivo es: C:\\usuario\documentos\texto.txt

Un texto
en más de una línea
es posible con C#
anteponiendo @ al literal de string.
```

## Entrada de datos por consola
### Leer una línea de texto
Para tomar un dato ingresado por el usuario se usa el método `ReadLine` de la clase `Console`. 

```csharp
Console.Write("Ingrese una fruta: ");
string fruta = Console.ReadLine();

Console.WriteLine("Se ingreso la fruta {0}", fruta);
```

La salida del código anterior es:

```
Ingrese una fruta: Banana
Se ingreso la fruta Banana
```

### Leer números
El método `ReadLine` devuelve siempre un `string`. Si trabajamos con números tendremos que convertirlos a un tipo numérico. 

```csharp
Console.Write("Ingrese un precio: ");
string precioIngresado = Console.ReadLine();

decimal precioSinIva = decimal.Parse(precioIngresado);

decimal precioFinal = precioSinIva + precioSinIva * 0.21M; 

Console.WriteLine("Se ingreso el precio ${0}, con IVA incluido suma ${1}", precioSinIva, precioFinal);
```

La salida del código anterior es:

```
Ingrese un precio: 12
Se ingreso el precio 12, con IVA incluido suma 14,52
```

### Leer una tecla
Para obtener la tecla presionada por el usuario se utiliza `ReadKey` de la clase `Console`. Este método espera a que el usuario presione una tecla o combinación de teclas y retorna un objeto de tipo `ConsoleKeyInfo`.

A partir de la variable donde almacenamos el objeto de tipo `ConsoleKeyInfo` podremos acceder a las siguientes propiedades:

* `Key`: retorna un objeto de tipo `ConsoleKey` que representa a la tecla presionada. 
* `KeyChar`: retorna como tipo `char` el caracter relacionado a la tecla presionada (siempre que exista, de lo contrario retorna espacio vacío).
* `Modifiers`: retorna un objeto de tipo `ConsoleModifiers` que representa a los modificadores que se hayan aplicado en la combinación de teclas. Ejemplos de modificadores son `SHIFT`, `CTRL`, `ALT`, etc.  

Si presionamos, por ejemplo, la tecla `M` se imprimirá el caracter en la consola. Si al método `ReadKey` le pasamos como argumento `true` interceptará el caracter presionado y no lo mostará. 

```csharp            
Console.WriteLine("Presione una tecla o combinación de teclas:");

ConsoleKeyInfo teclaPresionada = Console.ReadKey(true);

ConsoleKey tecla = teclaPresionada.Key;
char caracter = teclaPresionada.KeyChar;
ConsoleModifiers modificadores = teclaPresionada.Modifiers;

Console.WriteLine("Tecla: {0}. Caracter: {1}. Modificadores: {2}", tecla, caracter, modificadores);
```

Al presionar la tecla `M`, la salida del código anterior es:

```
Tecla: M. Caracter: m. Modificadores: 0
```

Si presionamos simultáneamente la tecla `Shift` y la tecla `M`, la salida será:

```
Tecla: M. Caracter: M. Modificadores: Shift
```

## Modificando la consola
La clase `Console` tiene propiedades que nos permiten modificar cómo se mostrará la salida de texto. 

### Limpiar la consola
Para borrar el contenido de la consola se puede utilizar el método `Clear` de la clase `Console`.

```csharp
Console.Clear();
```

### Cambiar el color del texto
Para cambiar el color del texto, se tiene que asignar un nuevo valor a la propiedad `ForegroundColor` de la clase `Console`. Cada color es representado por un número. Para ayudarnos existe el enumerado `ConsoleColor` que contiene estos números representados por nombres descriptivos. 

Por ejemplo, para cambiar el color del texto a rojo se deberá escribir:

```csharp
Console.ForegroundColor = ConsoleColor.Red;
```

### Cambiar el color de fondo del texto
Para cambiar el color de fondo del texto, se tiene que asignar un nuevo valor a la propiedad `BackgroundColor` de la clase `Console`. También usaremos el enumerado `ConsoleColor` para obtener el código del color. 

Por ejemplo, para cambiar el color de fondo del texto a azul se deberá escribir:

```csharp
Console.BackgroundColor = ConsoleColor.Blue;
```

### Cambiar el título de la consola
Para cambiar el título que se muestra en la ventana de la consola se debe asignar el nuevo texto a la propiedad `Title` de la clase `Console`.

```csharp
Console.Title = "Mi primer programa en C#";
```
### Emitir un sonido
El método `Beep` de la clase `Console` nos permite emitir un sonido a través del altavoz de la consola. Opcionalmente, se le puede pasar como argumentos la frecuencia del sonido en hertz y la duración en milisegundos. 

```csharp
Console.Beep(); // Sonido por defecto.

Console.Beep(1000, 1500); // Sonido de 1000hz durante 1 segundo y medio. 
```

:::caution Advertencia

El método `Beep` no funciona en todas las plataformas.

:::