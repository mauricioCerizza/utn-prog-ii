---
title: Apuntes - Interfaces
sidebar_label: Interfaces
slug: /clases/interfaces/apuntes/interfaces
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---
## ¿Qué son las Interfaces?
Una interfaz define un contrato. Cualquier clase o estructura no abstracta que implemente este contrato debe incorporar una implementación de los miembros definidos en la interfaz. 

Una declaración de una interfaz debe contener las declaraciones (es decir, las firmas sin la implementación) de los siguientes miembros, que pueden o no ser estáticos (si es estático sí debe tener la implementación):

+ Métodos.
+ Propiedades.
+ Indexadores.
+ Eventos.
+ Constructores estáticos.

Al utilizar interfaces podemos, por ejemplo, incluir diferentes comportamientos en una clase. Esto es importante porque C# no acepta la herencia múltiple.

+ C# no permite especificar atributos en las interfaces.
+ Todos los métodos son públicos por default.
+ Todos los métodos son como “abstractos” ya que no cuentan con implementación. 
+ Se pueden especificar propiedades.
+ Las clases pueden implementar varias interfaces.
+ Las interfaces pueden heredar de otras interfaces.
+ Se las llama como un método de instancia.

```csharp
    public interface IMoverse
    {
        public void Moverse();
    }
```

```csharp
    public interface IHacerSonido
    {
        public void HacerSonido();
    }
```

```csharp
    public class Gato : IMoverse, IHacerSonido
    {
        public void Moverse() 
        {
            Console.WriteLine("Caminata gatuna");
        }
        public void HacerSonido() 
        {
            Console.WriteLine("Miau Miau!");
        }
    }
```


:::important IMPORTANTE
Diferencia entre clase abstracta e interfaces:
+ Una clase abstracta permite crear funcionalidad que la clase que hereda puede implementar o sobreescribir. Una clase puede heredar una sola clase abstracta.
+ Una interfaz permite solamente definir funcionalidad, no implementarla. Se pueden heredar múltiples interfaces.
:::