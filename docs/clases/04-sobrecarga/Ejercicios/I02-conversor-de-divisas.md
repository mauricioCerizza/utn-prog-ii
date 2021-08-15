---
sidebar_label: I02 - Conversor de Divisas
title: Ejercicio I02 - Conversor de Divisas
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear un proyecto de Consola y construir tres clases dentro de un namespace llamado Billetes: **Pesos, Euro y Dolar.**

1. Se debe lograr que los objetos de estas clases se puedan sumar, restar y comparar entre sí con total normalidad como si fueran tipos numéricos, teniendo presente que 1 Euro equivale a 1,08 dólares y 1 dólar equivale a 66 pesos.
2. El atributo cotizRespectoDolar y el método GetCotizacion son estáticos.
3. Sobrecargar los operadores explicit y/o implicit para lograr compatibilidad entre los distintos tipos de datos.
4. Colocar dentro del Main el código necesario para probar todos los métodos.
5. Los constructores estáticos le darán una cotización respecto del dólar por defecto a las clases.
6. Los comparadores == compararan cantidades.
7. Para operar dos tipos de monedas, se deberá convertir todo a una y luego realizar lo pedido. Por ejemplo, si quiero sumar Dólar y Euro, deberé convertir el Euro a Dólar y luego sumarlos.
8. Reutilizar el código. Sólo realizar las conversiones dentro de los operadores para dicho uso.


### Diagrama de clases

![Diagrama de clase Sumador](/clases/04-sobrecarga/Ejercicios/diagrama.ConversorDivisas.JPG)

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-------------------------------------: | :---: | :------------------------------------: | :----: |


