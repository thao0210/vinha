"use client";
import { use, useState, useRef } from "react";
import { Calendar, Tag, Flame, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LANG, Locale } from "@/lib/lang";
import { useRouter, usePathname } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────
type PromoItem = {
  id: number;
  badge: string;
  title: string;
  description: string;
  img: string;
  validUntil: string;
  applyFor: string;
};

// ─── Single promo card ────────────────────────────────────────────────────────
function PromoCard({ item }: { item: PromoItem }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden h-full flex flex-col sm:flex-row"
      style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.08)" }}
    >
      {/* Mobile: image on top */}
      <div className="sm:hidden w-full flex items-center justify-center p-4 bg-white">
        <img
          src={item.img}
          alt={item.title}
          className="w-full max-h-[180px] object-contain drop-shadow-sm"
        />
      </div>

      {/* Text side — left on desktop, bottom on mobile */}
      <div className="flex-1 p-4 flex flex-col gap-2 min-w-0">
        <span
          className="inline-flex items-center gap-1.5 self-start text-md font-400 px-3 py-1 rounded-full"
          style={{ color: "#4A90C4", backgroundColor: "#DFF0FA" }}
        >
          <Flame size={11} style={{ color: "#4A90C4" }} />
          {item.badge}
        </span>
        <h2 className="text-lg font-400 leading-snug" style={{ color: "#1C0A0A" }}>
          {item.title}
        </h2>
        <p className="text-md leading-relaxed" style={{ color: "#5A3D3D" }}>
          {item.description}
        </p>
        <div className="flex items-start gap-0 mt-1">
          <div className="flex items-start gap-1.5 pr-3">
            <Calendar size={20} className="mt-0.5 shrink-0" style={{ color: "#8B1A1A" }} />
            <span className="text-sm leading-tight" style={{ color: "#1C0A0A" }}>{item.validUntil}</span>
          </div>
          <div className="w-px self-stretch mx-1" style={{ backgroundColor: "#E0D5CC" }} />
          <div className="flex items-start gap-1.5 pl-3">
            <Tag size={20} className="mt-0.5 shrink-0" style={{ color: "#8B1A1A" }} />
            <span className="text-sm leading-tight" style={{ color: "#1C0A0A" }}>{item.applyFor}</span>
          </div>
        </div>
      </div>

      {/* Desktop: image on the right */}
      <div className="hidden sm:flex w-[180px] shrink-0 items-center justify-center p-3">
        <img
          src={item.img}
          alt={item.title}
          className="w-full object-contain drop-shadow-sm"
        />
      </div>
    </div>
  );
}

// ─── Desktop Carousel (3+ items, arrow navigation) ────────────────────────────
function PromoCarouselDesktop({ items }: { items: PromoItem[] }) {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const max = items.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <div className="relative">
      {/* Prev button */}
      <button
        onClick={prev}
        disabled={current === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-opacity disabled:opacity-30"
        style={{ backgroundColor: "#6B1111", color: "#fff" }}
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Track */}
      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(calc(-${current} * (100% / ${visible} + ${20 / visible}px)))`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="shrink-0"
              style={{ width: `calc((100% - ${(visible - 1) * 20}px) / ${visible})` }}
            >
              <PromoCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={next}
        disabled={current >= max}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-opacity disabled:opacity-30"
        style={{ backgroundColor: "#6B1111", color: "#fff" }}
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      {max > 0 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{ backgroundColor: i === current ? "#6B1111" : "#D9C8B8" }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Mobile Carousel (swipe, peek prev/next) ──────────────────────────────────
function PromoCarouselMobile({ items }: { items: PromoItem[] }) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(items.length - 1, index)));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goTo(current + (diff > 0 ? 1 : -1));
    }
    isDragging.current = false;
  };

  return (
    <div className="relative overflow-hidden px-[10%]">
      {/* Track: each card 80% width so prev/next peek */}
      <div
        ref={trackRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(calc(${current * -80}vw + ${current === 0 ? 0 : -8}px))`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, i) => (
          <div
            key={item.id}
            className="shrink-0 px-2"
            style={{ width: "80vw" }}
            onClick={() => goTo(i)}
          >
            <PromoCard item={item} />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="w-2 h-2 rounded-full transition-all"
            style={{ backgroundColor: i === current ? "#6B1111" : "#D9C8B8" }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function PromotionsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params);
  const t = LANG[lang].promoPage;
  const router = useRouter();
  const pathname = usePathname();
  const items = t.items as unknown as PromoItem[];
  const count = items.length;

  const handleLangChange = (newLang: Locale) => {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF5EE" }}>
      <Navbar lang={lang} onLangChange={handleLangChange} variant="light" />

      {/* ── HERO — desktop only, sits BELOW Navbar ── */}
      <section
        className="relative w-full hidden sm:block mt-20"
        style={{ backgroundColor: "#C8DDE8", minHeight: "420px" }}
      >
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center"
          style={{ minHeight: "420px" }}
        >
          {/* Left: text */}
          <div className="relative z-10 max-w-lg py-16">
            <h1
              className="text-5xl lg:text-6xl leading-tight tracking-tight mb-4"
              style={{ fontWeight: 400 }}
            >
              <span style={{ color: "#1C0A0A" }}>{t.heroTitleLine1}</span>
              <br />
              <span style={{ color: "#6B1111", fontWeight: 400 }}>{t.heroTitleLine2}</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#3D2B2B", fontWeight: 400 }}>
              {t.heroSubtitle}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full transition-opacity hover:opacity-90 text-sm"
              style={{ backgroundColor: "#6B1111" }}
            >
              {t.heroOrderBtn}
            </a>
          </div>

          {/* Right: banner image — fills full height, cropped top+bottom (object-cover) */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-[58%] pointer-events-none select-none overflow-hidden"
          >
            <img
              src={t.heroBanner}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ── MOBILE: Title block (no hero banner) ── */}
      <div className="sm:hidden px-5 pt-25 pb-2">
        <h1 className="text-3xl text-center font-normal leading-tight mb-1" style={{ color: "#1C0A0A" }}>
          {t.heroTitleLine1}
          <br />
          <span style={{ color: "#6B1111" }}>{t.heroTitleLine2}</span>
        </h1>
        <p className="text-sm mt-2 text-center" style={{ color: "#5A3D3D" }}>
          {t.heroSubtitle}
        </p>
      </div>

      {/* ── PROMO CARDS ── */}
      {/* Desktop layout */}
      <section className="hidden sm:block max-w-7xl mx-auto px-6 lg:px-5 py-14">
        {count === 1 && <PromoCard item={items[0]} />}

        {count === 2 && (
          <div className="grid grid-cols-2 gap-5">
            {items.map((item) => (
              <PromoCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {count >= 3 && <PromoCarouselDesktop items={items} />}
      </section>

      {/* Mobile layout — swipe carousel, no padding on sides so cards peek */}
      <section className="sm:hidden py-6 pl-4">
        {count === 1 && (
          <div className="pr-4">
            <PromoCard item={items[0]} />
          </div>
        )}
        {count >= 2 && <PromoCarouselMobile items={items} />}
      </section>

      {/* ── CTA bottom ── */}
      <section className="pb-16 flex justify-center px-4">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-white font-bold px-14 py-4 rounded-full text-base transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#6B1111" }}
        >
          {t.ctaBtn}
        </a>
      </section>

      <Footer lang={lang} />
    </div>
  );
}