import { defineType, defineArrayMember } from 'sanity'
import { ImageIcon, CodeIcon } from '@sanity/icons'

export const blockContentType = defineType({
  title: 'Bloque de Contenido',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Cita', value: 'blockquote' },
      ],
      lists: [{ title: 'Lista desordenada', value: 'bullet' }, { title: 'Lista ordenada', value: 'number' }],
      marks: {
        decorators: [
          { title: 'Negrita', value: 'strong' },
          { title: 'Cursiva', value: 'em' },
          { title: 'Subrayado', value: 'underline' },
          { title: 'Código en línea', value: 'code' },
        ],

        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              { title: 'URL', name: 'href', type: 'url' },
              {
                title: 'Abrir en nueva pestaña',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      title: 'Imágen',
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
        }
      ]
    }),
    defineArrayMember({
      type: 'code',
      icon: CodeIcon,
      title: 'Bloque de Código',
      options: {
        withFilename: true,
        theme: 'github',
        languageAlternatives: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'Python', value: 'python' },
          { title: 'JSON', value: 'json' },
          { title: 'Bash', value: 'bash' },
          { title: 'Markdown', value: 'markdown' },
          { title: 'Go', value: 'go' },
          { title: 'Java', value: 'java' },
        ],
      },
    }),
    {
      name: 'videoEmbed',
      type: 'object',
      title: 'Video embebido',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'URL del video (YouTube, Vimeo, etc.)'
        }
      ]
    }
  ],
})
