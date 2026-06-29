import {sanityClient} from './sanityClient'

/**
 * Lấy 1 món ăn theo numeric id (vẫn dùng ?slug=1 như URL cũ, không đổi sang slug chữ).
 * _id trong Sanity được seed dạng "menuItem-1", "menuItem-2"... nên query theo đó.
 */
export async function getMenuItemById(id: number) {
  return sanityClient.fetch(
    `*[_type == "menuItem" && _id == $id][0]{
      _id, name, price, tag, category, image, desc,
      rating, reviewCount, spiceLevel, prepTime, calories, notes
    }`,
    {id: `menuItem-${id}`},
    {cache: 'no-store'}
  )
}