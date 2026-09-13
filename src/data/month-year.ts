/** Exactly "YYYY-MM" with a real calendar month, e.g. "2020-06". */
const MONTH_YEAR_RE = /^\d{4}-(0[1-9]|1[0-2])$/

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export function isMonthYear(value: unknown): value is string {
  return typeof value === 'string' && MONTH_YEAR_RE.test(value)
}

export function formatMonthYear(value: string): string {
  const [year, month] = value.split('-')
  const label = MONTHS[Number(month) - 1]
  if (!label) {
    throw new Error(`Invalid "YYYY-MM" date: "${value}"`)
  }
  return `${label} ${year}`
}