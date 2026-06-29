import {resolveImage} from './sanityClient'

type Locale = 'vi' | 'en'

function pick(field: any, lang: Locale): string {
  return field?.[lang] ?? ''
}

export function transformStorePage(raw: {settings: any; stores: any[]}, lang: Locale) {
  const {settings, stores} = raw

  const branches = (stores ?? []).map((s: any, i: number) => ({
    id: i + 1, // Branch.id chỉ dùng làm React key, không cần khớp _id thật
    name: pick(s.name, lang),
    address: pick(s.address, lang),
    hours: s.hours ?? '',
    phone: s.phone ?? '',
    status: s.status as 'open' | 'coming',
    img: resolveImage(s.image, {width: 700}),
    mapSrc: s.mapUrl ?? '#',
  }))

  return {
    title: pick(settings?.title, lang),
    subtitle: pick(settings?.subtitle, lang),
    badgeLabel: pick(settings?.badgeLabel, lang),
    heroBanner: resolveImage(settings?.heroBanner, {width: 1600}),
    mascotImg: resolveImage(settings?.mascotImg, {width: 200}),
    openNow: pick(settings?.labels?.openNow, lang),
    comingSoon: pick(settings?.labels?.comingSoon, lang),
    orderNow: pick(settings?.labels?.orderNow, lang),
    call: pick(settings?.labels?.call, lang),
    getDirection: pick(settings?.labels?.getDirection, lang),
    featuredLabel: pick(settings?.labels?.featuredLabel, lang),
    otherBranches: pick(settings?.labels?.otherBranches, lang),
    searchPlaceholder: pick(settings?.labels?.searchPlaceholder, lang),
    filterOpen: pick(settings?.labels?.filterOpen, lang),
    filterComing: pick(settings?.labels?.filterComing, lang),
    filterCity: pick(settings?.labels?.filterCity, lang),
    branches,
  }
}