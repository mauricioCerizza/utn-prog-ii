---
sidebar_label: Métodos Abstractos
slug: /clases/abstract/apuntes/metodos-abstractos
hide_table_of_contents: false
hide_title: true
author: 
authorURL: 
---

## Métodos Abstractos.


Podemos definir un método como abstracto con la palabra reservada abstract antes del tipo de retorno del método. Por ejemplo:

```csharp
public abstract class Figura
{
    public abstract float CalcularArea();
}
```
Los métodos abstractos no tienen implementación, por lo que la definición del método va seguida de un punto y coma en lugar de un bloque de método normal. Las clases derivadas de la clase abstracta **deben** implementar todos los métodos abstractos. 

Las declaraciones de métodos abstractos solo se permiten en clases abstractas.

La implementación la proporciona un método *override* que es miembro de una clase no abstracta. 

```csharp
public abstract class Cuadrado : Figura
{
    int lado;
   
    public override float CalcularArea(){
        return lado * lado;
    }
}
```

Un miembro abstracto no puede ser estático.

