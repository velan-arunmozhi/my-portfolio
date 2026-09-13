import { fetchJson } from './loader'
import { isMonthYear } from './month-year'
import type { Experience } from './types'

function isExperience(value: unknown): value is Experience {
  if (typeof value !== 'object' || value === null) {
    return false
  }
  const item = value as Record<string, unknown>
  return (
    typeof item.company === 'string' &&
    typeof item.position === 'string' &&
    isMonthYear(item.start) &&
    (item.end === null || isMonthYear(item.end)) &&
    typeof item.blurb === 'string' &&
    typeof item.logo === 'string'
  )
}

export async function getExperiences(): Promise<Experience[]> {
  const data = await fetchJson<unknown>('/data/experiences.json')

  if (!Array.isArray(data) || !data.every(isExperience)) {
    throw new Error(
      'public/data/experiences.json is malformed: expected an array of ' +
        'Experience entries { company, position, start, end, blurb, logo }',
    )
  }

  // Authoring order is newest-first (chronological). A defensive sort by the
  // "YYYY-MM" start keeps the timeline correct even if the file is edited out
  // of order.
  return [...data].sort((a, b) => b.start.localeCompare(a.start))
}