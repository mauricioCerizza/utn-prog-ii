---
sidebar_label: C07 - Carrera F1.
title: Ejercicio C07 - Carrera F1.
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna

1. Crear un proyecto de consola y agregar las clases **Competencia** y **AutoF1**:

#### Clase AutoF1:
+ Al generar un auto se cargará <code>enCompetencia</code> como falso. Inicializar <code>cantidadCombustible</code> y <code>vueltasRestantes</code> en 0.
+ Dos autos serán iguales si el <code>número</code> y <code>escudería</code> son iguales.
+ Realizar los métodos getters y setters para <code>cantidadCombustible</code> , <code>enCompetencia</code> y <code>vueltasRestantes</code>.

#### Clase Competencia:
+ El constructor privado será el único capaz de inicializar la lista de competidores.
+ La sobrecarga del operador <code>+</code> agregará un competidor si es que aún hay espacio (validar con cantidadCompetidores) y el competidor no forma parte de la lista (== entre Competencia y AutoF1).
+ Al ser agregado, el competidor cambiará su estado <code>enCompetencia</code> a verdadero, la cantidad de <code>vueltasRestantes</code> será igual a la <code>cantidadVueltas</code> de Competencia y se le asignará un número random entre 15 y 100 a <code>cantidadCombustible</code>.

2. Generar las invocaciones necesarias en el Main para probar el código.

### Diagrama de clases

![Diagrama de clase Estadistica Deportiva](/clases/06-colecciones/Ejercicios/diagramaCarreraF1.PNG)

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-------------------------------------: | :---: | :------------------------------------: | :----: |
