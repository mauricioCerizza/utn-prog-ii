---
sidebar_label: Colecciones
slug: /clases/colecciones/apuntes/colecciones
hide_table_of_contents: false
hide_title: true
author: 
authorURL: 
---

Los sistemas de hoy manejan grandes cantidades de datos y por eso requerimos herramientas poderosas para trabajar con ellos. Es ahí cuando las colecciones entran en acción.

Las colecciones son **objetos** especializados en almacenar, organizar y administrar una gran cantidad de datos. 

## Características de las colecciones
### Tamaño dinámico
El tamaño de las colecciones no es fijo. Se incrementa y disminuye dinamicamente.

### Capacidad para enumerar la colección
Las colecciones implementan la interfaz IEnumerable, esto permite recorrerlas con un foreach

### Capacidad para copiar el contenido de la colección a una matriz
Todas las colecciones pueden copiarse a una matriz por medio del método **CopyTo**

### Indexación base-cero 
Todas las colecciones indexadas tiene un índice base-cero.

## Tipos de colecciones
### Colecciones Genéricas
Las colección genérica están contenidas en el namespace System.Collections.Generic . En una colección genérica todos los elementos de la colección tienen el mismo tipo de datos. Una colección genérica impone seguridad de tipo al permitir que solo se agregue el tipo de datos deseado.

Algunas de las clases de uso frecuente del espacio de nombres System.Collections.Generic :

|Clase|Decripción|
|--|--|
|Dictionary<TKey,TValue>|Representa una colección de pares clave / valor que se organizan en función de la clave.|
|List < T >|Representa una lista de objetos a los que se puede acceder por un índice numérico. Proporciona métodos para buscar, ordenar y modificar la listas.|
|Queue< T >|Representa una colección de objetos que se procesa en orden **FIFO** primero en entrar, primero en salir.|
|Stack< T >|Representa una colección de objetos que se precesa en orden **LIFO**  último en entrar, primero en salir.|
|SortedList<TKey,TValue>|Representa una colección de pares clave / valor que se ordenan por clave.|

### Colecciones No-Genéricas
Las clases que pertenecen al namespace System.Collections no cunetan con seguridad de tipo. No almacenan elementos como objetos de tipo específico, sino como objetos de tipo *Object*.

Algunas de las clases de uso frecuente del espacio de nombres System.Collections :

|Clase|Decripción|
|--|--|
|ArrayList|Representa una matriz de objetos cuyo tamaño aumenta dinámicamente según sea necesario.|
|Hashtable|Representa una colección de pares clave / valor que se organizan en función del código hash de la clave.|
|Queue|Representa una colección de objetos que se procesa en orden **FIFO** primero en entrar, primero en salir.|
|Stack|Representa una colección de objetos que se precesa en orden **LIFO**  último en entrar, primero en salir. |

### Colecciones Concurrentes
Las colecciones que pertenecen al namespace System.Collections.Concurrent proporcionan operaciones eficientes y seguras para acceder a los elementos de la colección desde varios hilos de ejecución.

Algunas clases incluidas en el namespace System.Collections.Concurrent son BlockingCollection < T > , ConcurrentDictionary <TKey, TValue> , ConcurrentQueue < T > y ConcurrentStack < T > .

### Colecciones Inmutables
Las colecciones que pertenecen al namespace System.Collections.Inmutable no pueden ser modificadas. Mantienen la cantidad de elementos y el orden relativo todo el tiempo y no permiten las asignaciones de elemento. 
