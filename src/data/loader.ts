import {
  createIsomorphicFn,
  getRouterInstance,
} from '@tanstack/react-start'

/**
 * Resolves a public asset path to a URL that fetch() can use in both the
 * browser and during SSR. The client resolves relative to the page origin;
 * the server needs an absolute URL, so it builds one from the router origin.
 */
const resolveDataUrl = createIsomorphicFn()
  .client((href: string) => href)
  .server(async (href: string) => {
    const router = await getRouterInstance()
    if (!router.origin) {
      throw new Error(
        `Cannot fetch "${href}" during SSR: router origin is unavailable`,
      )
    }
    return new URL(href, router.origin).toString()
  })

export async function fetchJson<T>(href: string): Promise<T> {
  const url = await resolveDataUrl(href)
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${href} (${response.status} ${response.statusText})`,
    )
  }

  return (await response.json()) as T
}