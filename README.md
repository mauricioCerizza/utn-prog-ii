# UTN Fra - Apuntes y ejercicios de Programación II
***This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.***

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Despliegue

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Generar apuntes en PDF

Para generar los apuntes en PDF se deberá ejecutar desde el directorio raíz el siguiente comando:

```console
npx mr-pdf --initialDocURLs="https://mauriciocerizza.github.io/utn-prog-ii/docs/clases/programa" --contentSelector="article" --paginationSelector=".pagination-nav__item--next > a" --excludeSelectors=".margin-vert--xl a" --coverImage="https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg" --coverTitle="Programación II" --pdfFormat="A4" --outputPDFFilename="static/documentos/Programacion-II.pdf"
```