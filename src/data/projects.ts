import { fetchJson } from './loader'
import type { Project, ProjectLink } from './types'

function isProjectLink(value: unknown): value is ProjectLink {
  if (typeof value !== 'object' || value === null) {
    return false
  }
  const link = value as Record<string, unknown>
  return (
    typeof link.label === 'string' && typeof link.href === 'string'
  )
}

function isProject(value: unknown): value is Project {
  if (typeof value !== 'object' || value === null) {
    return false
  }
  const project = value as Record<string, unknown>
  return (
    typeof project.title === 'string' &&
    typeof project.image === 'string' &&
    typeof project.blurb === 'string' &&
    (project.links === undefined ||
      (Array.isArray(project.links) && project.links.every(isProjectLink)))
  )
}

export async function getProjects(): Promise<Project[]> {
  const data = await fetchJson<unknown>('/data/projects.json')

  if (!Array.isArray(data) || !data.every(isProject)) {
    throw new Error(
      'public/data/projects.json is malformed: expected an array of ' +
        'Project entries { title, image, blurb, links? }',
    )
  }

  return data
}