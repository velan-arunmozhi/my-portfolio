import type { Project } from '~/data/types'

export function ProjectTile({ project }: { project: Project }) {
  return (
    <article className="flex flex-col border-4 border-black bg-white p-4">
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        className="aspect-video w-full border-2 border-black object-cover"
      />
      <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
      <p className="mt-2 leading-relaxed">{project.blurb}</p>
      {project.links && project.links.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              className="rounded border-2 border-black bg-canvas px-3 py-1.5 text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  )
}