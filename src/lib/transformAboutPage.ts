import {resolveImage} from './sanityClient'

type Locale = 'vi' | 'en'

function pick(field: any, lang: Locale): string {
  return field?.[lang] ?? ''
}

export function transformAboutPage(raw: any, lang: Locale) {
  const hero = raw?.hero ?? {}
  const values = raw?.values ?? {}
  const gallery = raw?.gallery ?? {}
  const cta = raw?.cta ?? {}

  return {
    // Hero
    storyLabel: pick(hero.storyLabel, lang),
    heroTitleLine1: pick(hero.titleLine1, lang),
    heroTitleBadge: pick(hero.titleBadge, lang),
    heroTitleLine2: pick(hero.titleLine2, lang),
    heroImg: resolveImage(hero.heroImg, {width: 900}),
    heroSubImg: resolveImage(hero.heroSubImg, {width: 1200}),
    mascotImg: resolveImage(hero.mascotImg, {width: 150}),
    heroQuote: pick(hero.quote, lang),
    heroPara1: pick(hero.para1, lang),
    heroPara1Bold: pick(hero.para1Bold, lang),
    heroPara2: pick(hero.para2, lang),
    heroPara3: pick(hero.para3, lang),
    heroPara3Bold: pick(hero.para3Bold, lang),

    // Values
    valuesTitle: pick(values.title, lang),
    values: (values.items ?? []).map((item: any) => ({
      img: resolveImage(item.image, {width: 700}),
      title: pick(item.title, lang),
      desc: pick(item.desc, lang),
    })),

    // Gallery
    galleryTitle: pick(gallery.title, lang),
    gallerySubtitle: pick(gallery.subtitle, lang),
    galleryLink: pick(gallery.link, lang),
    gallery: (gallery.images ?? []).map((img: any) => ({
      img: resolveImage(img, {width: 500}),
    })),
    // ctaImg cạnh gallery dùng chung ảnh mascot của CTA cuối trang
    ctaImg: resolveImage(cta.image, {width: 250}),

    // CTA bottom
    ctaTitle: pick(cta.title, lang),
    ctaDesc: pick(cta.desc, lang),
    ctaBtn: pick(cta.btn, lang),
  }
}