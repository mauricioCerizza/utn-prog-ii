---
title: Apuntes - Colecciones
sidebar_label: Matrices
slug: /clases/colecciones/apuntes/matrices
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---

Las matrices, también llamadas arrays, arreglos o vectores, son estructuras de datos que nos permiten almacenar múltiples variables **del mismo tipo**.

## Características de las matrices
### Dimensionalidad 
Las matrices pueden ser **unidimensionales**, **bidimensionales** o **multidimensionales**.

Las matrices unidimensionales tienen una sola dimensión. Las matrices que tiene muchas dimensiones son multidimensionales. 

### Tamaño fijo
La cantidad y el tamaño de las dimensiones son establecidos al momento de instanciar la matriz **y no pueden ser cambiados**. Si necesitamos alterar el tamaño de un array, tendremos que instanciar uno nuevo con distinta longitud y migrar los datos almacenados en el array original. 

### Indexación base-cero 
Se puede acceder a los elementos de una matriz a través de un índice numérico entero. En el caso de las matrices con más de una dimensión será un sub-índice por dimensión, y se accederá a un elemento específico con una determinada combinación de los distintos sub-índices. 

Se dice que las matrices tienen indexación de base-cero (zero indexed) porque sus elementos pueden ser accedidos a través de un índice numérico que comienza en el número cero y se incrementa de uno en uno.

Si tenemos un array con tamaño **_n_**, su primera posición se accederá con el **_índice 0_** y la última con el **_índice n-1_** (el tamaño menos uno).