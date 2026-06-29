import {sanityClient} from './sanityClient'

const ABOUT_PAGE_QUERY = /* groq */ `*[_type == "aboutPage"][0]`

export async function getAboutPageData() {
  return sanityClient.fetch(ABOUT_PAGE_QUERY, {}, {cache: 'no-store'})
}