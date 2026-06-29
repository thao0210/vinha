import {resolveImage} from './sanityClient'

type Locale = 'vi' | 'en'

function pick(field: any, lang: Locale): string {
  return field?.[lang] ?? ''
}

// "2026-05-31" -> "31/05/2026" (vi) hoặc "31 May 2026" (en)
function formatDate(dateStr: string, lang: Locale): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (lang === 'vi') {
    return d.toLocaleDateString('vi-VN') // 31/05/2026
  }
  return d.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})
}

export function transformPromoPage(raw: {settings: any; promotions: any[]}, lang: Locale) {
  const {settings, promotions} = raw

  return {
    heroTitleLine1: pick(settings?.heroTitleLine1, lang),
    heroTitleLine2: pick(settings?.heroTitleLine2, lang),
    heroSubtitle: pick(settings?.heroSubtitle, lang),
    heroBanner: resolveImage(settings?.heroBanner, {width: 1200}),
    heroOrderBtn: pick(settings?.labels?.orderNow, lang),
    ctaBtn: pick(settings?.labels?.ctaBtn, lang),
    items: (promotions ?? []).map((p: any) => ({
      id: p._id.replace('promotion-', ''),
      badge: p.badge ?? '',
      title: pick(p.title, lang),
      description: pick(p.description, lang),
      img: resolveImage(p.image, {width: 500}),
      validUntil:
        (pick(settings?.labels?.validUntil, lang) ? pick(settings?.labels?.validUntil, lang) + ': ' : '') +
        formatDate(p.validUntil, lang),
      applyFor: pick(p.applyFor, lang),
    })),
  }
}