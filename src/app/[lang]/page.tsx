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
import { Locale } from "@/lib/lang";

export default function HomePage() {
  const [lang, setLang] = useState<Locale>("vi");

  return (
    <main className="antialiased">
      <Navbar lang={lang} onLangChange={setLang} />
      <Hero lang={lang} />
      <MenuSection lang={lang} />
      <WhyUs lang={lang} />
      <PromoSection lang={lang} />
      <StoreList lang={lang} />
      <CTABanner lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}