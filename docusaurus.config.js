module.exports = {
  title: "UTN FRA - Programación II",
  tagline:
    "Información, apuntes y ejercicios para la asignatura Programación II.",
  url: "https://mauriciocerizza.github.io/utn-prog-ii/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "UTN - Facultad Regional Avellaneda",
  projectName: "utn-prog-ii",   
  themeConfig: {   
    sidebarCollapsible: true,
    hideableSidebar: true,
    navbar: {
      title: "Programación II",
      logo: {
        alt: "UTN Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/introduccion/descripcion-materia",
          activeBasePath: "docs/introduccion/",
          label: "Introducción a la materia",
          position: "left",
        },
        {
          to: "docs/apuntes/programa",
          activeBasePath: "docs/apuntes/",
          label: "Apuntes Teóricos",
          position: "left",
        },
/*         {
          to: "docs/ejercicios/introduccion",
          activeBasePath: "docs/ejercicios/",
          label: "Ejercicios",
          position: "left",
        }, */
        {
          href: "http://www.sistemas-utnfra.com.ar/#/home",
          label: "Tecnicaturas UTN-Fra",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Secciones",
          items: [
            {
              label: "Introducción a la materia",
              to: "docs/introduccion/",
            },
            {
              label: "Apuntes Teóricos",
              to: "docs/apuntes/",
            },
/*             {
              label: "Ejercicios",
              to: "docs/ejercicios/conceptos-basicos/ejercicio-01",
            }, */
          ],
        },
        {
          title: "Comunidad",
          items: [
            {
              label: "Slack",
              href:
                "https://join.slack.com/t/utn-prog2/shared_invite/zt-a7q2ca78-HDLaVbxtzMLSzVrxct3xWg",
            },
            {
              label: "Google Classroom",
              href: "https://classroom.google.com/u/0/c/NTQ1MTg2NjM5NDBa",
            },
          ],
        },
        {
          title: "Material adicional",
          items: [
            {
              label: "Microsoft Docs",
              href: "https://docs.microsoft.com/es-es/dotnet/",
            },
            {
              label: "Github - Prof. Federico Dávila",
              href: "https://github.com/FedeDavila1984/utn_prog_y_lab_II",
            },
            {
              label: "Github - Prof. Ezequiel Oggioni",
              href: "https://github.com/EzequielOggioni",
            },
            {
              label: "Github - Prof. Mauricio Cerizza",
              href: "https://github.com/mauricioCerizza/programacion-laboratorio-II",
            },
          ],
        },
        {
          title: "Reportar un error",
          items: [
            {
              html: "<a href=\"https://github.com/mauricioCerizza/utn-prog-ii/issues/new\" target=\"_blank\"><img src=\"/static/img/robot-repara.png\" alt=\"Reportar error\" width=60% height=60%></img></a>",
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UTN Facultad Regional Avellaneda. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ["csharp"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          /* editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/", */
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
