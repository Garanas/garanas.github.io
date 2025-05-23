import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const experience = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/experience" }),
    schema: z.object({
        title: z.string(),
        company: z.string(),
        companyURL: z.string().optional(),

        tags: z.array(z.string()),

        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),

        publicationDate: z.coerce.date(),
        modifiedDate:  z.string().transform((str) => new Date(str)).optional(),
    })
});

export const collections = { experience };