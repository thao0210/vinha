"use client";
import { ArrowRight, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Locale, LANG } from "@/lib/lang";

export default function Hero({ lang }: { lang: Locale }) {
  const t = LANG[lang].hero;

  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    }, []);

  return (
    <>
      {/* ── HERO: full viewport height, cream background ── */}
      <section
        className="relative w-full h-screen overflow-hidden"
        style={{ backgroundColor: "#FDF3EC" }}
      >
        {/* Desktop: Food image — covers full section, anchored to right-bottom */}
        <div className="absolute inset-0 hidden lg:block" style={{ top: "20px" }}>
          <img
            src={t.banner}
            alt="Món ăn Vị Nhà"
            className="w-full h-full object-cover object-right-bottom"
          />
          {/* Fade from left so cream bg blends into image */}
          <div
            className="absolute inset-y-0 left-0 w-[50%]"
            style={{
              background: "linear-gradient(to right, #FDF3EC 40%, transparent)",
            }}
          />
        </div>

        {/* Mobile: Food image — bottom half, full width */}
        <div className="absolute bottom-0 left-0 right-0 lg:hidden" style={{ height: "55%" }}>
          <img
            src={t.banner}
            alt="Món ăn Vị Nhà"
            className="w-full h-full object-cover object-right"
          />
          {/* Fade from top so cream bg blends into image */}
          <div
            className="absolute inset-x-0 top-0 h-[40%]"
            style={{
              background: "linear-gradient(to bottom, #FDF3EC 0%, transparent)",
            }}
          />
        </div>

        {/* Text content */}
        <div className="relative z-10 h-full flex items-start lg:items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-30 lg:pt-0">
            {/* Mobile: centered, Desktop: left-aligned */}
            <div className="max-w-[620px] mx-auto lg:mx-0 text-center lg:text-left">
              {/* Badge */}
              <p
                className="text-[16px] lg:text-[20px] text-[#716160] font-extrabold uppercase mb-4 lg:mb-5"
                style={{
                  fontFamily: "'Momo Trust Display', sans-serif",
                  fontWeight: 400,
                }}
              >
                {t.badge}
              </p>

              {/* Title */}
              <h1
                className="leading-[1.1] mb-4 lg:mb-5"
                style={{
                  fontSize: "clamp(2rem, 8vw, 4rem)",
                  fontFamily: "'Momo Trust Display', sans-serif",
                  fontWeight: 400,
                  color: "var(--color-body)",
                }}
              >
                {t.titleTop}
                <br />
                <span style={{ color: "var(--color-heading)" }}>{t.titleRed}</span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-body mb-7 lg:mb-10 text-base lg:text-xl"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                {t.subtitle}
              </p>

              {/* CTA */}
              <button
                className="inline-flex items-center gap-2.5 font-bold text-[15px] px-8 py-4 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, var(--color-heading) 0%, #5a0f13 100%)",
                  fontFamily: "'Archivo', sans-serif",
                }}
              >
                {t.cta}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Floating contact icons */}
        <div className={`fixed right-5 z-50 flex flex-col gap-3 transition-all duration-300 ${scrolled ? "bottom-20" : "bottom-6"}`}>
          {/* Phone */}
          <a
            href={t.phone}
            title="Phone"
            className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Phone size={18} style={{ color: "var(--color-heading)" }} />
          </a>

          {/* Zalo */}
          <a
            href={t.zalo}
            target="_blank"
            rel="noopener noreferrer"
            title="Zalo"
            className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex flex-col items-center justify-center hover:scale-110 transition-transform gap-0.5"
          >
            <span className="text-[12px] font-bold" style={{ color: "var(--color-heading)", lineHeight: 1 }}>
              Zalo
            </span>
          </a>
        </div>
      </section>
    </>
  );
}