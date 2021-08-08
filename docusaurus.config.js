module.exports = {
  title: "UTN FRA - Programación II",
  tagline:
    "Información, apuntes y ejercicios para las asignaturas Programación II y Laboratorio de Computación II.",
  url: "https://mauriciocerizza.github.io",
  baseUrl: "/utn-prog-ii/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "base/favicon.ico",
  organizationName: "MauricioCerizza",
  projectName: "utn-prog-ii",   
  themeConfig: {   
    hideableSidebar: true,
    navbar: {
      title: "Programación II",
      logo: {
        alt: "UTN Logo",
        src: "base/logo.svg",
      },
      items: [
        {
          to: "docs/introduccion/descripcion-materia",
          activeBasePath: "docs/introduccion/",
          label: "Introducción a la materia",
          position: "left",
        },
        {
          to: "docs/clases/programa",
          activeBasePath: "docs/clases/",
          label: "Clases",
          position: "left",
        },
        {
          to: "docs/evaluaciones",
          activeBasePath: "docs/evaluaciones",
          label: "Evaluaciones",
          position: "left",
        },
        {
          href: "https://classroom.google.com/u/0/w/NTQ1MTg2NjM5NDBa/t/all",
          label: "Campus virtual",
          position: "left",
        },
        {
          href: "https://join.slack.com/t/utn-prog2/shared_invite/zt-a7q2ca78-HDLaVbxtzMLSzVrxct3xWg",
          label: "Slack",
          position: "left",
        },
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
              to: "docs/introduccion/descripcion-materia",
            },
            {
              label: "Clases",
              to: "docs/clases/programa",
            },
            {
              label: "Evaluaciones",
              to: "docs/evaluaciones",
            }
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
              label: "Github - Programación y Laboratorio II",
              href: "https://github.com/codeutnfra/programacion_2_laboratorio_2",
            },
            {
              label: "You Tube - UTN FRA",
              href: "https://www.youtube.com/channel/UC2Z2ADpWCh4aTHz07K3os2g/featured",
            }
          ],
        },
        {
          title: "Reportar un error",
          items: [
            {
              html: "<a href=\"https://github.com/mauricioCerizza/utn-prog-ii/issues/new\" target=\"_blank\"><img src=\"/static/base/robot-repara.png\" alt=\"Reportar error\" width=60% height=60%></img></a>",
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UTN Facultad Regional Avellaneda. Built with <a href=\"https://docusaurus.io/\" target=\"_blank\">Docusaurus</a>.`,
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
          path: 'docs',
          sidebarCollapsible: true,
          sidebarPath: require.resolve("./sidebars.js"),
          //editUrl: "https://github.com/mauricioCerizza/utn-prog-ii/edit/master/",
          showLastUpdateAuthor: true,        
          showLastUpdateTime: true,        
          disableVersioning: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        language: ["en", "es"],
        removeDefaultStopWordFilter: true,        
      },
    ],
  ],
};