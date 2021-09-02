---
title: Apuntes - Interfaces Explícitas
sidebar_label: Interfaces Explícitas
slug: /clases/interfaces/apuntes/interfaces-explicitas
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---

Si una clase implementa dos interfaces que contienen un miembro con la misma definición entonces, al implementar ese miembro en la clase, ambas interfaces usarán ese miembro como implementación. 

Puede suceder que no se quiera llamar a la misma implementación para las dos interfaces. Para esto usamos la implementación **explícita**.

Dependiendo de nuestra aplicación podemos necesitar que un miembro se comporte de determinada manera según la interfaz a través de la que se lo está implementando y que, además, no se pueda utilizar en otra circunstancia.

+  Si definimos la interfaz explícitamente solo podremos acceder a la funcionalidad de dicha interfaz cuando la estemos tratando como un objeto de dicha interfaz.
+ El uso explícito nos proporciona una mayor seguridad de tipos y un mayor orden.

Por ejemplo: 

Tenemos las siguientes interfaces declaradas:

```csharp
    interface ICazador
    {
        void Cazar();
        void Moverse(); 
    }
```

```csharp
   interface IVolador
   {
        string EnElAire { get; } 
        void Volar(); 
        void Moverse();
   }     
```

Y tenemos la siguiente clase:

```csharp
 public class Espiritu : IVolador, ICazador
```


La manera de implementar las interfaces explícitamente es con un casteo, de esta manera:

```csharp
((ICazador)miEspiritu).Moverse(); 
```

