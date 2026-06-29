type Locale = 'vi' | 'en'

function pick(field: any, lang: Locale): string {
  return field?.[lang] ?? ''
}

export function transformSiteSettings(ss: any, lang: Locale) {
  return {
    orderUrl: ss?.orderUrl ?? '',
    nav: {
      ids: (ss?.nav?.items ?? []).map((item: any) => item.id),
      items: (ss?.nav?.items ?? []).map((item: any) => pick(item.label, lang)),
      order: pick(ss?.nav?.orderLabel, lang),
    },
    footer: {
      tagline: pick(ss?.footer?.tagline, lang),
      exploreTitle: pick(ss?.footer?.exploreTitle, lang),
      exploreLinks: (ss?.footer?.exploreLinks ?? []).map((l: any) => ({
        label: pick(l.label, lang),
        href: l.href,
      })),
      followTitle: pick(ss?.footer?.followTitle, lang),
      social: (ss?.footer?.social ?? []).map((s: any) => ({
        label: s.label,
        href: s.href,
        type: s.type,
      })),
      kitchenTitle: pick(ss?.footer?.kitchenTitle, lang),
      kitchenAddress: pick(ss?.footer?.kitchenAddress, lang),
      kitchenHours: pick(ss?.footer?.kitchenHours, lang),
      hotlineLabel: pick(ss?.footer?.hotlineLabel, lang),
      hotline: ss?.footer?.hotline ?? '',
    },
  }
}