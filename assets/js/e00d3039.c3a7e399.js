"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[868],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),l=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=l(e.components);return r.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=t,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,i(i({ref:a},u),{},{components:n})):r.createElement(g,i({ref:a},u))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9761:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),t=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"Concurrencia",sidebar_label:"Concurrencia",slug:"/clases/concurrencia/apuntes/concurrencia",hide_table_of_contents:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},s=void 0,l={unversionedId:"clases/concurrencia/Apuntes/concurrencia",id:"clases/concurrencia/Apuntes/concurrencia",isDocsHomePage:!1,title:"Concurrencia",description:"\xbfQu\xe9 es concurrencia?",source:"@site/docs/clases/23-concurrencia/Apuntes/00-concurrencia.md",sourceDirName:"clases/23-concurrencia/Apuntes",slug:"/clases/concurrencia/apuntes/concurrencia",permalink:"/utn-prog-ii/docs/clases/concurrencia/apuntes/concurrencia",editUrl:"https://github.com/mauricioCerizza/utn-prog-ii/edit/master/docs/clases/23-concurrencia/Apuntes/00-concurrencia.md",version:"current",sidebarPosition:0,frontMatter:{title:"Concurrencia",sidebar_label:"Concurrencia",slug:"/clases/concurrencia/apuntes/concurrencia",hide_table_of_contents:!1,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Indice",permalink:"/utn-prog-ii/docs/concurrencia"},next:{title:"Cuestionario",permalink:"/utn-prog-ii/docs/concurrencia/cuestionario"}},u=[{value:"\xbfQu\xe9 es concurrencia?",id:"\xbfqu\xe9-es-concurrencia",children:[]},{value:"Programaci\xf3n multi-hilo",id:"programaci\xf3n-multi-hilo",children:[{value:"Programaci\xf3n en paralelo",id:"programaci\xf3n-en-paralelo",children:[]}]},{value:"Resumen de la secci\xf3n",id:"resumen-de-la-secci\xf3n",children:[]}],p={toc:u};function m(e){var a=e.components,n=(0,t.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\xbfqu\xe9-es-concurrencia"},"\xbfQu\xe9 es concurrencia?"),(0,o.kt)("p",null,"En programaci\xf3n hablamos de ",(0,o.kt)("strong",{parentName:"p"},"concurrencia")," cuando se ejecuta m\xe1s de una tarea o proceso al mismo tiempo. "),(0,o.kt)("p",null,"Esta habilidad es \xfatil cuando necesitamos que una aplicaci\xf3n haga alguna cosa ",(0,o.kt)("em",{parentName:"p"},"mientras")," est\xe1 trabajando en algo m\xe1s.  "),(0,o.kt)("p",null,"La concurrencia es un aspecto clave de las aplicaciones modernas, permite que:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Los usuarios finales puedan interactuar con la interfaz de la aplicaci\xf3n de manera no-bloqueante. "),(0,o.kt)("li",{parentName:"ul"},"Un servidor pueda atender varias peticiones en simult\xe1neo y no afectar los tiempos de respuesta ante periodos de alta demanda. "),(0,o.kt)("li",{parentName:"ul"},"Realizar tareas de computo complejas de manera m\xe1s r\xe1pida y haciendo un uso m\xe1s eficaz los recursos de la computadora. ")),(0,o.kt)("p",null,"En esta secci\xf3n veremos las ",(0,o.kt)("strong",{parentName:"p"},"dos formas de concurrencia")," m\xe1s comunes: ",(0,o.kt)("strong",{parentName:"p"},"programaci\xf3n multi-hilo <",(0,o.kt)("em",{parentName:"strong"},"multithreaded programming"),">")," y ",(0,o.kt)("strong",{parentName:"p"},"programaci\xf3n asincr\xf3nica <",(0,o.kt)("em",{parentName:"strong"},"asynchronous programming"),">"),"."),(0,o.kt)("h2",{id:"programaci\xf3n-multi-hilo"},"Programaci\xf3n multi-hilo"),(0,o.kt)("p",null,"La ",(0,o.kt)("strong",{parentName:"p"},"programaci\xf3n multi-hilo <",(0,o.kt)("em",{parentName:"strong"},"multithreaded programming"),">")," es una forma de concurrencia "),(0,o.kt)("p",null,"Un ",(0,o.kt)("strong",{parentName:"p"},"hilo <",(0,o.kt)("em",{parentName:"strong"},"thread"),">"),", tambi\xe9n llamado hebra o subproceso, es un ejecutor de tareas independiente. "),(0,o.kt)("p",null,"Un ",(0,o.kt)("strong",{parentName:"p"},"proceso")," est\xe1 compuesto por m\xfaltiples hilos y cada uno de esos hilos puede estar realizando una tarea distinta en paralelo. Todos los hilos de un mismo proceso comparten los mismos recursos del sistema operativo."),(0,o.kt)("p",null,"Cada hilo tiene una ",(0,o.kt)("strong",{parentName:"p"},"pila de ejecuci\xf3n <",(0,o.kt)("em",{parentName:"strong"},"call stack"),">")," independiente, esto significa que cada uno maneja su propia secuencia de funciones a ejecutar. "),(0,o.kt)("p",null,"En algunos tipos de aplicaci\xf3n existen hilos especiales, por ejemplo un hilo para la interfaz de usuario <",(0,o.kt)("em",{parentName:"p"},"UI Thread"),"> o el hilo principal en los programas de consola <",(0,o.kt)("em",{parentName:"p"},"Main Thread"),">."),(0,o.kt)("p",null,"IMAGEN - proceso, hilos, call stack y memoria"),(0,o.kt)("p",null,"Todas las aplicaciones de .NET tienen un ",(0,o.kt)("strong",{parentName:"p"},"conjunto de hilos <",(0,o.kt)("em",{parentName:"strong"},"thread pool"),">")," que se encarga de mantener un n\xfamero de hilos activos esperando para ejecutar cualquier trabajo que se requiera. Lo podemos ver como un lugar donde podemos poner en cola tareas a realizar y que se ajustar\xe1 autom\xe1ticamente de acuerdo a la demanda."),(0,o.kt)("p",null,"En .NET se sol\xeda utilizar la clase ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Thread"))," para trabajar con hilos, la cual es una abstracci\xf3n de bajo nivel. El ",(0,o.kt)("em",{parentName:"p"},"conjunto de hilos")," es una abstracci\xf3n de un nivel un poco m\xe1s alto, ya que se encargar\xe1 por si mismo de instanciar un hilo si existe la necesidad. Actualmente no se recomienda crear instancias de ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Thread"))," ya que existen nuevas soluciones que fueron afinadas para cubrir de forma eficiente y sencilla la gran mayor\xeda de los escenarios reales."),(0,o.kt)("p",null,"Las clases con las que trabajaremos son abstracciones de alto nivel que ponen en cola trabajo para que sea resuelto por el ",(0,o.kt)("em",{parentName:"p"},"conjunto de hilos"),". "),(0,o.kt)("p",null,"IMAGEN - thread vs thread pool vs high level abstractions"),(0,o.kt)("h3",{id:"programaci\xf3n-en-paralelo"},"Programaci\xf3n en paralelo"),(0,o.kt)("p",null,"La ",(0,o.kt)("strong",{parentName:"p"},"programaci\xf3n en paralelo <",(0,o.kt)("em",{parentName:"strong"},"parallel programming"),">")," es un tipo de programaci\xf3n multi-hilo, que a su vez es una forma de concurrencia. Se utiliza cuando se necesita dividir una gran carga de trabajo computacional en partes independientes y ejecutarlas en paralelo, maximizando el uso de los n\xfacleos de la CPU."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Cuando procesamos en paralelo cada fragmento de trabajo de ser tan independiente del resto como sea posible. "))),(0,o.kt)("p",null,"IMAGEN - ejemplo en la cocina"),(0,o.kt)("p",null,"Existen dos formas de paralelismo: data parallelism y task parallelism"),(0,o.kt)("p",null,"IMAGEN - tipos de concurrencia y subtipos"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/parallel-programming/task-based-asynchronous-programming"},"https://docs.microsoft.com/en-us/dotnet/standard/parallel-programming/task-based-asynchronous-programming")),(0,o.kt)("p",null,"Parallel.ForEach"),(0,o.kt)("p",null,"Task.Run"),(0,o.kt)("p",null,"Colecciones concurrentes"),(0,o.kt)("h2",{id:"resumen-de-la-secci\xf3n"},"Resumen de la secci\xf3n"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\xbfQu\xe9 significa concurrencia?"),(0,o.kt)("li",{parentName:"ul"},"\xbfQu\xe9 formas de concurrencia existen y cu\xe1ndo se usa cada una?")))}m.isMDXComponent=!0}}]);