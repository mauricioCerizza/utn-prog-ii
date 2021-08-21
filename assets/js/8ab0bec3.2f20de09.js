"use strict";(self.webpackChunkutn_prog_ii=self.webpackChunkutn_prog_ii||[]).push([[3668],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=l(e.components);return t.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?t.createElement(g,i(i({ref:a},u),{},{components:n})):t.createElement(g,i({ref:a},u))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6294:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var t=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_label:"Crear un proyecto de consola",slug:"/clases/introduccion/apuntes/proyecto-consola",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},c=void 0,l={unversionedId:"clases/introduccion/Apuntes/proyecto-consola",id:"clases/introduccion/Apuntes/proyecto-consola",isDocsHomePage:!1,title:"proyecto-consola",description:"Crear un proyecto de consola",source:"@site/docs/clases/01-introduccion/Apuntes/02-proyecto-consola.md",sourceDirName:"clases/01-introduccion/Apuntes",slug:"/clases/introduccion/apuntes/proyecto-consola",permalink:"/utn-prog-ii/docs/clases/introduccion/apuntes/proyecto-consola",version:"current",lastUpdatedBy:"mauriciocerizza",lastUpdatedAt:1629557261,formattedLastUpdatedAt:"8/21/2021",sidebarPosition:2,frontMatter:{sidebar_label:"Crear un proyecto de consola",slug:"/clases/introduccion/apuntes/proyecto-consola",hide_table_of_contents:!1,hide_title:!0,author:"Mauricio Cerizza",authorURL:"https://github.com/mauricioCerizza"},sidebar:"Clases",previous:{title:"Introducci\xf3n a .NET",permalink:"/utn-prog-ii/docs/clases/introduccion/apuntes/introduccion-net"},next:{title:"Introducci\xf3n a C#",permalink:"/utn-prog-ii/docs/clases/introduccion/apuntes/introduccion-c-sharp"}},u=[{value:"Crear un proyecto de consola",id:"crear-un-proyecto-de-consola",children:[]},{value:"Entendiendo Visual Studio",id:"entendiendo-visual-studio",children:[{value:"Barra lateral derecha",id:"barra-lateral-derecha",children:[]},{value:"IntelliSense",id:"intellisense",children:[]},{value:"Esquema de colores (Themes)",id:"esquema-de-colores-themes",children:[]}]}],d={toc:u};function p(e){var a=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"crear-un-proyecto-de-consola"},"Crear un proyecto de consola"),(0,r.kt)("p",null,"Exploremos el entorno de trabajo y pongamos en ejecuci\xf3n nuestra primera aplicaci\xf3n de consola."),(0,r.kt)("p",null,"Lo primero que tendremos que hacer es abrir ",(0,r.kt)("inlineCode",{parentName:"p"},"Visual Studio"),", nos mostrar\xe1 la siguiente pantalla con acciones r\xe1pidas para arrancar:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Inicio Visual Studio",src:n(4809).Z})),(0,r.kt)("p",null,"Presionaremos en ",(0,r.kt)("inlineCode",{parentName:"p"},"Crear un proyecto"),". Lo siguiente que encontraremos es una serie de plantillas o templates de los distintos tipos de proyectos que podemos encarar con la plataforma. Arriba tendremos una barra de b\xfasqueda y filtros por lenguaje, plataforma y tipo de aplicaci\xf3n. "),(0,r.kt)("p",null,"Elegiremos ",(0,r.kt)("inlineCode",{parentName:"p"},"Aplicaci\xf3n de consola"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Template Consola Visual Studio",src:n(4489).Z})),(0,r.kt)("p",null,'Lo siguiente ser\xe1 elegir un nombre para el proyecto y otro para la soluci\xf3n (o el mismo) y presionar el bot\xf3n "Crear". '),(0,r.kt)("p",null,"Un ",(0,r.kt)("strong",{parentName:"p"},"proyecto")," es una estructura que nos permitir\xe1 construir nuestros programas con .NET y compilarlos como una unidad independiente, mientras que a una ",(0,r.kt)("strong",{parentName:"p"},"soluci\xf3n")," la podemos ver como una agrupadora de proyectos. Normalmente un programa de .NET est\xe1 compuesto por varios proyectos inter-relacionados dentro de una soluci\xf3n. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Template Consola Visual Studio",src:n(5262).Z})),(0,r.kt)("p",null,"Una vez creado nos aparecer\xe1 el siguiente c\xf3digo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n\nnamespace Hola_Mundo\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Hello World!");\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Este es el c\xf3digo m\xednimo sobre el cual arrancaremos todas nuestras aplicaciones de consola. Nos adentraremos en los detalles m\xe1s adelante."),(0,r.kt)("p",null,"Para ejecutar este programa tenemos 2 opciones, o presionar la tecla ",(0,r.kt)("inlineCode",{parentName:"p"},"F5"),' o el bot\xf3n de "play" en la barra de acciones de arriba. '),(0,r.kt)("p",null,"Seguido veremos la consola con la salida en texto ",(0,r.kt)("em",{parentName:"p"},'"Hello World!"'),"."),(0,r.kt)("p",null,"\xa1Felicitaciones, acab\xe1s de crear tu primer programa con C#!"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Te recomendamos crear una nueva soluci\xf3n por cada ejercicio que vayas a realizar. Tambi\xe9n mantener todas las soluciones en una \xfanica carpeta que est\xe9 versionada con Git y enlazada a tu repositorio en GitHub.  "))),(0,r.kt)("h2",{id:"entendiendo-visual-studio"},"Entendiendo Visual Studio"),(0,r.kt)("p",null,"Como podemos observar r\xe1pidamente, Visual Studio se presenta como una interfaz de \xfanica p\xe1gina (SPI) compuesta por m\xfaltiples ventanas anidadas. Est\xe1 de m\xe1s decir que podremos administrar estas ventanas a gusto, todas soportan funcionalidades b\xe1sicas como mover, cambiar el tama\xf1o, ocultar y fijar. "),(0,r.kt)("p",null,"Hagamos un repaso r\xe1pido de las secciones m\xe1s importantes."),(0,r.kt)("h3",{id:"barra-lateral-derecha"},"Barra lateral derecha"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Informaci\xf3n")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Si por defecto no ves alguna secci\xf3n, pod\xe9s abrirlas desde el men\xfa ",(0,r.kt)("inlineCode",{parentName:"p"},"View/Ver")," o utilizando los atajos de teclado. "))),(0,r.kt)("h3",{id:"intellisense"},"IntelliSense"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IntelliSense")," es la tecnolog\xeda de autocompletado de c\xf3digo y de detecci\xf3n de errores de Visual Studio y Visual Studio Code. "),(0,r.kt)("h3",{id:"esquema-de-colores-themes"},"Esquema de colores (Themes)"),(0,r.kt)("p",null,"Para cambiar el esquema de colores de Visual Studio..."))}p.isMDXComponent=!0},4809:function(e,a,n){a.Z=n.p+"assets/images/inicio-visual-studio-9a3aa2cc9855fd6bb022a3eef729955d.png"},5262:function(e,a,n){a.Z=n.p+"assets/images/nombre_proyecto_vs-78e7abdd752a0c4e528f262479c3fa0c.png"},4489:function(e,a,n){a.Z=n.p+"assets/images/template-consola-vs-9647594b34b6e69ba39ca42664f4be1a.png"}}]);