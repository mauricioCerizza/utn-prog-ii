---
sidebar_label: Indexadores
slug: /clases/encapsulamiento/apuntes/indexadores
hide_table_of_contents: false
hide_title: true
author: 
authorURL: 
---

## Indexadores

Los indexadores son una conveniencia sintáctica que permiten a las instancias de una clase ser indexadas al igual que los arrays. Los indexadores se parecen a las propiedades, excepto que sus descriptores de acceso toman parámetros.

```csharp
class Dias
{
    string [] dias = {"Lunes","Martes","Miercoles","Jueves","Viernes"};

    public string this[int index]
    {
        get 
        {
            return dias[index];
        }
        set
        {
             dias[index] = value;
        }
    }

}
class Program
{
   static void Main()
   {
       Dias d = new Dias();

       Console.WriteLine(d[2]);
   }
}
// El ejemplo muestra la siguiente salida:
//    Miercoles
```

+ Un descriptor de acceso <code>get</code> devuelve un valor. Un descriptor de acceso <code>set</code> asigna un valor.

+ La palabra reservada <code>this</code> se utiliza para definir el indexador.

+ La palabra reservada <code>value</code> se utiliza para definir el valor que asigna el <code>set</code>.

+ No es necesario indexar sólo con números enteros.

+ Los indexadores pueden estar sobrecargados.

+ Los indexadores pueden tener más de un parámetro formal, por ejemplo, para acceder a una matriz bidimensional.

:::note Atención

Asegúrese de incorporar algún tipo de estrategia de manejo de errores para manejar la posibilidad de que el usuario de la clase pase un valor de índice no válido.

:::
