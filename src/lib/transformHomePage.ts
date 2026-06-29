import {resolveImage} from './sanityClient'

type Locale = 'vi' | 'en'
type Bilingual = {vi: string; en: string}

// Helper lấy đúng giá trị theo lang từ field {vi, en}
function pick(field: Bilingual | undefined | null, lang: Locale): string {
  return field?.[lang] ?? ''
}

// Format số thành chuỗi giá tiền kiểu "69.000đ" (giữ đúng style hiện tại của lang.ts)
function formatPrice(price: number): string {
  return price.toLocaleString('vi-VN') + 'đ'
}

/**
 * Nhận data thô từ Sanity (homePage + siteSettings), trả về 2 object
 * CÓ HÌNH DẠNG GIỐNG HỆT LANG['vi'] và LANG['en'] trong lang.ts cũ.
 * Nhờ vậy Hero.tsx, Navbar.tsx, Footer.tsx, MenuSection.tsx... không cần sửa gì,
 * chỉ cần nhận đúng object này thay cho LANG[lang] cũ.
 */
export function transformHomePageData(raw: {homePage: any; siteSettings: any; stores: any[]}) {
  const {homePage: hp, siteSettings: ss, stores} = raw

  function buildForLang(lang: Locale) {
    return {
      nav: {
        // Navbar.tsx dùng 2 mảng song song: ids và items (tên hiển thị theo đúng thứ tự ids)
        ids: (ss?.nav?.items ?? []).map((item: any) => item.id),
        items: (ss?.nav?.items ?? []).map((item: any) => pick(item.label, lang)),
        order: pick(ss?.nav?.orderLabel, lang),
      },
      hero: {
        badge: pick(hp?.hero?.badge, lang),
        titleTop: pick(hp?.hero?.titleTop, lang),
        titleRed: pick(hp?.hero?.titleRed, lang),
        subtitle: pick(hp?.hero?.subtitle, lang),
        cta: pick(hp?.hero?.cta, lang),
        banner: resolveImage(hp?.hero?.banner, {width: 1200}),
        phone: hp?.hero?.phone ?? '',
        zalo: hp?.hero?.zalo ?? '',
      },
      menu: {
        title: pick(hp?.menuSnippet?.title, lang),
        viewAll: pick(hp?.menuSnippet?.viewAll, lang),
        // featuredItems đã được GROQ resolve thành menuItem thật -> map về đúng field name/img/price
        items: (hp?.menuSnippet?.featuredItems ?? []).map((item: any) => ({
          name: pick(item.name, lang),
          img: resolveImage(item.image, {width: 600}),
          price: formatPrice(item.price),
        })),
      },
      why: {
        tag: pick(hp?.why?.tag, lang),
        title: pick(hp?.why?.title, lang),
        items: (hp?.why?.items ?? []).map((item: any) => ({
          title: pick(item.title, lang),
          desc: pick(item.desc, lang),
          img: resolveImage(item.image, {width: 600}),
        })),
      },
      promo: {
        title: pick(hp?.promoBanner?.title, lang),
        desc1: pick(hp?.promoBanner?.desc1, lang),
        desc2: pick(hp?.promoBanner?.desc2, lang),
        cta: pick(hp?.promoBanner?.cta, lang),
        ctaAll: pick(hp?.promoBanner?.ctaAll, lang),
        banner: resolveImage(hp?.promoBanner?.banner, {width: 1000}),
      },
      stores: {
        tag: pick(hp?.storesSnippet?.tag, lang),
        title: pick(hp?.storesSnippet?.title, lang),
        viewAll: pick(hp?.storesSnippet?.viewAll, lang),
        openLabel: pick(hp?.storesSnippet?.openLabel, lang),
        soonLabel: pick(hp?.storesSnippet?.soonLabel, lang),
        dirLabel: pick(hp?.storesSnippet?.dirLabel, lang),
        orderLabel: pick(ss?.nav?.orderLabel, lang),
        list: (stores ?? []).map((s: any) => ({
          name: pick(s.name, lang),
          addr: pick(s.address, lang),
          hrs: s.hours ?? '',
          phone: s.phone ?? '',
          open: s.status === 'open',
          img: resolveImage(s.image, {width: 600}),
          mapSrc: s.mapUrl ?? '#',
        })),
      },
      ctaBanner: {
        title: pick(hp?.ctaBanner?.title, lang),
        ops: (hp?.ctaBanner?.ops ?? []).map((op: any) => ({
          label: pick(op.label, lang),
          img: resolveImage(op.image, {width: 500}),
          fallback: op.image?.fallbackUrl || '',
        })),
      },
      stats: (hp?.stats ?? []).map((s: any) => ({
        value: s.value,
        label: pick(s.label, lang),
      })),
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
      // Link iPOS duy nhất - dùng cho mọi nút "Đặt món" trên toàn site
      orderUrl: ss?.orderUrl ?? '',
    }
  }

  return {
    vi: buildForLang('vi'),
    en: buildForLang('en'),
  }
}