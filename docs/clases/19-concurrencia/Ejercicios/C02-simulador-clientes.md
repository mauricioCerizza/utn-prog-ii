---
sidebar_label: C02 - Simulador de atención a clientes
title: Ejercicio C02 - Simulador de atención a clientes
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear un proyecto de tipo consola para simular la atención paralela de clientes en 2 cajas de un negocio. 

Para ello se pide crear las siguientes clases:

**Caja:**
- Tendrá como único atributo una lista de tipo String "filaClientes".
- El constructor de la clase Caja deberá inicializar dicha lista.
- El método AtenderClientes deberá recorrer la fila de clientes e ir imprimiendo el nombre del cliente que se está atendiendo junto con el número de caja que será previamente seteado en la propiedad "Name" del thread.
- Por cada cliente que se atiende en cada caja se tardará 2 segundos.

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
| :-------------------------------------: | :---: | :------------------------------------: | :----: |
