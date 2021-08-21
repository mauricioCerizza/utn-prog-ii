---
sidebar_label: C01 - El relojero
title: Ejercicio C01 - El relojero
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear un proyecto de Windows Forms con un RichTextBox y un Label dentro.

1. Crear el método AsignarHora que se encargará de imprimir la hora en la Label lblHora.
2. En el Label se deberá mostrar la fecha y hora actual, con segundos incluidos, y refrescándose una vez por segundo.
3. Generar tres prácticas, independientes, en el orden planteado:
   1. Realizar la actualización de la hora 1 vez por segundo utilizando alguna estructura de control dada en clase.
   2. Agregar un objeto del tipo Timer para refrescar la hora actual cada 1 segundo.
   3. Resolver el mismo ejercicio utilizando hilos.

**Negocio:**
- Tendrá como atributos una lista de tipo String “clientes” y dos atributos de tipo Caja.
- Crear propiedades de lectura para todos sus atributos.
- El constructor recibirá por parámetro las dos cajas e inicializará la lista de clientes.
- El método AsignarCaja deberá imprimir el mensaje "Asignando cajas..." cuando sea invocado, recorrer la lista de clientes y asignar a cada cliente en la fila de la caja que menos clientes tenga en ese momento.
- La asignación de cada cliente a una caja tardará 1 segundo.

**Main:**
- La asignación de cada cliente a una caja tardará 1 segundo.
- Crear un thread para asignar las cajas a los clientes, uno para atender los clientes de la caja1 y otro para atender los clientes de la caja2. Los threads destinados a atender a los clientes deberán tener en su propiedad “Name” el nombre de la caja que está atendiendo.
- Se deberán iniciar los 3 threads uno a continuación del otro.
- Utilizar el método Join del objeto de la clase Thread para asegurar que se hayan asignado todos los clientes a alguna caja antes de comenzar a atender.


### Diagrama de clases


### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-----------------------: | :---: | :----------------------: | :----: |
