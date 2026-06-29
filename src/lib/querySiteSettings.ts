import {sanityClient} from './sanityClient'

export async function getSiteSettings() {
  return sanityClient.fetch(
    `*[_type == "siteSettings"][0]{orderUrl, nav, footer}`,
    {},
    {cache: 'no-store'}
  )
}