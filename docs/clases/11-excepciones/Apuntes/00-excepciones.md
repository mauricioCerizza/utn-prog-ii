---
title: Apuntes - Excepciones
sidebar_label: Excepciones
slug: /clases/excepciones/apuntes/excepciones
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---
## ¿Qué son las Excepciones?

Las excepciones es la manera que tiene C# de controlar la gestión de errores. La gestión de errores es la técnica que permite interceptar con éxito errores esperados o inesperados en tiempo de ejecución.

+ Cuando se produce un error se *lanza* una excepción.
+ El programa debe construirse utilizando diferentes técnicas de gestión de errores para *atrapar* las excepciones y administrarlas de manera conveniente.

+ Las excepciones detienen el flujo actual del prograama y si no se hace nada, el programa dejará de funcionar. Por ejemplo, si se divide un número por cero o cuando un usuario selecciona un archivo que no existe.

+ Todas las excepciones derivan de la clase **Exception**, que es parte del runtime del lenguaje común (CLR).

:::important Ventajas
+ Los mensajes de error no están representados por valores o enumeraciones. Son significativos y descriptivos, que contienen información específica:
    + Se utilizan clases concretas como **OutOfMemoryException** o, por ejemplo, **FileNotFoundException**, que podría contener el nombre del archivo no encontrado.
+ Cada clase de excepción puede residir dentro de su propio archivo de origen y no está vinculadas a las demás.
:::

## Bloque Try-Catch
Los bloques **try-catch** son la solución que nos ofrece la orientación a objetos a los problemas de la gestión de errores.

La idea consiste en separar físicamente las instrucciones básicas del programa para el flujo de control normal de las instrucciones.
+ Las partes de código que podrían lanzar excepciones se colocan en un bloque **try**, mientras que el código para el tratamiento de excepciones se ponen en un bloque **catch** aparte.


```csharp
    void MetodoExcepcion()
    {
        try
        {
            Console.WriteLine("Escriba un número");
            int i = int.Parse(Console.ReadLine());
        }
        catch (OverflowException e)
        {
            Console.WriteLine(e.Message);
        }  
    }
```

+ Si se encuentra un bloque **catch**, se considera que la excepción fue capturada y se reanuda la ejecución normal desde el cuerpo del bloque *catch* (que, en este caso, escribe el mensaje contenido en el objeto excepción **OverFlowException**).
+ El uso de los bloques **try-catch** hace que las instrucciones para tratamiento de errores no se mezclen con las instrucciones lógicas básicas, por lo que el programa es más fácil de interpretar.


## Múltiples Catch
+ Un bloque de código en una instancia **try** puede contener muchas instrucciones, cada una de las cuales puede producir una o más clases diferentes de excepción.
+ Al haber muchas clases de excepciones distintas, es posible que haya muchos bloques **catch** y que cada uno de ellos capture un tipo específico de excepción.
+ El runtime captura automáticamente objetos excepción de un tipo concreto en un bloque **catch** para ese tipo.


```csharp
    try
    {
        Console.WriteLine("Escriba el primer número");
        int i = int.Parse(Console.ReadLine());
        Console.WriteLine("Escriba el segundo número");
        int j = int.Parse(Console.ReadLine());
        int k = i / j;
    }
    catch (OverflowException e)
    {
        Console.WriteLine(e.Message);
    }
    catch (DivideByZeroException e)
    {
        Console.WriteLine(e.Message);
    }
```

## Catch Genérico
+ Un bloque **catch** general (Exception), puede capturar cualquier excepción independientemente de su clase y se utiliza con frecuencia para capturar cualquier posible excepción que se pudiera producir por la falta de un
controlador adecuado.
+ Un bloque **try** no puede tener más que un bloque **catch general**.
+ En caso de existir, un bloque catch general debe ser el último bloque catch
en el programa.

[//]: # "TODO Ejemplo de varios catch + catch general"

## Throw
+ Cuando se necesita lanzar una excepción, el runtime ejecuta una instrucción **throw** y *lanza* una excepción definida por el sistema.
+ Esto interrumpe inmediatamente la secuencia de ejecución normal del programa y transfiere el control al primer bloque **catch** que pueda hacerse cargo de la excepción en función de su clase.
+ Es posible utilizar la instrucción **throw** para lanzar excepciones propias.

```csharp
    if (minuto < 1 || minuto >= 60)
    {
        string fallo = minuto + "no es un minuto válido";
        throw new TiempoInvalidoException(fallo);
    }
```
+ Se emplea la instrucción throw para lanzar una excepción definida por el usuario, TiempoInvalidoException, si el tiempo analizado no es válido.
+ En general, las excepciones esperan como parámetro una cadena con un mensaje significativo que se puede mostrar o quedar registrado cuando se captura la excepción.
+ También es conveniente lanzar una clase adecuada de excepción.
+ Sólo es posible lanzar un objeto si el tipo de ese objeto deriva directa o indirectamente de *System.Exception*.
+ Se puede utilizar una instrucción throw en un bloque catch para volver a lanzar el mismo objeto excepción u otro nuevo.

## Bloque Finally
+ La cláusula **finally** de C# contiene un conjunto de instrucciones que es necesario ejecutar sea cual sea el flujo de control.
+ Las instrucciones del bloque **finally** se ejecutarán aunque el control abandone un bucle try como resultado de la ejecución normal porque el flujo de control llega al final del bloque try.
+ Del mismo modo, también se ejecutarán las instrucciones del bloque **finally** si el control abandona un bucle try como resultado de una instrucción throw o una instrucción de salto como break o continue.

:::important El bloque **finally** es útil en dos casos:
+ Evitar la repetición de instrucciones.
+ Liberar recursos tras el lanzamiento de una excepción.
:::


```csharp
    try
    {
        // Código
    }
    catch (OverflowException e)
    {
        Console.WriteLine(e.Message);
    }
    catch (DivideByZeroException e)
    {
        Console.WriteLine(e.Message);
    }
    finally
    {
        Console.WriteLine("Pulse una tecla para continuar...");
    }
```

## InnerException > sacado de la doc de microsoft REVISAAAAAAAAAAR
+ Una excepción que se produce como consecuencia directa de una excepción anterior debe incluir una referencia a esta última en la propiedad **InnerException**. Esta propiedad devuelve el mismo valor pasado al constructor o una referencia nula

+ Esta clase es la clase base para todas las excepciones. Cuando se produce un error, el sistema o la aplicación que se ejecuta actualmente lo notifica iniciando una excepción que contiene información sobre el error. Una vez que se produce una excepción, la aplicación o el controlador de excepciones predeterminado las controla


```csharp
   using System;

    class ExceptionTestClass
    {
        public static void Main()
        {
            int x = 0;
            try
            {
                int y = 100 / x;
            }
            catch (ArithmeticException e)
            {
                Console.WriteLine($"ArithmeticException Handler: {e}");
            }
            catch (Exception e)
            {
                Console.WriteLine($"Generic Exception Handler: {e}");
            }
        }	
    }

```

:::important La excepción que resulta de ese código es :
ArithmeticException Handler: System.DivideByZeroException: Attempted to divide by zero.
   at ExceptionTestClass.Main()
:::
