import { createFileRoute } from '@tanstack/react-router'
import { Experience } from '~/components/experience/Experience'
import { Footer } from '~/components/footer/Footer'
import { Intro } from '~/components/intro/Intro'
import { Projects } from '~/components/projects/Projects'
import { getExperiences } from '~/data/experiences'
import { getProfile } from '~/data/profile'
import { getProjects } from '~/data/projects'

export const Route = createFileRoute('/')({
  loader: async () => {
    const [profile, experiences, projects] = await Promise.all([
      getProfile(),
      getExperiences(),
      getProjects(),
    ])
    return { profile, experiences, projects }
  },
  component: HomePage,
})

function HomePage() {
  const { profile, experiences, projects } = Route.useLoaderData()

  return (
    <div className="min-h-screen">
      <main>
        <Intro profile={profile} />
        <Experience items={experiences} />
        <Projects items={projects} />
      </main>
      <Footer profile={profile} />
    </div>
  )
}