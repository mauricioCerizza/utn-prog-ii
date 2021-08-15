---
sidebar_label: Sobrecarga de Constructores
slug: /clases/sobrecarga/apuntes/sobrecarga-constructores
hide_table_of_contents: false
hide_title: true
author: 
authorURL: 
---

## Sobrecarga de Constructores

Los constructores aseguran que cada objeto comience en un estado consistente. La sobrecarga de constructores permite a los objetos inicializarse de distintas formas. Para sobrecargar a los constructores, sólo hay que proporcionar varias declaraciones del constructor con distintas firmas.

Para invocar el constructor apropiado, el compilador relaciona el número y los tipos de los argumentos especificados en la llamada al constructor, con el número y los tipos de los parámetros especificados en la declaración de cada constructor.



```csharp
public class Tiempo{
	
    private int hora;
    private int minuto; 
    private int segundo;

    public Tiempo() : this( 0, 0, 0 ) 
    { } 

    public Tiempo( int h ) : this( h, 0, 0 )
    { }

    public Tiempo( int h, int m ) : this( h, m, 0 ) 
    { }

    public Tiempo( int h, int m, int s ){
	    hora = h;
	    minuto = m;
	    segundo = s;
}
```
El encabezado del constructor seguido de un signo de dos puntos (:) y de la palabra clave this, se utiliza para invocar a otro constructor. En el ejemplo anterior: El constructor sin parámetros, invoca al constructor que recibe tres argumentos y pasa los valores de 0 para hora, minuto y segundo. Es una forma de reutilizar el código de inicialización que proporciona uno de los constructores de la clase, en vez de definir código similar en el cuerpo de otro constructor. Utilizamos esta sintaxis en cuatro de los cinco constructores de Tiempo para que la clase sea más fácil de mantener. Si necesitamos cambiar la forma en que se inicializan los objetos de la clase Tiempo, sólo hay que modificar el constructor al que necesitan llamar los demás constructores de la clase.
