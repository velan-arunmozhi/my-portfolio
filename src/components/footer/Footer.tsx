import type { ProfileData } from '~/data/types'

export function Footer({ profile }: { profile: ProfileData }) {
  // The contact footer inverts to a black band with canvas text as an intentional design choice
  return (
    <footer
      id="contact"
      className="bg-black px-6 py-14 text-canvas"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold">Get in touch</h2>
        <p className="max-w-lg leading-relaxed">
          Find me on GitHub and LinkedIn, or send an email. You can also grab a
          copy of my resume.
        </p>
        <nav className="flex flex-wrap justify-center gap-3">
          <a
            href={profile.github}
            className="rounded border-2 border-canvas px-4 py-2 font-semibold"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            className="rounded border-2 border-canvas px-4 py-2 font-semibold"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded border-2 border-canvas px-4 py-2 font-semibold"
          >
            Email
          </a>
          <a
            href={profile.resumeHref}
            download
            className="rounded border-2 border-canvas bg-canvas px-4 py-2 font-semibold text-black"
          >
            Resume
          </a>
        </nav>
      </div>
    </footer>
  )
}