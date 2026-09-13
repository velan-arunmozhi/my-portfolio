import type { ProfileData } from '~/data/types'

export function Intro({ profile }: { profile: ProfileData }) {
  return (
    <section
      id="intro"
      className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:gap-16 md:py-24"
    >
      <img
        src={profile.photo}
        alt={`Photo of ${profile.name}`}
        width={320}
        height={320}
        className="h-56 w-56 rounded-full border-4 border-black object-cover md:h-72 md:w-72"
      />
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-xl font-medium md:text-2xl">
          {profile.title}
        </p>
        <p className="mt-6 text-lg leading-relaxed">{profile.bio}</p>
      </div>
    </section>
  )
}