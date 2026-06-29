import {sanityClient} from './sanityClient'

const STORE_PAGE_QUERY = /* groq */ `{
  "settings": *[_type == "storePageSettings"][0]{
    title, subtitle, badgeLabel, heroBanner, mascotImg, labels
  },
  "stores": *[_type == "store"] | order(_createdAt asc) {
    _id, name, address, hours, phone, status, image, mapUrl
  }
}`

export async function getStorePageData() {
  return sanityClient.fetch(STORE_PAGE_QUERY, {}, {cache: 'no-store'})
}