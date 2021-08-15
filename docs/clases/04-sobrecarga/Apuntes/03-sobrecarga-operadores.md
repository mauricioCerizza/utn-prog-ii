---
sidebar_label: Sobrecarga de Operadores
slug: /clases/sobrecarga/apuntes/sobrecarga-operadores
hide_table_of_contents: false
hide_title: true
author: 
authorURL: 
---
## Sobrecarga de Operadores

Una clase puede proporcionar la implementación personalizada de una operación en caso de que uno o ambos operandos sean del tipo de la clase.  Por tanto, no es posible que un operador definido por el usuario tenga la misma firma que un operador predefinido.


### Los operadores unarios sobrecargables son:
```csharp
+   -   !   ~   ++   --   true   false 
```


### Los operadores binarios sobrecargables son:
```csharp
+   -   *   /   %   &   |   ^   <<   >>   ==   !=   >   <   >=   <=
```
Por ejemplo:

```csharp
public class Cuadrado
{
	int lado;

	public static bool operator == (Cuadrado c1, Cuadrado c2){
	
	    return c1.lado == c2.lado;
    }

    public static bool operator != (Cuadrado c1, Cuadrado c2){
	
	    return !(c1 == c2);
    }
}
```
Los operadores de comparación deben sobrecargarse en pares. Es decir, si alguno de los operadores de un par está sobrecargado, el otro operador también debe estar sobrecargado. == y != , < y > , <= y  >=


Cuando un operador binario está sobrecargado, el operador de asignación correspondiente, si lo hay, también está sobrecargado implícitamente. Por ejemplo, una sobrecarga de operador * también es una sobrecarga de operador *=. El operador de asignación (=) no se puede sobrecargar. Una asignación siempre realiza una simple copia bit a bit de un valor en una variable.




### No es posible sobrecargar los operadores:
```csharp
=, &&, ||, ??, ?:, =>, checked, unchecked, new, typeof, default, as, is
```

