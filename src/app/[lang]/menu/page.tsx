"use client";
import { use, useState, useEffect, useCallback, useRef } from "react";
import { Flame, Sparkles, X, Star, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LANG, Locale } from "@/lib/lang";
import { useRouter, usePathname } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────
type SpiceLevel = "none" | "mild" | "hot";

type Pairing = {
  id: number;
  name: string;
  price: string;
  img: string;
};

type MenuItem = {
  id: number;
  name: string;
  price: string;
  category: string;
  tag: string;
  img: string;
  desc: string;
  rating: number;
  reviewCount: number;
  spiceLevel: SpiceLevel;
  prepTime: number;
  calories: string;
  notes: string[];
  pairings: Pairing[];
};

// ─── Spice icon ───────────────────────────────────────────────────────────────
function SpiceIcon({ level }: { level: SpiceLevel }) {
  // Simple pepper SVG
  const count = level === "none" ? 0 : level === "mild" ? 1 : 2;
  if (count === 0) return null;
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
          <path d="M12 2C10.34 2 9 3.34 9 5c0 .74.28 1.41.73 1.93C8.12 8.22 7 10.48 7 13c0 3.87 3.13 7 7 7s7-3.13 7-7c0-2.52-1.12-4.78-2.73-6.07C18.72 6.41 19 5.74 19 5c0-1.66-1.34-3-3-3h-4z"/>
        </svg>
      ))}
    </span>
  );
}

