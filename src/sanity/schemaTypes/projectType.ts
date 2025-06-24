import { ArchiveIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    icon: ArchiveIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Título del proyecto',
            type: 'string',
            validation: Rule => Rule.required().error('El título del proyecto es obligatorio.')
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required().error('El slug es obligatorio para la URL del proyecto.')
        }),
        defineField({
            name: 'mainImage',
            title: 'Imágen principal',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto alternativo',
                    description: 'Importante para SEO y accesibilidad.',
                    validation: Rule => Rule.required().warning('Considera añadir un texto alternativo para la imágen.')
                }
            ]
        }),
        defineField({
            name: 'description',
            title: 'Descripción corta',
            type: 'text',
            rows: 3,
            description: 'Una breve descripción del proyecto.',
            validation: Rule => Rule.required().max(200).error('La descripción es obligatoria y no debe exceder los 200 caracteres.')
        }),
        defineField({
            name: 'previewUrl',
            title: 'URL de vista previa',
            type: 'url',
            description: 'Enlace al despliegue en vivo del proyecto (si aplica).',
            validation: Rule => Rule.uri({ scheme: ['http', 'https'] }).warning('Introduce una URL válida.')
        }),
        defineField({
            name: 'githubUrl',
            title: 'URL de GitHub',
            type: 'url',
            description: 'Enlace al repositorio de GitHub del proyecto.',
            validation: Rule => Rule.uri({ scheme: ['http', 'https'] }).warning('Introduce una URL válida.')
        }),
        defineField({
            name: 'body',
            title: 'Contenido del proyecto',
            type: 'blockContent',
        }),
        defineField({
            name: 'tags',
            title: 'Etiquetas/Tecnologías',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            },
            initialValue: [],
            description: 'Tecnologías o palabras clave asociadas al proyecto (ej. React, Next.js, CSS).'
        })
    ]
})