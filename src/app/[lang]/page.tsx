// "use client";
// import { useState } from "react";
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import PromoSection from "@/components/PromoSection";
// import MenuSection from "@/components/MenuSection";
// import WhyUs from "@/components/WhyUs";
// import StoreList from "@/components/StoreList";
// import CTABanner from "@/components/CTABanner";
// import Footer from "@/components/Footer";
// import { Locale } from "@/lib/lang";

// export default function HomePage() {
//   const [lang, setLang] = useState<Locale>("vi");

//   return (
//     <main className="antialiased">
//       <Navbar lang={lang} onLangChange={setLang} />
//       <Hero lang={lang} />
//       <MenuSection lang={lang} />
//       <WhyUs lang={lang} />
//       <PromoSection lang={lang} />
//       <StoreList lang={lang} />
//       <CTABanner lang={lang} />
//       <Footer lang={lang} />
//     </main>
//   );
// }
import HomePageClient from './HomePageClient'
import {getHomePageData} from '@/lib/queries'
import {transformHomePageData} from '@/lib/transformHomePage'

// Server Component: fetch data 1 lần tại server, không lộ token, SEO tốt hơn.
// Tự động cache + revalidate, không cần gọi lại Sanity mỗi lần người dùng đổi ngôn ngữ.
export default async function HomePage() {
  const raw = await getHomePageData()
  const data = transformHomePageData(raw) // data.vi và data.en, sẵn sàng dùng

  return <HomePageClient data={data} />
}