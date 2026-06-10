"use client";
import { ArrowRight } from "lucide-react";
import { LANG, Locale } from "@/lib/lang";

export default function PromoSection({ lang }: { lang: Locale }) {
  const t = LANG[lang].promoBanner;

  return (
    <section
      id="promo"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#CFE7F2", minHeight: "clamp(550px, 120vw, 620px)" }}
    >
      {/* Desktop: Food image — absolute, anchored right-bottom */}
      <div className="absolute right-0 bottom-0 hidden lg:block">
        <img
          src={t.banner}
          alt={t.title}
          className="object-contain object-right-bottom"
          style={{ width: "50vw", maxWidth: "600px" }}
        />
      </div>

      {/* Mobile: Food image — absolute, anchored right-bottom, smaller */}
      <div className="absolute right-0 bottom-0 lg:hidden">
        <img
          src={t.banner}
          alt={t.title}
          className="object-contain object-right-bottom"
          style={{ width: "90vw", maxWidth: "420px" }}
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-20">
        <div className="max-w-[520px]">

          {/* Title — smaller on mobile */}
          <h2
            className="mb-3 leading-tight"
            style={{
              fontFamily: "'Momo Trust Display', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.8rem, 7vw, 3.8rem)",
              color: "var(--color-heading)",
            }}
          >
            {t.title}
          </h2>

          {/* Desc — smaller on mobile */}
          <p
            className="mb-1"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: "clamp(0.9rem, 3.5vw, 1.8rem)",
              color: "#374151",
            }}
          >
            {t.desc1}
          </p>
          <p
            className="mb-8 lg:mb-10"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: "clamp(0.9rem, 3.5vw, 1.8rem)",
              color: "#374151",
            }}
          >
            {t.desc2}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-start gap-4">
            <button
              className="inline-flex items-center gap-2 font-bold px-7 py-3 rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              style={{
                background: "var(--color-heading)",
                fontFamily: "'Archivo', sans-serif",
                fontSize: "0.95rem",
              }}
            >
              {t.cta}
              <ArrowRight size={15} />
            </button>

            <a
              href={`/${lang}/khuyen-mai`}
              className="group inline-flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-70"
              style={{
                color: "var(--color-heading)",
                fontFamily: "'Archivo', sans-serif",
                fontSize: "0.95rem",
              }}
            >
              {t.ctaAll}
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}