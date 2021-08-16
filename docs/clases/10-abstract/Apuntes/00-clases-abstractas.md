---
title: Apuntes - Clases y métodos abstractos
sidebar_label: Clases abstractas
slug: /clases/abstract/apuntes/abstract
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---
## Clases Abstractas

Las clases se pueden declarar como abstractas poniendo la palabra clave abstract antes de la definición de la clase.

```csharp
public abstract class Figura{
    //...
} 
```

No se puede crear una instancia de una clase abstracta. El propósito de una clase abstracta es proporcionar una definición común de una clase base que pueden compartir múltiples clases derivadas. Por ejemplo, se puede definir una clase abstracta que se usa como parámetro para muchas de sus funciones y requerir que los programadores que usan esa clase proporcionen su propia implementación de la clase creando una clase derivada.

Las clases abstractas pueden contener métodos, propiedades, indexadores y eventos abstractos.

No es posible marcar una clase abstracta con el modificador *sealed* porque ambos modificadores tienen significados opuestos. El modificador *sealed* evita que una clase se pueda heredar y el modificador *abstract* requiere que se herede una clase.

Es posible tener variables con tipos que en tiempo de compilación sean abstractos. Estas variables serán *null* o ocntendrán referencias a *instancias de una clase derivada no-abstracta*


```csharp
public abstract class Figura{
    //...
} 
public abstract class Cuadrado : Figura{
    //...
} 

Figura figura = new Cuadrado();

```

Una clase abstracta que implementa una interfaz debe proporcionar implementación para todos los miembros de la interfaz. También puede marcar los métodos de la interfaz como métodos abstractos. Por ejemplo:

```csharp
interface  IFigura{
    float CalcularArea();
} 
public abstract class Figura2D : IFigura{
    public abstract float CalcularArea();
} 
public class Cuadrado : Figura2D{
    int lado;
    public override float CalcularArea(){
        return lado * lado;
    }
}
```