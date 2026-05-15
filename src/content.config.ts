import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.string(),
    image: z.string(),
    large: z.boolean().optional().default(false),
    colSpan: z.number().optional().default(1),
    rowSpan: z.number().optional().default(1),
    order: z.number()
  }),
});

export const collections = { projects };
