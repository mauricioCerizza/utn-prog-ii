---
title: Apuntes - Sobrecarga
sidebar_label: Sobrecarga
slug: /clases/sobrecarga/apuntes/sobrecarga
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---

## ¿Qué es la Sobrecarga?

La sobrecarga es una de las técnicas más importantes para mejorar la usabilidad, la productividad y la legibilidad de nuestro código. Permite declarar **miembros con el mismo nombre** en la misma clase, siempre y cuando tengan **distintos conjuntos de parámetros**

Debido a que solo los métodos, constructores y propiedades indexadas pueden tener parámetros, sólo esos miembros pueden sobrecargarse **cambiando el número, el tipo y el orden de los tipos de los parámetros.**

La sobrecarga consiste en **crear dos o más miembros** (métodos, constructores o indexadores) **con el mismo identificador** (mismo nombre), dentro de la misma clase, **cambiando el número** de parámetros, **tipo** de parámetros **u orden de los tipos**. 

Por ejemplo, el método WriteLine está sobrecargado:

 ```csharp
public static class Console {
    public void WriteLine();
    public void WriteLine(string value);
    public void WriteLine(bool value);
    public void WriteLine(string value, Object arg);
    // ...
}
```
