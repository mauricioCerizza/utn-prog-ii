---
sidebar_label: Programación multi-hilo
slug: /clases/concurrencia/apuntes/multihilo
hide_table_of_contents: false
hide_title: true
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## Programación multi-hilo
Un **proceso** es un programa en ejecución que tiene asignados recursos tales como memoria e hilos. 

Un **hilo <*thread*>**, también llamado hebra o subproceso, es la unidad básica a la que un sistema operativo asigna tiempo de procesamiento. Son los encargados de ejecutar nuestro código sentencia a sentencia. 

Por defecto cada proceso tiene un único hilo, es decir, sólo puede procesar una tarea a la vez. La **programación multi-hilo <*multithreaded programming*>** permite que un proceso se ejecute sobre múltiples hilos y cada uno de esos hilos esté realizando una tarea distinta en paralelo. 

Todos los hilos de un mismo proceso comparten los mismos recursos asignados por el sistema operativo.

[//]: # "TODO Ejemplo del supermercado"

### Multitarea apropiativa
Por cada núcleo de la CPU, se puede ejecutar a lo mucho un proceso en cada momento. Windows y otros sistemas operativos modernos simulan la ejecución paralela de tareas dividiendo el tiempo de procesamiento entre los hilos, permitiendo que se vayan ejecutando uno después de otro en pequeñas fracciones de tiempo. El hilo que se está ejecutando es suspendido cuando termina su fracción de tiempo, luego el procesador permite que otro hilo se ejecute por el mismo periodo de tiempo. Esta forma de simular el paralelismo recibe el nombre de **multitarea apropiativa <*preemptive multitasking*>**. 

Cuando Windows cambia de un hilo a otro, guarda el contexto donde se ejecutó el hilo actual y recarga el contexto del próximo hilo en la cola de ejecución. Hay que ser conscientes de que esto también consume tiempo y recursos. 

:::caution Advertencia

No siempre tener más hilos va a mejorar el rendimiento, se deben realizar pruebas de rendimiento comparando la ejecución de procesos con y sin múltiples hilos.

:::

Cada hilo tiene una **pila de ejecución <*call stack*>** independiente, esto significa que cada uno maneja su propia secuencia de funciones a ejecutar. 

En algunos tipos de aplicación existen hilos especiales, por ejemplo un hilo para la interfaz de usuario <*UI Thread*> o el hilo principal en los programas de consola <*Main Thread*>.

IMAGEN - proceso, hilos, call stack y memoria

Todas las aplicaciones de .NET tienen un **conjunto de hilos <*thread pool*>** que se encarga de mantener un número de hilos activos esperando para ejecutar cualquier trabajo que se requiera. Lo podemos ver como un lugar donde podemos poner en cola tareas a realizar y que se ajustará automáticamente de acuerdo a la demanda.

En .NET se solía utilizar la clase ***Thread*** para trabajar con hilos, la cual es una abstracción de bajo nivel. El *conjunto de hilos* es una abstracción de un nivel un poco más alto, ya que se encargará por si mismo de instanciar un hilo si existe la necesidad. Actualmente no se recomienda crear instancias de ***Thread*** ya que existen nuevas soluciones que fueron afinadas para cubrir de forma eficiente y sencilla la gran mayoría de los escenarios reales.

Las clases con las que trabajaremos son abstracciones de alto nivel que ponen en cola trabajo para que sea resuelto por el *conjunto de hilos*. 

IMAGEN - thread vs thread pool vs high level abstractions

### Programación en paralelo
La **programación en paralelo <*parallel programming*>** es un tipo de programación multi-hilo, que a su vez es una forma de concurrencia. Se utiliza cuando se necesita dividir una gran carga de trabajo computacional en partes independientes y ejecutarlas en paralelo, maximizando el uso de los núcleos de la CPU.

:::important IMPORTANTE
Cuando procesamos en paralelo cada fragmento de trabajo de ser tan independiente del resto como sea posible. 
:::

IMAGEN - ejemplo en la cocina

Existen dos formas de paralelismo: data parallelism y task parallelism

IMAGEN - tipos de concurrencia y subtipos

https://docs.microsoft.com/en-us/dotnet/standard/parallel-programming/task-based-asynchronous-programming

Parallel.ForEach

Task.Run

Colecciones concurrentes

## Resumen de la sección

+ ¿Qué significa concurrencia?
+ ¿Qué formas de concurrencia existen y cuándo se usa cada una?