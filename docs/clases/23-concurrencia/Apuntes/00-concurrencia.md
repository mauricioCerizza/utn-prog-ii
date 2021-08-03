---
title: Apuntes - Concurrencia
sidebar_label: Concurrencia
slug: /clases/concurrencia/apuntes/concurrencia
hide_table_of_contents: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## ¿Qué es concurrencia?
En programación hablamos de **concurrencia** cuando se ejecuta más de una tarea o proceso al mismo tiempo. 

Esta habilidad es útil cuando necesitamos que una aplicación haga alguna cosa *mientras* está trabajando en algo más.  

La concurrencia es un aspecto clave de las aplicaciones modernas, permite que:
+ Los usuarios finales puedan interactuar con la interfaz de la aplicación de manera no-bloqueante. 
+ Un servidor pueda atender varias peticiones en simultáneo y no afectar los tiempos de respuesta ante periodos de alta demanda. 
+ Realizar tareas de computo complejas de manera más rápida y haciendo un uso más eficaz los recursos de la computadora. 

En esta sección veremos las **dos formas de concurrencia** más comunes: **programación multi-hilo <*multithreaded programming*>** y **programación asincrónica <*asynchronous programming*>**.

## Programación multi-hilo
La **programación multi-hilo <*multithreaded programming*>** es una forma de concurrencia 

Un **hilo <*thread*>**, también llamado hebra o subproceso, es un ejecutor de tareas independiente. 

Un **proceso** está compuesto por múltiples hilos y cada uno de esos hilos puede estar realizando una tarea distinta en paralelo. Todos los hilos de un mismo proceso comparten los mismos recursos del sistema operativo.

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