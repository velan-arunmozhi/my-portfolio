import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { file } from 'astro/loaders'

const monthYear = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Expected "YYYY-MM"')

const experienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  position: z.string(),
  start: monthYear,
  /** "YYYY-MM" or null for "current" */
  end: monthYear.nullable(),
  blurb: z.string(),
  logo: z.string(),
})

const projectLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
})

const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string(),
  blurb: z.string(),
  links: z.array(projectLinkSchema).optional(),
})

const profileSchema = z.object({
  name: z.string(),
  title: z.string(),
  bio: z.string(),
  photo: z.string(),
  github: z.string(),
  linkedin: z.string(),
  email: z.string(),
})

export const collections = {
  experiences: defineCollection({
    loader: file('src/data/experiences.json'),
    schema: experienceSchema,
  }),
  projects: defineCollection({
    loader: file('src/data/projects.json'),
    schema: projectSchema,
  }),
  profile: defineCollection({
    loader: file('src/data/profile.json'),
    schema: profileSchema,
  }),
}

export type Experience = z.infer<typeof experienceSchema>
export type Project = z.infer<typeof projectSchema>
export type ProjectLink = z.infer<typeof projectLinkSchema>
export type ProfileData = z.infer<typeof profileSchema>