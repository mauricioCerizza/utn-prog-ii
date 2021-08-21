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

## Mostrar datos por consola
Para mostrar texto se utilizan los métodos `Write` y `WriteLine` de la clase `Console` cuya única diferencia es que el último genera un salto de línea después de imprimir el texto. 


### Dar formato al texto de salida


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
Console.WriteLine("Para trabajar caracteres especiales hay que usar \\.");
```

La salida del código anterior es:

```
Texto con salto de línea.

        Texto tabulado horizontalmente.
Pongo "comillas dobles" a mi texto y también 'comillas simples'.
Para trabajar caracteres especiales hay que usar \.
```

También se pueden escapar todos los caracteres especiales de un texto con el prefijo `@`, que también sirve para trabajar con texto multi-línea.   

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

## Leer datos por consola
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

#### Aplicar un formato numérico estandar
¿Qué pasa si quiero que los precios siempre se muestren con 2 decimales y con el signo de la moneda? Cambio la última línea y aplico un **formato numérico estandar**. 

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


```csharp
Console.Write("Ingrese una fruta: ");
string fruta = Console.ReadLine();

Console.WriteLine("Se ingreso la fruta {0}", fruta);
```

Para obtener la tecla presionada por el usuario se utiliza `ReadKey`.


