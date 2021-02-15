module.exports = {
  title: "UTN FRA - Programación II",
  tagline:
    "Información, apuntes y ejercicios para la asignatura Programación II.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "UTN FRA",
  projectName: "utn-prog-ii",
  themeConfig: {
    navbar: {
      title: "Programación II",
      logo: {
        alt: "UTN Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/introduccion/informacion-materia",
          activeBasePath: "docs/introduccion/",
          label: "Introducción a la materia",
          position: "left",
        },
        {
          to: "apuntes/",
          activeBasePath: "docs/apuntes",
          label: "Apuntes Teóricos",
          position: "left",
        },
        {
          to: "docs/ejercicios/introduccion",
          activeBasePath: "docs/ejercicios/",
          label: "Ejercicios",
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
              to: "docs/introduccion/informacion-materia",
            },
            {
              label: "Clases",
              to: "docs/clases/",
            },
            {
              label: "Apuntes Teóricos",
              to: "docs/apuntes/",
            },
            {
              label: "Ejercicios",
              to: "docs/ejercicios/conceptos-basicos/ejercicio-01",
            },
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
              label: "Github - Mauricio Cerizza",
              href: "https://github.com/mauricioCerizza",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mauricio Cerizza. Built with Docusaurus.`,
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
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
