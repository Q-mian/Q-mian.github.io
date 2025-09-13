import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      image: z.string().optional()
    })
})

const about = defineCollection({
  // Load Markdown files in the `src/content/about/` directory.
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: z.object({})
})

const awards = defineCollection({
  // Load Markdown and MDX files in the `src/content/awards/` directory.
  loader: glob({ base: './src/content/awards', pattern: '**/*.{md,mdx}' }),
  // Use the same schema as posts
  schema: () =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      image: z.string().optional()
    })
})

export const collections = { posts, about, awards }
