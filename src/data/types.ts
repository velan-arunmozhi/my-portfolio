export interface Experience {
  company: string
  position: string
  /** "YYYY-MM" start */
  start: string
  /** "YYYY-MM" or null for "current" */
  end: string | null
  blurb: string
  /** path under /public relative to public root */
  logo: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  title: string
  image: string
  blurb: string
  links?: ProjectLink[]
}

export interface ProfileData {
  name: string
  title: string
  bio: string
  photo: string
  resumeHref: string
  github: string
  linkedin: string
  email: string
}