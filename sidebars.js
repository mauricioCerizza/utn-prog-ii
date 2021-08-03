module.exports = {
  Introduccion: [
    {
      type: 'autogenerated',
      dirName: 'introduccion',
    },
    {
      type: 'link',
      label: 'Normas académicas y administrativas',
      href: 'http://sistemas-utnfra.com.ar/Reglamento.pdf'
    },
  ],
  Clases: [    
    "clases/programa",
    "clases/introduccion",
    {
      type: 'category',
      label: 'Introducción a .NET y C#',
      collapsible: true,
      collapsed: true,
      items:
      [
        {
          type: 'autogenerated',
          dirName: 'clases/01-introduccion',
        }
      ]
    },
    {
      type: 'category',
      label: 'Programación orientada a objetos',
      collapsible: true,
      collapsed: true,
      items:
      [
        {
          type: 'autogenerated',
          dirName: 'clases/03-objetos',
        }
      ]
    },
    {
      type: 'category',
      label: 'Colecciones',      
      collapsible: true,
      collapsed: true,
      items:
      [
        {
          type: 'autogenerated',
          dirName: 'clases/07-colecciones',
        }
      ]
    },
    {
      type: 'category',
      label: 'Encapsulamiento',
      collapsible: true,
      collapsed: true,
      items:
      [
        {
          type: 'autogenerated',
          dirName: 'clases/08-encapsulamiento',
        }
      ]
    },
    {
      type: 'category',
      label: 'Programación multi-hilos y concurrencia',
      collapsible: true,
      collapsed: true,
      items:
      [
        {
          type: 'autogenerated',
          dirName: 'clases/23-concurrencia',
        }
      ],
    }
  ],
};
