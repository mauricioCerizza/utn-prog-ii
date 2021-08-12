---
title: Apuntes - Windows Forms
sidebar_label: Definicion
slug: /clases/forms/apuntes/definicion
hide_table_of_contents: false
hide_title: false
author: 
authorURL: 
---


## Introduccion a Windows Forms

### ¿Que son los formularion de windows?
Windows Forms es una tecnología que permite crear aplicaciones gráficas para escritorio en Windows. Ofrece capacidades para definir visualmente todo tipo de ventanas y controles dentro de éstas, y además facilita mucho la creación de interfaces orientadas al manejo de datos gracias a sus capacidades de enlace bidireccional a datos (capa logica - capa visual).
Los formularios de windows son objetos que heredan de Form y que implementan el namespace System.Windows.Forms. 
Al ser objetos, exponen propiedades, poseen metodos y tambien eventos que permiten la interaccion con el usuario.

### Composicion

Como mencionamos anteriormente, los formularios son objetos. Los mismos parten de una clase comun y corriente pero con una pequeña diferencia: Las clases tienen la particularidad de ser Partial Class. Esto significa que es una unica clase partida en dos partes : la parte visual (interfaz que ve el usuario) y la parte logica donde detallamos su composicion.


### Propiedades y Métodos de los formularios

Los formularios,al ser objetos, poseen propiedades y métodos. 

+ Propiedades:
    + Name
    + BackColor
    + Text 
    + Visible
    + Size
    + Enabled
    + Font
    + ForeColor
    

+ Metodos
    + Show()
    + ShowDialog()
    + Close()
    + Hide()



## Bibliografía 

+ Bibliografía oficial: https://docs.microsoft.com/es-es/dotnet/api/system.windows.forms.form?view=net-5.0


