import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const experience = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/experience" }),
    schema: z.object({
        company: z.string(),
        companyURL: z.string().optional(),

        tags: z.array(z.string()),

        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),

        publicationDate: z.coerce.date(),
        modifiedDate:  z.string().transform((str) => new Date(str)).optional(),
    })
});

const services = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/services" }),
    schema: z.object({
        header: z.string(),
        referenceLink: z.string(),
        referenceLinkText: z.string().default('Lees meer'),
        order: z.number().default(999), // For controlling display order
        isActive: z.boolean().default(true), // To easily enable/disable services
    })
});

export const collections = { experience, services };
