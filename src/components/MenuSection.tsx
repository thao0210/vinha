"use client";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Locale, LANG } from "@/lib/lang";

export default function MenuSection({ lang }: { lang: Locale }) {
  const t = LANG[lang].menu;
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!desktopScrollRef.current) return;
    const amount = 340;
    desktopScrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  const swipeMobile = (dir: "left" | "right") => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const cardWidth = container.offsetWidth;
    const next = dir === "right"
      ? Math.min(mobileIndex + 1, t.items.length - 1)
      : Math.max(mobileIndex - 1, 0);
    container.scrollTo({ left: next * cardWidth, behavior: "smooth" });
    setMobileIndex(next);
  };

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const idx = Math.round(container.scrollLeft / container.offsetWidth);
    setMobileIndex(idx);
  };

  return (
    <section id="menu" className="py-16 overflow-hidden" style={{ backgroundColor: "#FCF4E9" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex items-baseline justify-between pb-5 mb-10 border-b border-heading">
          <h2
            style={{
              color: "var(--color-body)",
              fontFamily: "'Momo Trust Display', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.2rem, 3vw, 2.5rem)",
            }}
          >
            {t.title}
          </h2>
          <a
            href={`/${lang}/menu`}
            className="group inline-flex items-center gap-1.5 text-md font-semibold transition-opacity hover:opacity-70"
            style={{ color: "var(--color-heading)", fontFamily: "'Archivo', sans-serif" }}
          >
            {t.viewAll}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* ── Desktop Carousel ── */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous"
            className="flex-none w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-70"
            style={{ border: "2px solid var(--color-heading)" }}
          >
            <ChevronLeft size={22} style={{ color: "var(--color-heading)" }} />
          </button>

          <div
            ref={desktopScrollRef}
            className="flex-1 flex gap-8 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {t.items.map((item, i) => (
              <div
                key={i}
                className="flex-none flex flex-col items-center group cursor-pointer"
                style={{ width: "calc((100% - 64px) / 3)" }}
              >
                <div className="w-full flex items-end justify-center mb-5" style={{ height: "280px" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
                    style={{ height: "100%", width: "auto" }}
                  />
                </div>
                <h3
                  className="font-bold mb-1 text-center"
                  style={{
                    color: "var(--color-body)",
                    fontFamily: "'Momo Trust Display', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  className="font-extrabold text-center"
                  style={{
                    color: "var(--color-heading)",
                    fontFamily: "'Archivo', sans-serif",
                    fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                  }}
                >
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            aria-label="Next"
            className="flex-none w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-70"
            style={{ border: "2px solid var(--color-heading)" }}
          >
            <ChevronRight size={22} style={{ color: "var(--color-heading)" }} />
          </button>
        </div>

        {/* ── Mobile Swipe Carousel ── */}
        <div className="lg:hidden">
            <div className="-mx-6">
                <div
                ref={mobileScrollRef}
                onScroll={handleMobileScroll}
                className="flex overflow-x-auto snap-x snap-mandatory"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                }}
                >
                {t.items.map((item, i) => (
                    <div
                    key={i}
                    className="flex-none snap-center flex flex-col items-center px-3"
                    style={{ width: "90%" }}
                    >
                    {/* Food image */}
                    <div className="w-full flex items-end justify-center mb-5" style={{ height: "260px" }}>
                        <img
                        src={item.img}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain drop-shadow-md"
                        style={{ height: "100%", width: "auto" }}
                        />
                    </div>
                    <h3
                        className="mb-1 text-center"
                        style={{
                        color: "var(--color-body)",
                        fontFamily: "'Momo Trust Display', sans-serif",
                        fontWeight: 400,
                        fontSize: "1.3rem",
                        }}
                    >
                        {item.name}
                    </h3>
                    <p
                        className="font-extrabold text-center"
                        style={{
                        color: "var(--color-heading)",
                        fontFamily: "'Archivo', sans-serif",
                        fontSize: "1.1rem",
                        }}
                    >
                        {item.price}
                    </p>
                    </div>
                ))}
                </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6 mx-6 h-[3px] rounded-full overflow-hidden" style={{ backgroundColor: "#E5DDD5" }}>
                <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                    backgroundColor: "var(--color-heading)",
                    width: `${((mobileIndex + 1) / t.items.length) * 100}%`,
                }}
                />
            </div>
            </div>

      </div>
    </section>
  );
}