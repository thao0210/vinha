import {sanityClient} from './sanityClient'

/**
 * Query lấy TOÀN BỘ data cần cho trang chủ trong 1 lần gọi:
 * - homePage: hero, stats, promoSnippet, promoBanner, menuSnippet (kèm featuredItems
 *   đã được resolve từ reference sang đúng menuItem thật), why, storesSnippet, ctaBanner
 * - siteSettings: nav, footer, orderUrl (link iPOS duy nhất)
 *
 * "->" trong GROQ nghĩa là "đi theo reference, lấy data của document được trỏ tới".
 */
const HOME_PAGE_QUERY = /* groq */ `{
  "homePage": *[_type == "homePage"][0]{
    hero,
    stats,
    promoSnippet,
    promoBanner,
    menuSnippet{
      tag, title, viewAll, orderBtn,
      featuredItems[]->{
        _id, name, price, image, category
      }
    },
    why,
    storesSnippet,
    ctaBanner
  },
  "siteSettings": *[_type == "siteSettings"][0]{
    orderUrl, nav, footer
  },
  "stores": *[_type == "store"] | order(status asc) {
    _id, name, address, hours, phone, status, image, mapUrl
  }
}`

export async function getHomePageData() {
  return sanityClient.fetch(HOME_PAGE_QUERY, {}, {cache: 'no-store'})
}