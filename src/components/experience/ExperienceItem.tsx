import { formatMonthYear } from '~/data/month-year'
import type { Experience } from '~/data/types'

function formatPeriod(item: Experience): string {
  const start = formatMonthYear(item.start)
  const end = item.end ? formatMonthYear(item.end) : 'Present'
  return `${start} — ${end}`
}

export function ExperienceItem({
  item,
  alternate,
}: {
  item: Experience
  alternate: boolean
}) {
  const panelClass =
    'ml-10 md:ml-0 md:w-1/2 ' + (alternate ? 'md:pr-14' : 'md:ml-auto md:pl-14')

  return (
    <li className="relative pb-14">
      <span
        aria-hidden="true"
        className="absolute -left-1 top-1 h-5 w-5 rounded-full border-4 border-canvas bg-black md:left-1/2 md:-translate-x-1/2"
      />
      <div className={panelClass}>
        <img
          src={item.logo}
          alt={`${item.company} logo`}
          width={64}
          height={64}
          className="h-12 w-12 rounded border-2 border-black bg-white p-1 md:h-14 md:w-14"
        />
        <h3 className="mt-3 text-xl font-bold">{item.company}</h3>
        <p className="mt-0.5 font-medium">{item.position}</p>
        <p className="mt-0.5 text-sm font-medium">{formatPeriod(item)}</p>
        <p className="mt-3 leading-relaxed">{item.blurb}</p>
      </div>
    </li>
  )
}