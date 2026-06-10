"use client";
import { Store, ArrowRight, MapPin, Clock } from "lucide-react";
import { useRef, useState } from "react";
import { LANG, Locale } from "@/lib/lang";

export default function StoreList({ lang }: { lang: Locale }) {
  const t = LANG[lang].stores;
  const visibleStores = t.list.slice(0, 3);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const idx = Math.round(container.scrollLeft / container.offsetWidth);
    setMobileIndex(idx);
  };

  return (
    <section id="stores" className="py-14" style={{ backgroundColor: "#FDF3EC" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex items-baseline justify-between mb-8 lg:mb-10">
          <h2
            style={{
              fontFamily: "'Momo Trust Display', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.2rem, 3vw, 2.2rem)",
              color: "var(--color-body)",
            }}
          >
            {t.title}
          </h2>
          <a
            href={`/${lang}/cua-hang`}
            className="group inline-flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-70"
            style={{
              color: "var(--color-heading)",
              fontFamily: "'Archivo', sans-serif",
              fontSize: "0.95rem",
            }}
          >
            {t.viewAll}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* ── Desktop Store rows ── */}
        <div className="hidden lg:block">
          {visibleStores.map((store, i) => (
            <div
              key={i}
              className={`
                flex flex-col sm:flex-row sm:items-center gap-5 py-7
                ${i < visibleStores.length - 1 ? "border-b" : ""}
              `}
              style={{ borderColor: "#E5DDD5" }}
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 sm:w-[220px] flex-shrink-0">
                <Store size={22} style={{ color: "var(--color-heading)" }} />
                <span
                  style={{
                    fontFamily: "'Momo Trust Display', sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "var(--color-body)",
                  }}
                >
                  {store.name}
                </span>
              </div>

              {/* Status badge */}
              <div className="sm:w-[160px] flex-shrink-0">
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold"
                  style={
                    store.open
                      ? { backgroundColor: "#FADADD", color: "var(--color-heading)" }
                      : { backgroundColor: "#DBEAFE", color: "#1D4ED8" }
                  }
                >
                  {store.open ? t.openLabel : t.soonLabel}
                </span>
              </div>

              {/* Address + hours */}
              <div className="flex-1 min-w-0 text-body">
                <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: "0.95rem" }}>
                  {store.addr}
                </p>
                <p className="mt-1 text-body" style={{ fontFamily: "'Archivo', sans-serif", fontSize: "0.875rem" }}>
                  {store.open ? store.hrs : "Coming Soon"}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-6 flex-shrink-0">
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all hover:opacity-70"
                  style={{
                    border: "1.5px solid #D1C7C0",
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "var(--color-body)",
                  }}
                >
                  {LANG[lang].nav.order}
                  <ArrowRight size={14} />
                </button>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-70"
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--color-heading)",
                  }}
                >
                  {t.dirLabel}
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile Swipe Cards ── */}
        <div className="lg:hidden">
          <div className="-mx-6">
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex overflow-x-auto snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", paddingLeft: "5%",
        paddingRight: "5%", }}
            >
              {visibleStores.map((store, i) => (
                <div
                  key={i}
                  className="flex-none w-full snap-center px-3"
                  style={{ width: "90%" }}
                >
                  <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#fff" }}>
                    {/* Store image */}
                    <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                      <img
                        src={store.img}
                        alt={store.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Open/Soon badge — top left overlay */}
                      <span
                        className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold"
                        style={
                          store.open
                            ? { backgroundColor: "rgba(0,0,0,0.55)", color: "#fff" }
                            : { backgroundColor: "rgba(0,0,0,0.55)", color: "#fff" }
                        }
                      >
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: store.open ? "#22c55e" : "#60a5fa" }}
                        />
                        {store.open ? t.openLabel : t.soonLabel}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="px-5 py-5">
                      <h3
                        className="mb-3"
                        style={{
                          fontFamily: "'Momo Trust Display', sans-serif",
                          fontWeight: 600,
                          fontSize: "1.2rem",
                          color: "var(--color-body)",
                        }}
                      >
                        {store.name}
                      </h3>

                      <div className="flex items-start gap-2 mb-2">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-heading)" }} />
                        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: "0.9rem", color: "var(--color-body)" }}>
                          {store.addr}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mb-5">
                        <Clock size={15} className="flex-shrink-0" style={{ color: "var(--color-heading)" }} />
                        <p style={{ fontFamily: "'Archivo', sans-serif", fontSize: "0.875rem", color: "var(--color-body)" }}>
                          {store.open ? store.hrs : "Coming Soon"}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3">
                        <button
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-white font-semibold text-sm"
                          style={{
                            background: "var(--color-heading)",
                            fontFamily: "'Archivo', sans-serif",
                          }}
                        >
                          {LANG[lang].nav.order}
                        </button>
                        <a
                          href="#"
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm"
                          style={{
                            border: "1.5px solid #D1C7C0",
                            fontFamily: "'Archivo', sans-serif",
                            color: "var(--color-body)",
                          }}
                        >
                          <MapPin size={14} />
                          {t.dirLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {visibleStores.map((_, i) => (
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