import {sanityClient} from './sanityClient'

const MENU_PAGE_QUERY = /* groq */ `{
  "settings": *[_type == "menuPageSettings"][0]{
    heroTitle, heroSubtitle, heroBanner,
    featured[]->{_id},
    ctaTitle, ctaDesc, ctaBtn, ctaImg,
    filterLabels, labels, modalLabels
  },
  "items": *[_type == "menuItem"] | order(category asc) {
    _id, name, price, category, tag, image, desc,
    rating, reviewCount, spiceLevel, prepTime, calories, notes,
    "pairings": pairings[]->{_id, name, price, image}
  }
}`

export async function getMenuPageData() {
  return sanityClient.fetch(MENU_PAGE_QUERY, {}, {cache: 'no-store'})
}