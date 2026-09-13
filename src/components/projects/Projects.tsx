import { ProjectTile } from './ProjectTile'
import type { Project } from '~/data/types'

export function Projects({ items }: { items: Project[] }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-14 text-center text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <ProjectTile key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}