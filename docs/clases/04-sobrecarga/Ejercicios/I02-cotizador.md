---
sidebar_label: I02 - Cotizador
title: Ejercicio I02 - Cotizador
author: Federico Dávila
authorURL: https://github.com/FedeDavila1984
hide_table_of_contents: true
hide_title: false
---
---
### Consigna
Crear un proyecto de Consola y construir las clases **Pesos, Euro y Dolar.** dentro de un namespace llamado <code>Billetes</code>.

Se debe lograr que los objetos de estas clases se puedan sumar, restar y comparar entre sí con total normalidad como si fueran tipos numéricos, teniendo presente que *** 1 Euro equivale a 1,17 Dólares y 1 Dólar equivale a 102,65 Pesos.***

:::tip
    
Para operar dos tipos de monedas, se deberá convertir todo a una y luego realizar lo pedido. Por ejemplo, si quiero sumar Dólar y Euro, deberé convertir el Euro a Dólar y luego sumarlos.

:::

1. El atributo cotizRespectoDolar y el método GetCotizacion son estáticos.

2. Los constructores estáticos le darán una cotización respecto del dólar por defecto a las clases.

3. Sobrecargar los operadores explicit y/o implicit para lograr compatibilidad entre los distintos tipos de datos.

4. Los comparadores <code>==</code> compararan cantidades.
 
5. Reutilizar el código. Sólo realizar las conversiones dentro de los operadores para dicho uso.

6. Colocar dentro del Main el código necesario para probar todos los métodos.

### Diagrama de clases

![Diagrama de clase Sumador](/clases/04-sobrecarga/Ejercicios/diagrama.ConversorDivisas.JPG)

### Resolución
| ![img](/base/youtube.svg) | Video | ![img](/base/github.svg) | Código |
| :-------------------------------------: | :---: | :------------------------------------: | :----: |


