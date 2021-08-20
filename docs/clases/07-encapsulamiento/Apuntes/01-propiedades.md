---
sidebar_label: Propiedades
slug: /clases/encapsulamiento/apuntes/propiedades
hide_table_of_contents: false
hide_title: true
author: 
authorURL: 
---
## Propiedades

Una propiedad es un miembro que proporciona un mecanismo flexible para leer, escribir o calcular el valor de un campo. Las propiedades se pueden usar como si fueran miembros de datos públicos, pero en realidad son métodos especiales llamados *descriptores de acceso* . Esto permite acceder fácilmente a los datos de manera segura.

Las propiedades permiten que una clase exponga una forma pública de obtener y establecer valores, mientras oculta el código de implementación o validación.

```csharp
class Clase
{
    private [tipo_dato] campo;

    public [tipo_dato] Propiedad
    {
        get
        {
            return campo;
        }
        set
        {
            campo = value;
        }
    }

}
```
Analicemos el código anterior:

+ La palabra reservada **get** define un método de *acceso* en una propiedad que devuelve el valor de la propiedad. Debe devolver un valor del tipo de propiedad. Equivale a leer el valor del campo
+ La palabra reservada **set** define un método de *acceso* en una propiedad que asigna el valor a la propiedad.
+ La palabra reservada **value** se utiliza como un párametro implícito para definir el valor que asigna el *set* al campo. 
+ Las propiedades pueden ser de lectura y escritura (tienen un get y un set), de sólo lectura (tienen sólo un get) o de solo escritura (tienen sólo un set). 

```csharp
class IntervaloTiempo
{
    private double segundos;

    public double Horas
    {
       get { return segundos / 3600; }
       set {
          if (value < 0 || value > 24)
             throw new ArgumentOutOfRangeException();

          segundos = value * 3600;
       }
   }
}

class Program
{
   static void Main()
   {
       IntervaloTiempo t = new IntervaloTiempo();
       // Al asignar un valor a una propiedad invocamos el metodo de acceso set
       t.Hours = 24;

       // Al recuperar el valor de la propiedad estamos invocando el método de acceso get 
       Console.WriteLine($"El intervalo en horas es: {t.Hours}");
   }
}
// El ejemplo muestra la siguiente salida:
//    El intervalo en horas es: 24
```

En este ejemplo, la clase representa un intervalo de tiempo. Internamente, la clase almacena el intervalo de tiempo en segundos en un campo privado llamado *segundo*. Una propiedad de lectura y escritura denominada *Horas* permite al usuario de la clase especificar el intervalo de tiempo en horas. Tanto el *get* como el *set* realizan la conversión necesaria entre horas y segundos. Además, el *set* valida los datos y lanza una ArgumentOutOfRangeException si el número de horas no es válido.

:::note Atención

Las propiedades pueden ser marcados como <code>public</code>, <code>private</code>, <code>protected</code>,<code>internal</code> , <code>protected internal</code>, o <code>private protected</code> . Estos modificadores de acceso definen cómo los usuarios de la clase pueden acceder a la propiedad. Los descriptores de acceso <code>get</code> y <code>set</code> para la misma propiedad pueden tener diferentes modificadores de acceso. Por ejemplo, <code>get</code> puede ser <code>public</code> para permitir el acceso de solo lectura desde fuera de la clase, y <code>set</code> puede ser <code>private</code> o <code>protected</code>.

:::