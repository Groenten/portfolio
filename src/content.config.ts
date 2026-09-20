import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const bilingual = z.object({ es: z.string(), en: z.string() })

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: bilingual,
    summary: bilingual,
    description: bilingual.optional(),
    year: z.number(),
    category: z.enum(['audiovisual', 'interactive', 'music']),
    tools: z.array(z.string()).default([]),
    video: z
      .discriminatedUnion('type', [
        z.object({ type: z.literal('youtube'), id: z.string() }),
        z.object({
          type: z.literal('file'),
          src: z.string(),
          poster: z.string().optional(),
          vertical: z.boolean().default(false)
        })
      ])
      .optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    thumbnail: z.string().optional()
  })
})

export const collections = { projects }
