---
title: Apuntes - Colecciones
sidebar_label: Matrices
slug: /clases/colecciones/apuntes/matrices
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---
# Matrices

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

## Matrices Unidimensionales

Las matrices son objetos cuya intacia debe ser creada. Utilizaremos el operador new para crear la instancia especificando el tipo de elemento de la matriz y el número de elementos.

### Instanciar

```csharp
int[] array = new int[5];
```
En el ejemplo anterior declaramos una matriz de 5 enteros. Los elementos de la matriz se inicializan con el valor predeterminado del tipo de elemento, 0 para enteros. 

Pueden almacenar cualquier tipo de elemento que se especifique.
```csharp
string[] arrayString = new string[6];
```

### Inicializar

Es posible inicializar los elementos de una matriz cuando se declara. En este caso no es necesario especificar la longitud porque se infiere por el número de elementos en la lista de inicialización.

```csharp
int[] a = new int[] { 1, 3, 5, 7, 9 };
```
Esta matriz contiene los elementos desde el índice <code>a[0]</code> hasta <code>a[4]</code>. 

![Matriz unidimensional](/clases/06-colecciones/Apuntes/matriz-unidimensional.png)

Se puede omitir el operador <code>new</code> y el tipo cuando inicializa una matriz tras la declaración.

```csharp
int[] array2 = { 1, 3, 5, 7, 9 };
```

## Matrices Multidimensionales

Las matrices pueden tener más de una dimensión. 

### Instanciar

Creamos una matriz bidimensional de tres filas y cinco columnas.

```csharp
int[,] array = new int[3, 5];
```

![Matriz multidimensional](/clases/06-colecciones/Apuntes/matriz-bidimensional.png)


Las matrices tridimensionales son análogas a un cubo Rubik 


```csharp
int[,,] array1 = new int[4, 2, 3];
```

### Inicializar

```csharp
int[,] array2D = new int[,] { { 1, 2 }, { 3, 4 }, { 5, 6 } };

//se accede a los elementos por indice

Console.WriteLine(array[2, 1]);
// La salida del ejemplo es:
// 6
```

Inicializacion de una matriz de tres dimensiones:
```csharp
int[,,] array3D = new int[,,] { { { 1, 2, 3 }, { 4, 5, 6 } }, { { 7, 8, 9 }, { 10, 11, 12 } } };
```

## Matrices Escalonadas (Jagged Array)
Una matriz escalonada es una matriz cuyos elementos son matrices, posiblemente de diferentes tamaños. También se denomina "matriz de matrices".

### Instanciar

```csharp
int[][] jaggedArray = new int[3][];
```
### Inicializar

Antes de poder usar la matriz escalonada, sus elementos deben inicializarse. Se puede inicializar los elementos de esta manera:
```csharp
jaggedArray[0] = new int[5];
jaggedArray[1] = new int[4];
jaggedArray[2] = new int[2];
```


Cada uno de los elementos es una matriz unidimensional de números enteros. El primer elemento es una matriz de 5 enteros, el segundo es una matriz de 4 enteros y el tercero es una matriz de 2 enteros.

También es posible inicializar los elementos de la matriz con valores, en cuyo caso no necesita el tamaño de la matriz. Por ejemplo:

```csharp
jaggedArray[0] = new int[] { 1, 3, 5, 7, 9 };
jaggedArray[1] = new int[] { 0, 2, 4, 6 };
jaggedArray[2] = new int[] { 11, 22 };
```

Es posible combinar matrices escalonadas y multidimensionales:

```csharp
int[][,] jaggedArray = new int[3][,]

jaggedArray[0] = new int[] { {1,3}, {5,7} };
jaggedArray[1] = new int[] { {0,2}, {4,6}, {8,10} };
jaggedArray[2] = new int[] { {11,22}, {99,88}, {0,9} };

// Puedemos acceder a elementos individuales
System.Console.Write("{0}", jaggedArray[0][1, 0]);

//La salida de este ejemplo es:
// 5
```
La propiedad <code>Length</code> devuelve el número de matrices contenidas en la matriz escalonada. Si tomamos como ejemplo la matriz anterior <code>jaggedArray.Length</code> devuelve el valor 3.

