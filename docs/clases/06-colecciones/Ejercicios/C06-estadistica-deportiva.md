---
sidebar_label: C06 - Estadistica Deportiva.
title: Ejercicio C06 - Estadistica Deportiva.
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna

1. Crear un proyecto de consola y agregar las clases Jugador y Equipo:

#### Clase Jugador:
+ Todos los datos estadísticos del Jugador se inicializarán en 0 dentro del constructor privado.
+ El promedio de gol sólo se calculará cuando invoquen al método GetPromedioGoles.
MostrarDatos retornará una cadena de string con todos los datos y estadística del Jugador.
+ Dos jugadores serán iguales si tienen el mismo DNI.

#### Clase Equipo:
+ La lista de jugadores se inicializará sólo en el constructor privado de Equipo.
+ La sobrecarga del operador + agregará jugadores a la lista siempre y cuando este no exista aun en el equipo y la cantidad de jugadores no supere el límite establecido por el atributo cantidadDeJugadores. 

2. Generar las invocaciones necesarias en el Main para probar el código.

### Diagrama de clases

![Diagrama de clase Estadistica Deportiva](/clases/06-colecciones/Ejercicios/diagramaEstadisticaDeportiva.PNG)

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-------------------------------------: | :---: | :------------------------------------: | :----: |
