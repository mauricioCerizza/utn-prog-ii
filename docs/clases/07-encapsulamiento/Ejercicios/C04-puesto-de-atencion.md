---
sidebar_label: C04 - Puesto de Atención
title: Ejercicio C04 - Puesto de Atención
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---

### Consigna
Generar un sistema de atención al cliente mediante las clases **Cliente, Negocio y PuestoAtencion**


#### Clase Puesto Atención:
+ El atributo <code>numeroActual</code> es estático y privado. Se inicializará en el constructor de clase con valor 0.
+ El método <code>Atender</code> simulará un tiempo de atención a un cliente: recibirá un cliente, simulará un tiempo de atención mediante el método de clase Sleep de la clase Thread (perteneciente al espacio de nombre System.Threading) y retornará true para indicar el final de la atención.
+ La propiedad estática <code>NumeroActual</code> es la encargada de incrementar en 1 al atributo numeroActual y luego retornarlo.

#### Clase Cliente:
+ La sobrecarga del operador <code>==</code> retornará <code>true</code> si dos clientes tienen el mismo número.

#### Clase Negocio:
+ El constructor privado inicializará la colección y el puesto de atención como <code>Caja1</code>. 
+ El operador <code>+</code> será el único capaz de agregar un Cliente a la cola de atención. Sólo se agregará un Cliente si este no forma parte de la lista. Rehutilizar el <code>==</code> de Cliente.
+ La propiedad <code>Cliente</code> retornará el próximo cliente en la cola de atención en el <code>get</code>. El <code>set</code> deberá controlar que el Cliente no figure en la cola de atención, caso contrario lo agregará.
+ El operador <code>==</code> retornará <code>true</code> si el cliente se encuentra en la colección.
+ El operador <code>~</code> generará una atención del próximo cliente en la cola, utilizando la propiedad Cliente y el método Atender de PuestoAtencion. Retornará <code>true</code> si pudo realizar la operación completa.
+ La propiedad <code>ClientesPendientes</code> retornará la cantidad de clientes esperando a ser atendidos.

**Generar los métodos en el Main para probar el código.**

### Diagrama de clases

![Diagrama de clase Puesto de Atención](/clases/07-encapsulamiento/Ejercicios/diagramaPuestoAtencion.PNG)

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-------------------------------------: | :---: | :------------------------------------: | :----: |