// ─── Modal ───────────────────────────────────────────────────────────────────
function ItemModal({
  item,
  t,
  lang,
  onClose,
  onSelectPairing,
}: {
  item: MenuItem;
  t: ReturnType<typeof LANG[Locale]["menuPage"]["items"][number]> & { modalOrder: string; modalNotes: string; modalPairings: string; modalSpiceNone: string; modalSpiceMild: string; modalSpiceHot: string; modalReviews: string; modalPrepTime: string };
  lang: Locale;
  onClose: () => void;
  onSelectPairing: (id: number) => void;
}) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const spiceLabelMap: Record<SpiceLevel, string> = {
    none: t.modalSpiceNone,
    mild: t.modalSpiceMild,
    hot:  t.modalSpiceHot,
  };

  return (
    <div
      className="fixed inset-0 z-50"
      style={{ backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      {/* ── MOBILE modal: full-screen sheet ── */}
      <div
        className="sm:hidden fixed inset-0 flex flex-col"
        style={{ backgroundColor: "#FFFFFF" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image — full width, fixed height */}
        <div className="relative shrink-0" style={{ height: "38vh", backgroundColor: "#FAF5EE" }}>
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-contain"
          />
          {/* X button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full shadow-md"
            style={{ backgroundColor: "#FFFFFF", color: "#1C0A0A" }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 pt-5 pb-4">
          {/* Name */}
          <h2 className="text-2xl font-extrabold leading-tight mb-1" style={{ color: "#1C0A0A" }}>
            {item.name}
          </h2>

          {/* Price */}
          <p className="text-2xl font-extrabold mb-3" style={{ color: "#8B1A1A" }}>
            {item.price}
          </p>

          {/* Rating row */}
          <div className="flex items-center gap-1.5 text-sm mb-1" style={{ color: "#4B3030" }}>
            <Star size={14} className="fill-amber-400 stroke-amber-400" />
            <span className="font-bold">{item.rating}</span>
            <span style={{ color: "#9B8B8B" }}>({item.reviewCount}+ {t.modalReviews})</span>
          </div>

          {/* Meta row: time | calories | spice */}
          <div className="flex items-center gap-3 text-sm mb-4" style={{ color: "#4B3030" }}>
            <span className="flex items-center gap-1">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {item.prepTime} {t.modalPrepTime}
            </span>
            <span style={{ color: "#D9C8B8" }}>|</span>
            <span className="flex items-center gap-1">
              {/* flame icon for calories */}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c0 6-6 6-6 12a6 6 0 0 0 12 0c0-6-6-6-6-12z"/></svg>
              {item.calories}
            </span>
            <span style={{ color: "#D9C8B8" }}>|</span>
            <span className="flex items-center gap-1">
              <SpiceIcon level={item.spiceLevel} />
              {spiceLabelMap[item.spiceLevel]}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-5" style={{ color: "#5A3D3D" }}>
            {item.desc}
          </p>

          {/* Notes */}
          <div className="mb-5">
            <p className="text-sm font-bold mb-3" style={{ color: "#1C0A0A" }}>
              {t.modalNotes}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.notes.map((note, i) => (
                <span
                  key={i}
                  className="text-sm px-4 py-1.5 rounded-full border"
                  style={{ borderColor: "#D9C8B8", color: "#1C0A0A", backgroundColor: "#FFFFFF" }}
                >
                  {note}
                </span>
              ))}
              <span
                className="text-sm px-4 py-1.5 rounded-full border"
                style={{ borderColor: "#D9C8B8", color: "#1C0A0A", backgroundColor: "#FFFFFF" }}
              >
                {item.calories}
              </span>
            </div>
          </div>

          {/* Pairings */}
          {item.pairings && item.pairings.length > 0 && (
            <div className="mb-2">
              <p className="text-sm font-bold mb-3" style={{ color: "#1C0A0A" }}>
                {t.modalPairings}
              </p>
              <div
                className="flex gap-3 overflow-x-auto"
                style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
              >
                {item.pairings.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onSelectPairing(p.id)}
                    className="flex items-center gap-3 text-left rounded-2xl p-3 border shrink-0"
                    style={{
                      borderColor: "#E8DDD0",
                      backgroundColor: "#FFFFFF",
                      width: "80vw",
                      maxWidth: "320px",
                      scrollSnapAlign: "start",
                    }}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-snug" style={{ color: "#1C0A0A" }}>
                        {p.name}
                      </p>
                      <p className="text-sm font-extrabold mt-1" style={{ color: "#8B1A1A" }}>
                        {p.price}
                      </p>
                    </div>
                  </button>
                ))}
                <div className="shrink-0 w-1" />
              </div>
            </div>
          )}
        </div>

        {/* Sticky CTA */}
        <div className="shrink-0 px-5 py-4 border-t" style={{ borderColor: "#F0E8DF" }}>
          <button
            className="w-full py-4 rounded-full font-bold text-base text-white transition-opacity active:opacity-80"
            style={{ backgroundColor: "#6B1111" }}
          >
            {t.modalOrder}
          </button>
        </div>
      </div>

      {/* ── DESKTOP modal: 2-col layout (unchanged) ── */}
      <div
        className="hidden sm:flex items-center justify-center p-6 fixed inset-0"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
          style={{ backgroundColor: "#FFFFFF" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full transition-colors"
            style={{ backgroundColor: "#F3EDE4", color: "#1C0A0A" }}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Top section */}
          <div className="grid grid-cols-2 gap-0">
            {/* Image */}
            <div
              className="flex items-center justify-center p-4 rounded-tl-2xl rounded-bl-2xl"
              style={{ backgroundColor: "#FAF5EE", minHeight: "280px" }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full max-w-[400px] aspect-square object-contain rounded-xl"
              />
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col gap-4">
              <h2 className="text-2xl font-extrabold leading-tight" style={{ color: "#1C0A0A" }}>
                {item.name}
              </h2>
              <p className="text-2xl font-extrabold" style={{ color: "#8B1A1A" }}>
                {item.price}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm" style={{ color: "#4B3030" }}>
                <span className="flex items-center gap-1">
                  <Star size={14} className="fill-amber-400 stroke-amber-400" />
                  <span className="font-bold">{item.rating}</span>
                  <span className="text-gray-400">({item.reviewCount}+ {t.modalReviews})</span>
                </span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-1">
                  <SpiceIcon level={item.spiceLevel} />
                  <span>{spiceLabelMap[item.spiceLevel]}</span>
                </span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-1">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {item.prepTime} {t.modalPrepTime}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#5A3D3D" }}>
                {item.desc}
              </p>
              <div>
                <p className="text-sm font-bold mb-2" style={{ color: "#1C0A0A" }}>
                  {t.modalNotes}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.notes.map((note, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full border font-medium"
                      style={{ borderColor: "#D9C8B8", color: "#4B3030", backgroundColor: "#FAF5EE" }}
                    >
                      {note}
                    </span>
                  ))}
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border font-medium"
                    style={{ borderColor: "#D9C8B8", color: "#4B3030", backgroundColor: "#FAF5EE" }}
                  >
                    {item.calories}
                  </span>
                </div>
              </div>
              <button
                className="mt-auto w-full py-3.5 rounded-full font-bold text-base text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#6B1111" }}
              >
                {t.modalOrder}
              </button>
            </div>
          </div>

          {/* Pairings */}
          {item.pairings && item.pairings.length > 0 && (
            <div className="px-6 pb-6 pt-2">
              <p className="text-base font-extrabold mb-4" style={{ color: "#1C0A0A" }}>
                {t.modalPairings}
              </p>
              <div className="grid grid-cols-3 gap-3">
                {item.pairings.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onSelectPairing(p.id)}
                    className="flex items-center gap-3 text-left rounded-xl p-3 border transition-colors hover:border-[#8B1A1A]/30"
                    style={{ borderColor: "#E8DDD0", backgroundColor: "#FAF5EE" }}
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-12 h-12 rounded-lg object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold leading-snug truncate" style={{ color: "#1C0A0A" }}>
                        {p.name}
                      </p>
                      <p className="text-xs font-extrabold mt-0.5" style={{ color: "#8B1A1A" }}>
                        {p.price}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function MenuPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params);
  const t = LANG[lang].menuPage;
  const [activeTab, setActiveTab] = useState("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeFeatIndex, setActiveFeatIndex] = useState(0);
  const featScrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (newLang: Locale) => {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  const openModal = useCallback((item: MenuItem) => setSelectedItem(item), []);
  const closeModal = useCallback(() => setSelectedItem(null), []);
  const handleSelectPairing = useCallback((id: number) => {
    const found = (t.items as unknown as MenuItem[]).find((i) => i.id === id);
    if (found) setSelectedItem(found);
  }, [t.items]);

  const tabs = [
    { key: "all",      label: t.all      },
    { key: "mainDish", label: t.mainDish },
    { key: "combo",    label: t.combo    },
    { key: "drinks",   label: t.drinks   },
    { key: "sides",    label: t.sides    },
  ];

  const filtered: MenuItem[] =
    activeTab === "all"
      ? (t.items as unknown as MenuItem[])
      : (t.items as unknown as MenuItem[]).filter((item) => item.category === activeTab);

  const tagStyle: Record<string, string> = {
    hot:     "bg-white text-[#8B1A1A]",
    newItem: "bg-white text-[#8B1A1A]",
  };
  const tagIcon: Record<string, React.ReactNode> = {
    hot:     <Flame size={11} className="text-[#8B1A1A]" />,
    newItem: <Sparkles size={11} className="text-[#8B1A1A]" />,
  };
  const tagLabel: Record<string, string> = {
    hot:     t.hot,
    newItem: t.newItem,
  };

  // Featured: 1 large left + 2 small stacked right
  const [featA, featB, featC] = t.featured;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF5EE" }}>
      <Navbar lang={lang} onLangChange={handleLangChange} variant="light" />

      {/* ── HERO — Full-screen banner (desktop) / Wave banner (mobile) ── */}
      {/* Desktop: image shifted down 20%, text pushed toward top */}
      <section className="relative w-full h-screen min-h-[560px] overflow-hidden hidden sm:block">
        {/* Image starts at top of section but its object-position is shifted down 20% */}
        <img
          src={t.heroBanner}
          alt={t.heroTitle}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 20%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0.02) 100%)" }}
        />
        {/* Text centered, shifted up ~20% from vertical center */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6" style={{ paddingBottom: "20vh" }}>
          <h1
            className="text-5xl lg:text-6xl tracking-tight mb-3 drop-shadow-sm"
            style={{ color: "#6B1111", fontWeight: 400 }}
          >
            {t.heroTitle}
          </h1>
          <p className="text-lg lg:text-xl drop-shadow-sm" style={{ color: "#3D1010", fontWeight: 400 }}>
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Mobile: image with wave bottom mask, text below */}
      <div className="block sm:hidden">
        <div className="relative w-full overflow-hidden" style={{ height: "56vw", minHeight: "220px", maxHeight: "320px" }}>
          <img
            src={t.heroBanner}
            alt={t.heroTitle}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Wave SVG mask at bottom */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 375 48"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <path d="M0,24 C60,48 120,0 187.5,24 C255,48 315,0 375,24 L375,48 L0,48 Z" fill="#FAF5EE" />
          </svg>
        </div>
        {/* Text below the wave */}
        <div className="text-center px-6 pt-5 pb-2" style={{ backgroundColor: "#FAF5EE" }}>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2" style={{ color: "#6B1111" }}>
            {t.heroTitle}
          </h1>
          <p className="text-base font-medium" style={{ color: "#3D1010" }}>
            {t.heroSubtitle}
          </p>
        </div>
      </div>

      {/* ── FEATURED — 1 large + 2 small (desktop grid / mobile horizontal scroll) ── */}
      {/* Desktop grid */}
      <section className="hidden sm:block px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto pt-12 pb-10">
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {/* Large card — left, fixed 510px */}
          <button
            onClick={() => openModal(t.items.find((i) => i.id === featA.id) as unknown as MenuItem)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer text-left"
            style={{ height: "510px" }}
          >
            <img
              src={featA.img}
              alt={featA.name}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            {featA.tag && (
              <span className="absolute top-4 left-4 flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full shadow-md bg-white text-[#8B1A1A]">
                <Flame size={11} className="text-[#8B1A1A]" /> {tagLabel[featA.tag]}
              </span>
            )}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white font-bold text-lg leading-tight">{featA.name}</p>
              <p className="text-white/90 font-semibold text-base mt-0.5">{featA.price}</p>
            </div>
          </button>

          {/* Right column — two stacked, each 243px */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {[featB, featC].map((feat) => (
              <button
                key={feat.id}
                onClick={() => openModal(t.items.find((i) => i.id === feat.id) as unknown as MenuItem)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer text-left"
                style={{ height: "243px" }}
              >
                <img
                  src={feat.img}
                  alt={feat.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {feat.tag && (
                  <span className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full shadow-md bg-white text-[#8B1A1A]">
                    <Flame size={11} className="text-[#8B1A1A]" /> {tagLabel[feat.tag]}
                  </span>
                )}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-bold text-base leading-tight">{feat.name}</p>
                  <p className="text-white/90 font-semibold text-sm mt-0.5">{feat.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile horizontal scroll carousel */}
      <section className="block sm:hidden pt-6 pb-6">
        <div
          ref={featScrollRef}
          className="flex gap-3 overflow-x-auto px-4"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
          onScroll={() => {
            const el = featScrollRef.current;
            if (!el) return;
            const cardWidth = el.scrollWidth / 3;
            const idx = Math.round(el.scrollLeft / cardWidth);
            setActiveFeatIndex(Math.min(idx, 2));
          }}
        >
          {[featA, featB, featC].map((feat) => (
            <button
              key={feat.id}
              onClick={() => openModal(t.items.find((i) => i.id === feat.id) as unknown as MenuItem)}
              className="relative rounded-2xl overflow-hidden cursor-pointer text-left shrink-0"
              style={{ width: "78vw", maxWidth: "300px", aspectRatio: "3/4", scrollSnapAlign: "start" }}
            >
              <img
                src={feat.img}
                alt={feat.name}
                className="w-full h-full object-cover"
              />
              {feat.tag && (
                <span className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full shadow-md bg-white text-[#8B1A1A]">
                  <Flame size={11} className="text-[#8B1A1A]" /> {tagLabel[feat.tag]}
                </span>
              )}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-bold text-base leading-tight">{feat.name}</p>
                <p className="text-white/90 font-semibold text-sm mt-0.5">{feat.price}</p>
              </div>
            </button>
          ))}
          {/* trailing spacer */}
          <div className="shrink-0 w-1" />
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-3">
          {[0, 1, 2].map((idx) => (
            <span
              key={idx}
              className="w-2 h-2 rounded-full transition-colors duration-200"
              style={{ backgroundColor: idx === activeFeatIndex ? "#6B1111" : "#D9C8B8" }}
            />
          ))}
        </div>
      </section>

      {/* ── TABS ── */}
      {/* Desktop */}
      <section className="hidden sm:block px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto mb-10">
        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="text-sm font-semibold px-6 py-2.5 rounded-full transition-all border"
              style={
                activeTab === tab.key
                  ? { backgroundColor: "#6B1111", color: "#fff", borderColor: "#6B1111" }
                  : { backgroundColor: "transparent", color: "#4B2B2B", borderColor: "#D9C8B8" }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>
      {/* Mobile horizontal scroll tabs */}
      <section className="block sm:hidden mb-6">
        <div
          className="flex gap-2 overflow-x-auto px-4"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="text-sm font-semibold px-5 py-2 rounded-full transition-all border shrink-0"
              style={
                activeTab === tab.key
                  ? { backgroundColor: "#6B1111", color: "#fff", borderColor: "#6B1111", scrollSnapAlign: "start" }
                  : { backgroundColor: "transparent", color: "#4B2B2B", borderColor: "#D9C8B8", scrollSnapAlign: "start" }
              }
            >
              {tab.label}
            </button>
          ))}
          <div className="shrink-0 w-2" />
        </div>
      </section>

      {/* ── MENU GRID ── */}
      <section className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-12">
          {filtered.map((item) => (
            <button
              key={item.id}
              onClick={() => openModal(item)}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Dish image — fixed 300×208px, overflow hidden, center crop */}
              <div
                className="relative overflow-hidden rounded-xl mb-3 sm:w-[300px] sm:h-[208px] w-full"
              >
                {item.tag && (
                  <span
                    className="absolute top-2 left-2 z-10 flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full shadow"
                    style={{ backgroundColor: "#fff", color: "#8B1A1A" }}
                  >
                    {tagIcon[item.tag]}
                    {tagLabel[item.tag]}
                  </span>
                )}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transition-transform duration-400 group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-base mb-1 leading-snug" style={{ color: "#1C0A0A" }}>
                {item.name}
              </h3>
              <p className="font-extrabold text-base" style={{ color: "#8B1A1A" }}>
                {item.price}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      {/* Desktop: 3 columns — text | mascot | button */}
      <section className="hidden sm:block w-full px-6 lg:px-10 py-16" style={{ backgroundColor: "#C8DDE8" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-4 items-center gap-8">
          {/* Col 1: text */}
          <div className="col-span-2">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3" style={{ color: "#1C0A0A" }}>
              {t.ctaTitle}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#3D2B2B" }}>
              {t.ctaDesc}
            </p>
          </div>
          {/* Col 2: mascot centered */}
          <div className="flex justify-center">
            <img
              src={t.ctaImg}
              alt="mascot"
              width={180}
              height={220}
              className="object-contain"
            />
          </div>
          {/* Col 3: button */}
          <div className="flex justify-center">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-bold px-8 py-3.5 rounded-full shadow-md transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#fff", color: "#1C0A0A" }}
            >
              {t.ctaBtn}
            </a>
          </div>
        </div>
      </section>

      {/* Mobile CTA — matching image 3 layout */}
      <section className="block sm:hidden mx-4 mb-8 rounded-2xl overflow-hidden" style={{ backgroundColor: "#C8DDE8" }}>
        <div className="flex items-center gap-3 px-4 pt-5 pb-4">
          {/* Mascot */}
          <img
            src={t.ctaImg}
            alt="mascot"
            className="w-20 h-20 object-contain shrink-0"
          />
          {/* Text */}
          <div>
            <h2 className="text-lg font-extrabold leading-tight mb-1" style={{ color: "#1C0A0A" }}>
              {t.ctaTitle}
            </h2>
            <p className="text-xs leading-relaxed" style={{ color: "#3D2B2B" }}>
              {t.ctaDesc}
            </p>
          </div>
        </div>
        {/* CTA button row */}
        <div className="px-4 pb-4">
          <a
            href="#"
            className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#fff", color: "#1C0A0A" }}
          >
            <span>{t.ctaBtn}</span>
            <span>→</span>
          </a>
        </div>
      </section>

      <Footer lang={lang} />

      {/* ── MODAL ── */}
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          t={t as any}
          lang={lang}
          onClose={closeModal}
          onSelectPairing={handleSelectPairing}
        />
      )}
    </div>
  );
}