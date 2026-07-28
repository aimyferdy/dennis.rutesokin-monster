import { defineCollection, z } from "astro:content";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  image: z.string().optional(),
  popular: z.boolean().optional(),

  category: z.string().optional(),
  version: z.string().optional(),
  size: z.string().optional(),
  rating: z.number().optional(),
});

const blog = defineCollection({
  schema,
});

const aplikasi = defineCollection({
  schema,
});

export const collections = {
  blog,
  aplikasi,
};
