"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromoSection from "@/components/PromoSection";
import MenuSection from "@/components/MenuSection";
import WhyUs from "@/components/WhyUs";
import StoreList from "@/components/StoreList";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

type Locale = "vi" | "en";

// data = { vi: {...}, en: {...} } -- đã transform sẵn từ Sanity, đúng khuôn LANG cũ
export default function HomePageClient({ data }: { data: Record<Locale, any> }) {
  const [lang, setLang] = useState<Locale>("vi");

  return (
    <main className="antialiased">
      <Navbar lang={lang} onLangChange={setLang} t={data[lang].nav} orderUrl={data[lang].orderUrl} />
      <Hero lang={lang} t={data[lang].hero} />
      <MenuSection lang={lang} t={data[lang].menu} orderUrl={data[lang].orderUrl} />
      <WhyUs lang={lang} t={data[lang].why} />
      <PromoSection lang={lang} t={data[lang].promo} orderUrl={data[lang].orderUrl} />
      <StoreList lang={lang} t={data[lang].stores} orderUrl={data[lang].orderUrl} />
      <CTABanner lang={lang} t={data[lang].ctaBanner} />
      <Footer lang={lang} t={data[lang].footer} />
    </main>
  );
}