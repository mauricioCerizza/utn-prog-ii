---
sidebar_label: I01 - Sumador
title: Ejercicio I01 - Sumador
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear un proyecto de Consola y agregar la clase Sumador



1. Crear dos constructores:
   
   Sumador(int) inicializa cantidadSumas en el valor recibido por parámetros.
   
   Sumador() inicializa cantidadSumas en 0. Reutilizará al primer constructor.
2. El método Sumar incrementará cantidadSumas en 1 y adicionará sus parámetros con la siguiente lógica:
   
   En el caso de Sumar(long, long) sumará los valores numéricos
   
   En el de Sumar(string, string) concatenará las cadenas de texto.

Antes de continuar, agregar un objeto del tipo Sumador en el Main y probar el código.

3. Generar una conversión explícita que retorne cantidadSumas.
4. Sobrecargar el operador + (suma) para que puedan sumar cantidadSumas y retornen un long con dicho valor.
5. Sobrecargar el operador | (pipe) para que retorne True si ambos sumadores tienen igual cantidadSumas.

Agregar un segundo objeto del tipo Sumador en el Main y probar el código.

### Diagrama de clases

![Diagrama de clase Sumador](/clases/04-sobrecarga/Ejercicios/diagramaSumador.JPG)

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-------------------------------------: | :---: | :------------------------------------: | :----: |
