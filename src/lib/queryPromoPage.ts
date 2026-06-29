import {sanityClient} from './sanityClient'

const PROMO_PAGE_QUERY = /* groq */ `{
  "settings": *[_type == "promoPageSettings"][0]{
    heroTitleLine1, heroTitleLine2, heroSubtitle, heroBanner, labels
  },
  "promotions": *[_type == "promotion"] | order(validUntil asc) {
    _id, badge, title, description, image, validUntil, applyFor
  }
}`

export async function getPromoPageData() {
  return sanityClient.fetch(PROMO_PAGE_QUERY, {}, {cache: 'no-store'})
}