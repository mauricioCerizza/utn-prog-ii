---
sidebar_label: Sobrecarga de Métodos
slug: /clases/sobrecarga/apuntes/sobrecarga-metodos
hide_table_of_contents: false
hide_title: true
author: 
authorURL: 
---
## Sobrecarga de Métodos
Por lo general, la sobrecarga de métodos se utiliza para crear varios métodos con el mismo nombre que realicen la misma tarea o tareas similares, pero con distintos tipos o distintos números de argumentos. 

### Tipo de parámetros

La sobrecarga del tipo de parámetro permite utilizar el mismo identificador para métodos que realizan operaciones idénticas con diferentes tipos de datos.

Por ejemplo, los métodos Min y Max de Math se sobrecargan con 11 versiones. Estos métodos buscan el mínimo y el máximo, respectivamente, de dos valores de cada uno de los 11 tipos numéricos simples.

```csharp
public static class Math {

        public static int Max(int val1, int val2);
		public static int Max(long val1, long val2);
		public static int Max(float val1, float val2);
		// ...
		public static int Max(int val1, int val2);
		public static int Max(long val1, long val2);
		public static int Max(float val1, float val2);
		// ...
}
```

Cuando se hace una llamada a un método sobrecargado el compilador selecciona el método apropiado mediante un análisis de su **firma**. La firma es una combinación del nombre del método y del número, tipos y orden de sus parámetros. La firma también incluye la forma en que se pasan esos parámetros, los cuales pueden modificarse mediante las palabras ref y out. Las llamadas a los métodos no pueden diferenciarse en base al tipo de valor de retorno. Los métodos sobrecargados pueden tener tipos de retorno iguales o distintos, si los métodos tienen distintas listas de parámetros.

### Cantidad de parámetros

La sobrecarga en el número de parámetros hace posible proporcionar versiones más simples de métodos. 

Por ejemplo, el método Concat de String. Este método concatena las instancias de string que recibe como parámetro:

```csharp
public class String{
	
	public static String Concat(String str0, String str1){	}
	public static String Concat(String str0, String str1, String str2){}
    public static String Concat(String str0, String str1, String str2, String str3){}
    // ...
}
```

