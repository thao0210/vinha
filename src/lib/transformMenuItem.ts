import {resolveImage} from './sanityClient'

type Locale = 'vi' | 'en'

/**
 * Map 1 document menuItem từ Sanity thành đúng shape mà MenuDetailPage cần
 * (giống object trong MENU_DATA cũ), theo đúng ngôn ngữ đang chọn.
 */
export function transformMenuItem(item: any, lang: Locale) {
  if (!item) return null

  return {
    id: Number(item._id.replace('menuItem-', '')),
    name: item.name?.[lang] ?? '',
    img: resolveImage(item.image, {width: 800}),
    price: item.price?.toLocaleString('vi-VN') + 'đ',
    tag: item.tag === 'none' ? null : item.tag, // schema dùng 'none', code cũ dùng null
    category: item.category,
    desc: item.desc?.[lang] ?? '',
    calories: `${item.calories} kcal`,
    prepTime: `${item.prepTime} ${lang === 'vi' ? 'phút' : 'min'}`,
    rating: item.rating,
    ingredients: item.notes?.[lang] ?? [], // tên field Sanity là "notes", code cũ gọi "ingredients"
  }
}