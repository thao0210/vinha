import {resolveImage} from './sanityClient'

type Locale = 'vi' | 'en'

function pick(field: any, lang: Locale): string {
  return field?.[lang] ?? ''
}

function formatPrice(price: number): string {
  return price.toLocaleString('vi-VN') + 'đ'
}

// Map 1 menuItem thô từ Sanity -> đúng shape MenuItem mà page.tsx Menu cần
function mapItem(raw: any, lang: Locale) {
  return {
    id: Number(raw._id.replace('menuItem-', '')),
    name: pick(raw.name, lang),
    price: formatPrice(raw.price),
    category: raw.category,
    tag: raw.tag === 'none' ? null : raw.tag,
    img: resolveImage(raw.image, {width: 600}),
    desc: pick(raw.desc, lang),
    rating: raw.rating,
    reviewCount: raw.reviewCount,
    spiceLevel: raw.spiceLevel,
    prepTime: raw.prepTime,
    calories: `${raw.calories} kcal`,
    notes: pick(raw.notes, lang) as unknown as string[], // notes là {vi: string[], en: string[]}
    pairings: (raw.pairings ?? []).map((p: any) => ({
      id: Number(p._id.replace('menuItem-', '')),
      name: pick(p.name, lang),
      price: formatPrice(p.price),
      img: resolveImage(p.image, {width: 200}),
    })),
  }
}

export function transformMenuPage(raw: {settings: any; items: any[]}, lang: Locale) {
  const {settings, items} = raw

  const mappedItems = (items ?? []).map((item: any) => mapItem(item, lang))

  // featured: settings.featured chỉ chứa _id (reference), tìm lại item đầy đủ trong mappedItems
  const featuredIds = (settings?.featured ?? []).map((f: any) => Number(f._id.replace('menuItem-', '')))
  const featured = featuredIds
    .map((id: number) => mappedItems.find((i) => i.id === id))
    .filter(Boolean)

  return {
    heroTitle: pick(settings?.heroTitle, lang),
    heroSubtitle: pick(settings?.heroSubtitle, lang),
    heroBanner: resolveImage(settings?.heroBanner, {width: 1600}),
    ctaTitle: pick(settings?.ctaTitle, lang),
    ctaDesc: pick(settings?.ctaDesc, lang),
    ctaBtn: pick(settings?.ctaBtn, lang),
    ctaImg: resolveImage(settings?.ctaImg, {width: 300}),
    // Filter tab labels
    all: pick(settings?.filterLabels?.all, lang),
    mainDish: pick(settings?.filterLabels?.mainDish, lang),
    combo: pick(settings?.filterLabels?.combo, lang),
    drinks: pick(settings?.filterLabels?.drinks, lang),
    sides: pick(settings?.filterLabels?.sides, lang),
    // Tag labels
    hot: pick(settings?.labels?.hot, lang),
    newItem: pick(settings?.labels?.newItem, lang),
    // Modal labels
    modalOrder: pick(settings?.modalLabels?.order, lang),
    modalNotes: pick(settings?.modalLabels?.notes, lang),
    modalPairings: pick(settings?.modalLabels?.pairings, lang),
    modalSpiceNone: pick(settings?.modalLabels?.spiceNone, lang),
    modalSpiceMild: pick(settings?.modalLabels?.spiceMild, lang),
    modalSpiceHot: pick(settings?.modalLabels?.spiceHot, lang),
    modalReviews: pick(settings?.modalLabels?.reviews, lang),
    modalPrepTime: pick(settings?.modalLabels?.prepTime, lang),
    // Data chính
    items: mappedItems,
    featured,
  }
}