---
title: Apuntes - Concurrencia
sidebar_label: Concurrencia
slug: /clases/concurrencia/apuntes/concurrencia
hide_table_of_contents: false
hide_title: false
author: Mauricio Cerizza
authorURL: https://github.com/mauricioCerizza
---

## ¿Qué es concurrencia?
En programación hablamos de **concurrencia** cuando se ejecuta más de una tarea al mismo tiempo. 

Esta habilidad es útil cuando necesitamos que una aplicación haga alguna cosa *mientras* está trabajando en algo más.  

La concurrencia es un aspecto clave de las aplicaciones modernas, permite que:
+ Los usuarios finales puedan interactuar con la interfaz de usuario de manera no-bloqueante. 
+ Un servidor pueda atender varias peticiones en simultáneo y no afectar los tiempos de respuesta ante periodos de alta demanda. 
+ Realizar tareas de computo complejas de manera más rápida y haciendo un uso más eficaz los recursos de la computadora. 

La **programación multi-hilo <*multithreaded programming*>** y **programación asincrónica <*asynchronous programming*>** son las dos formas de concurrencia más comunes.