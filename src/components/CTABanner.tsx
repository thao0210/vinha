"use client";
import { useRef, useState } from "react";
import { Locale } from "@/lib/lang";

export default function CTABanner({ lang, t }: { lang: Locale; t: any }) {
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const idx = Math.round(container.scrollLeft / container.offsetWidth);
    setMobileIndex(idx);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Title */}
        <h2
          className="text-center mb-8 lg:mb-12"
          style={{
            fontFamily: "'Momo Trust Display', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "var(--color-body)",
          }}
        >
          {t.title}
        </h2>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {t.ops.map((op, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
                <img
                  src={op.img}
                  alt={op.label}
                  onError={(e) => { (e.target as HTMLImageElement).src = op.fallback; }}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className="text-center font-semibold text-xl"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  color: "var(--color-heading)",
                }}
              >
                {op.label}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: swipe carousel */}
        <div className="lg:hidden">
          <div className="-mx-6">
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex overflow-x-auto snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", paddingLeft: "5%", paddingRight: "5%" }}
            >
              {t.ops.map((op, i) => (
                <div
                  key={i}
                  className="flex-none w-full snap-center px-3 flex flex-col items-center gap-4"
                    style={{ width: "90%" }}
                >
                  <div className="w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={op.img}
                      alt={op.label}
                      onError={(e) => { (e.target as HTMLImageElement).src = op.fallback; }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="text-center font-semibold text-lg"
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      color: "var(--color-heading)",
                    }}
                  >
                    {op.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {t.ops.map((_, i) => (
              <span
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === mobileIndex ? "20px" : "8px",
                  height: "8px",
                  backgroundColor: i === mobileIndex ? "var(--color-heading)" : "#D1C7C0",
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}