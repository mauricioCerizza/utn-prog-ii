"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[170],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),u=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(g,i(i({ref:a},c),{},{components:t})):n.createElement(g,i({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6836:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"Introducci\xf3n a .NET",sidebar_label:"Introducci\xf3n a .NET",slug:"/apuntes/introduccion/introduccion-net"},l=void 0,u={unversionedId:"clases/introduccion/Apuntes/introduccion-net",id:"clases/introduccion/Apuntes/introduccion-net",isDocsHomePage:!1,title:"Introducci\xf3n a .NET",description:"En esta asignatura haremos uso de la plataforma de desarrollo .NET y del lenguaje de programaci\xf3n C# para entender conceptos y pr\xe1cticas que son comunes a muchas otras herramientas que se utilizan al desarrollar software.",source:"@site/docs/clases/01-introduccion/Apuntes/00-introduccion-net.md",sourceDirName:"clases/01-introduccion/Apuntes",slug:"/apuntes/introduccion/introduccion-net",permalink:"/utn-prog-ii/docs/apuntes/introduccion/introduccion-net",editUrl:"https://github.com/mauricioCerizza/utn-prog-ii/edit/master/docs/clases/01-introduccion/Apuntes/00-introduccion-net.md",version:"current",sidebarPosition:0,frontMatter:{title:"Introducci\xf3n a .NET",sidebar_label:"Introducci\xf3n a .NET",slug:"/apuntes/introduccion/introduccion-net"},sidebar:"Clases",previous:{title:"Indice",permalink:"/utn-prog-ii/docs/introduccion"},next:{title:"Introducci\xf3n a C#",permalink:"/utn-prog-ii/docs/apuntes/introduccion/introduccion-c-sharp"}},c=[{value:"Caracter\xedsticas de .NET",id:"caracter\xedsticas-de-net",children:[{value:"Multi-plataforma",id:"multi-plataforma",children:[]},{value:"Open Source",id:"open-source",children:[]},{value:"Multi-lenguaje",id:"multi-lenguaje",children:[]}]},{value:"Componentes de .NET",id:"componentes-de-net",children:[]},{value:"Common Type System",id:"common-type-system",children:[{value:"Tipos de valor y tipos de referencia",id:"tipos-de-valor-y-tipos-de-referencia",children:[]},{value:"Categor\xedas de tipos",id:"categor\xedas-de-tipos",children:[]}]}],d={toc:c};function p(e){var a=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En esta asignatura haremos uso de la plataforma de desarrollo .NET y del lenguaje de programaci\xf3n C# para entender conceptos y pr\xe1cticas que son comunes a muchas otras herramientas que se utilizan al desarrollar software. "),(0,o.kt)("p",null,".NET (",(0,o.kt)("em",{parentName:"p"},"pronunciado como \u201cdot net\u201d"),") es una plataforma gratuita y de c\xf3digo abierto que nos provee una serie de herramientas y programas para construir f\xe1cilmente una gran variedad de software, as\xed como el entorno necesario para ejecutarlo sobre distintas arquitecturas y sistemas operativos. "),(0,o.kt)("h2",{id:"caracter\xedsticas-de-net"},"Caracter\xedsticas de .NET"),(0,o.kt)("p",null,"En esta secci\xf3n se apuntar\xe1 a introducir las principales caracter\xedsticas de la plataforma para que puedan alcanzar un entendimiento general sobre las herramientas que utilizaremos durante la cursada."),(0,o.kt)("h3",{id:"multi-plataforma"},"Multi-plataforma"),(0,o.kt)("p",null,"Existi\xf3 una \xe9poca donde esta plataforma s\xf3lo nos permit\xeda trabajar para Windows, pero esos tiempos quedaron muy atr\xe1s. Desde la salida de .NET Core en 2016, podemos implementar nuestros sitios web, aplicaciones para servidores y programas de consola tambi\xe9n en Linux y macOS. "),(0,o.kt)("h3",{id:"open-source"},"Open Source"),(0,o.kt)("p",null,"El ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dotnet"},"c\xf3digo fuente de .NET")," es p\xfablico y es mantenido por miles de desarrolladores y compa\xf1ias. Es soportado por ",(0,o.kt)("a",{parentName:"p",href:"https://dotnetfoundation.org/"},".NET foundation"),", una organizaci\xf3n sin fines de lucro, la cual se encarga de promover el desarrollo y la colaboraci\xf3n alrededor del ecosistema de .NET."),(0,o.kt)("h3",{id:"multi-lenguaje"},"Multi-lenguaje"),(0,o.kt)("p",null,".NET admite varios lenguajes de programaci\xf3n, los cuales se pueden utilizar para programar sobre la plataforma:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"C#")," \u2192 Lenguaje orientado a objetos con una sintaxis similar a C y JAVA."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"F#")," \u2192  Lenguaje orientado principalmente a la programaci\xf3n funcional, de sintaxis liviana."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Visual Basic")," \u2192 La sintaxis de este lenguaje es la que m\xe1s se asemeja al lenguaje humano (ingl\xe9s), lo que facilita el trabajo para personas sin experiencia en el desarrollo de software. "),(0,o.kt)("h2",{id:"componentes-de-net"},"Componentes de .NET"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:".NET Platform",src:t(7284).Z})),(0,o.kt)("h4",{id:"runtime"},"Runtime"),(0,o.kt)("p",null,"Un runtime (entorno de ejecuci\xf3n, en espa\xf1ol) es un programa encargado de ejecutar y administrar "),(0,o.kt)("h4",{id:"base-class-library"},"Base Class Library"),(0,o.kt)("p",null,"Cuando trabajamos con .NET contamos con"),(0,o.kt)("h4",{id:"frameworks"},"Frameworks"),(0,o.kt)("h4",{id:"herramientas"},"Herramientas"),(0,o.kt)("p",null,"Lo que hace a una plataforma de desarrollo es que nos otorga todas las herramientas necesarias para llevar el dise\xf1o de un sistema a su implementaci\xf3n en la realidad. "),(0,o.kt)("p",null,"Adem\xe1s de las antes mencionadas, .NET integra las siguientes herramientas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.microsoft.com/en-us/dotnet/core/tools/"},".NET CLI"))," \u2192 Una interfaz de l\xednea de comandos que nos provee una serie de instrucciones de consola que nos permitir\xe1n desarrollar, construir, ejecutar y p\xfablicar aplicaciones construidas con .NET. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compiladores")," para los lenguajes soportados."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MSBuild")," \u2192 Un motor para cargar y construir nuestras aplicaciones."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.nuget.org/"},"NuGet"))," \u2192 Un administrador de paquetes desde donde podremos incorporar distintas librer\xedas a nuestros proyectos, muchas de ellas desarrolladas por la comunidad.")),(0,o.kt)("h2",{id:"common-type-system"},"Common Type System"),(0,o.kt)("p",null,"El Common Type System (CTS) define un conjunto de tipos de datos com\xfan a todos los lenguajes soportados por .NET. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Establece un marco de herramientas que habilita la ejecuci\xf3n de los distintos lenguajes de la plataforma. "),(0,o.kt)("li",{parentName:"ul"},"Provee un modelo orientado a objetos. "),(0,o.kt)("li",{parentName:"ul"},"Define un conjunto de reglas que todos los lenguajes deben seguir en lo que refiere a tipos."),(0,o.kt)("li",{parentName:"ul"},"Provee una biblioteca que contiene los tipos primitivos b\xe1sicos (Boolean, Int32, Byte, Char, etc). "),(0,o.kt)("li",{parentName:"ul"},"Define tipos de dato en dos categor\xedas: de valor y de referencia.")),(0,o.kt)("h3",{id:"tipos-de-valor-y-tipos-de-referencia"},"Tipos de valor y tipos de referencia"),(0,o.kt)("p",null,"Los ",(0,o.kt)("strong",{parentName:"p"},"tipos de valor")," son tipos de dato representados por su valor real. Si son asignados a una variable, esa variable obtendr\xe1 una nueva copia del valor. "),(0,o.kt)("p",null,"Los ",(0,o.kt)("strong",{parentName:"p"},"tipos de referencia"),", al contrario, son tipos de dato representados por una referencia que apunta a un sector de memoria donde se encuentra el valor real. Si son asignados a una variable, esa variable almacenar\xe1 la referencia y apuntar\xe1 al valor original. No se realiza ninguna copia del valor.\nLa referencia se almacena en "),(0,o.kt)("h3",{id:"categor\xedas-de-tipos"},"Categor\xedas de tipos"),(0,o.kt)("p",null,".NET define cinco categor\xedas de tipos de datos."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Categor\xeda"),(0,o.kt)("th",{parentName:"tr",align:null},"Valor/Referencia"),(0,o.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Clases")),(0,o.kt)("td",{parentName:"tr",align:null},"Tipo de referencia"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Estructuras")),(0,o.kt)("td",{parentName:"tr",align:null},"Tipo de valor"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Enumerados")),(0,o.kt)("td",{parentName:"tr",align:null},"Tipo de valor"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Interfaces")),(0,o.kt)("td",{parentName:"tr",align:null},"Tipo de valor"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Delegados")),(0,o.kt)("td",{parentName:"tr",align:null},"Tipo de referencia"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"Entraremos en el detalle de cada una de estas categor\xedas a lo largo de la cursada."))}p.isMDXComponent=!0},7284:function(e,a,t){a.Z=t.p+"assets/images/dotnet5_platform-7110e6aa8774d81f843f411b042b21ff.png"}}]);