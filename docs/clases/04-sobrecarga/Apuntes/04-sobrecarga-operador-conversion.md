---
sidebar_label: Sobrecarga de Operadores de Conversión
slug: /clases/sobrecarga/apuntes/sobrecarga-operador-conversion
hide_table_of_contents: false
hide_title: true
author: 
authorURL: 
---
## Sobrecarga de Operadores de Conversión

Una Clase puede definir una conversión implícita o explícita personalizada desde o hacia otro tipo. La sobrecarga del operador de conversión se puede definir, por ejemplo, para habilitar conversiones explícitas e implícitas entre clases que no tienen una relación de herencia.

### Conversión Implícita
Las conversiones implícitas no requieren que se invoque una sintaxis especial y pueden ocurrir en una variedad de situaciones, por ejemplo, en las invocaciones de asignaciones.

**Declaración:**
```csharp
[acceso] static implicit operator nombreTipo(Tipo a)
{
    //…
}
```

### Conversión Explícita
Las conversiones explícitas requieren una expresión de conversión (tipo).

**Declaración:**
```csharp
[acceso] static explicit operator nombreTipo(Tipo a)
{
    //…
}
```