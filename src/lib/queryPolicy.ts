import {sanityClient} from './sanityClient'

export async function getPolicyData() {
  return sanityClient.fetch(
    `*[_type == "policyPage"][0]{ title, content }`,
    {},
    {cache: 'no-store'}
  )
}

type Locale = 'vi' | 'en'

export function transformPolicy(raw: any, lang: Locale) {
  if (!raw) return null
  return {
    title: raw.title?.[lang] ?? '',
    content: raw.content?.[lang] ?? [],
  }
}