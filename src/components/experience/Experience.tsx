import { ExperienceItem } from './ExperienceItem'
import type { Experience } from '~/data/types'

export function Experience({ items }: { items: Experience[] }) {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-14 text-center text-3xl font-bold">Experience</h2>
      <ol className="relative mx-auto max-w-3xl">
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1 top-0 w-1 bg-black md:left-1/2 md:-translate-x-1/2"
        />
        {items.map((item, index) => (
          <ExperienceItem
            key={`${item.company}-${item.start}`}
            item={item}
            alternate={index % 2 === 0}
          />
        ))}
      </ol>
    </section>
  )
}