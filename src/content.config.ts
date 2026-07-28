import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    popular: z.boolean().optional(),
  }),
});

const aplikasi = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    popular: z.boolean().optional(),

    category: z.string().optional(),
    version: z.string().optional(),
    size: z.string().optional(),
    rating: z.number().optional(),
    downloads: z.string().optional(),
    android: z.string().optional(),
    download: z.string().optional(),
  }),
});

export const collections = {
  blog,
  aplikasi,
};
