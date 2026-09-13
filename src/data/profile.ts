import { fetchJson } from './loader'
import type { ProfileData } from './types'

function isProfileData(value: unknown): value is ProfileData {
  if (typeof value !== 'object' || value === null) {
    return false
  }
  const profile = value as Record<string, unknown>
  return (
    typeof profile.name === 'string' &&
    typeof profile.title === 'string' &&
    typeof profile.bio === 'string' &&
    typeof profile.photo === 'string' &&
    typeof profile.resumeHref === 'string' &&
    typeof profile.github === 'string' &&
    typeof profile.linkedin === 'string' &&
    typeof profile.email === 'string'
  )
}

export async function getProfile(): Promise<ProfileData> {
  const data = await fetchJson<unknown>('/data/profile.json')

  if (!isProfileData(data)) {
    throw new Error(
      'public/data/profile.json is malformed: expected a Profile entry ' +
        '{ name, title, bio, photo, resumeHref, github, linkedin, email }',
    )
  }

  return data
}