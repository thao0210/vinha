"use client";
import { use, useState, useCallback, useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale } from "@/lib/lang";
import { useRouter, usePathname } from "next/navigation";
import { getAboutPageData } from "@/lib/queryAboutPage";
import { transformAboutPage } from "@/lib/transformAboutPage";
import { useSiteSettings } from "@/lib/useSiteSettings";

// ─── Gallery carousel ─────────────────────────────────────────────────────────
function GalleryCarousel({ images }: { images: { img: string }[] }) {
  const [offset, setOffset] = useState(0);
  // Show ~3 images at a time (partial 4th visible for affordance)
  const step = 1;
  const max = images.length - 3;

  const prev = useCallback(() => setOffset((o) => Math.max(0, o - step)), []);
  const next = useCallback(() => setOffset((o) => Math.min(max, o + step)), []);

  // Alternate heights for staggered look
  const heights = ["h-64", "h-80", "h-56", "h-72", "h-60"];

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(calc(-${offset} * (25% + 1rem)))` }}
      >
        {images.map((item, i) => (
          <div
            key={i}
            className={`shrink-0 rounded-2xl overflow-hidden ${heights[i % heights.length]}`}
            style={{ width: "calc(25% - 0.75rem)" }}
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function GioiThieuPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params);
  const site = useSiteSettings(lang);
  const [t, setT] = useState<ReturnType<typeof transformAboutPage> | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const [mobileScrollIdx, setMobileScrollIdx] = useState(0);

  const [galleryOffset, setGalleryOffset] = useState(0);

  useEffect(() => {
    getAboutPageData().then((raw) => {
      setT(transformAboutPage(raw, lang));
    });
  }, [lang]);

  const handleLangChange = (newLang: Locale) => {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  if (!t || !site) {
    return <div className="min-h-screen bg-white" />;
  }

  const galleryMax = t.gallery.length - 3;
  const prevGallery = () => setGalleryOffset((o) => Math.max(0, o - 1));
  const nextGallery = () => setGalleryOffset((o) => Math.min(galleryMax, o + 1));

  const heights = ["h-64", "h-80", "h-56", "h-72", "h-60"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} onLangChange={handleLangChange} variant="light" t={site.nav} orderUrl={site.orderUrl} />

      {/* ════════════════════════════════════════════════════════
          SECTION 1 — HERO (nền trắng, 3 cột desktop)
      ════════════════════════════════════════════════════════ */}
      <section className="hidden lg:block bg-white pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" style={{ minHeight: "815px" }}>

            {/* ── Cột 1: ảnh dài ── */}
            <div className="relative overflow-hidden" style={{ minHeight: "560px" }}>
              <img
                src={t.heroImg}
                alt="Vị Nhà"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* ── Cột 2: title trên, mascot+quote dưới ── */}
            <div className="flex flex-col justify-between w-[353px]">
              {/* TOP: story label + title */}
              <div>
                <p className="text-xl mb-4" style={{ color: "#716160" }}>
                    {t.storyLabel}
                </p>

                {/* Line 1: "Tử tế" + SVG badge inline */}
                <div className="flex items-center gap-3" style={{ lineHeight: 1.1 }}>
                    <span
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                        color: "#811620",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                    }}
                    >
                    {t.heroTitleLine1}
                    </span>

                    {/* "từng" badge với nón lá SVG */}
                    <div
                    className="relative inline-flex items-center justify-center"
                    style={{ width: "120px", height: "60px" }}
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 125 72"
                        fill="none"
                        className="absolute inset-0 w-full h-full"
                        aria-hidden="true"
                    >
                        <path
                        d="M66.9108 0.561584C47.0269 12.4073 13.8263 32.1422 2.05345 38.9893C-0.124028 40.2557 -0.754722 43.2683 1.06675 45.0083C10.4701 53.9909 29.6507 62.261 55.4073 67.1972C83.8921 72.6563 109.798 71.4311 121.656 69.2006C124.312 68.701 125.16 65.6991 123.438 63.6165L72.0284 1.4562C70.7711 -0.0641212 68.6057 -0.448161 66.9108 0.561584Z"
                        fill="#811620"
                        />
                    </svg>
                    <span
                        className="relative z-10 inline-block text-center"
                        style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                        color: "#FAF5EE",
                        fontWeight: 400,
                        letterSpacing: "0.04em",
                        marginTop: "8px",
                        }}
                    >
                        {t.heroTitleBadge}
                    </span>
                    </div>
                </div>

                {/* Line 2: "Bữa cơm" bên dưới */}
                <div style={{ lineHeight: 1.1 }}>
                    <span
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                        color: "#811620",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                    }}
                    >
                    {t.heroTitleLine2}
                    </span>
                </div>
                </div>

              {/* BOTTOM: mascot + quote */}
              <div className="mt-8 mb-5">
                <img
                    src={t.mascotImg}
                    alt="Mascot"
                    className="w-15 h-15 object-contain float-left mr-3"
                />
                <p className="text-xl font-bold leading-relaxed" style={{ color: "#6B1111" }}>
                    {t.heroQuote}
                </p>
                </div>
            </div>

            {/* ── Cột 3: 3 đoạn text sát đáy ── */}
            <div className="flex flex-col justify-end gap-5 py-4 pb-8">
              <p className="text-xl leading-relaxed" style={{ color: "#3D2B2B" }}>
                {t.heroPara1.replace(t.heroPara1Bold, "")}
                <strong style={{ color: "#1C0A0A" }}>{t.heroPara1Bold}</strong>
              </p>
              <p className="text-xl leading-relaxed" style={{ color: "#3D2B2B" }}>
                {t.heroPara2}
              </p>
              <p className="text-xl leading-relaxed" style={{ color: "#3D2B2B" }}>
                {t.heroPara3.replace(t.heroPara3Bold, "")}
                <strong style={{ color: "#1C0A0A" }}>{t.heroPara3Bold}</strong>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
            MOBILE HERO — chỉ hiển thị trên mobile (lg:hidden)
        ════════════════════════════════════════════════════════ */}

        {/* PHẦN 1: Hero full-screen với text đè lên ảnh */}
        <section className="lg:hidden mt-30 relative w-full overflow-hidden" style={{ height: "100svh" }}>
        {/* Ảnh nền full viewport */}
        <img
            src={t.heroImg}
            alt="Vị Nhà"
            className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Text đè lên ảnh */}
        <div className="absolute inset-0 flex flex-col justify-start px-6 pt-10">
            {/* storyLabel góc trái */}
            <p className="text-base mb-4" style={{ color: "#716160" }}>
            {t.storyLabel}
            </p>

            {/* Line 1: "Tử tế" + badge "từng" */}
            <div className="flex items-center gap-3" style={{ lineHeight: 1.1 }}>
            <span
                style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 13vw, 4.2rem)",
                color: "#811620",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                }}
            >
                {t.heroTitleLine1}
            </span>

            {/* Badge nón lá */}
            <div
                className="relative inline-flex items-center justify-center"
                style={{ width: "110px", height: "56px" }}
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 125 72"
                fill="none"
                className="absolute inset-0 w-full h-full"
                aria-hidden="true"
                >
                <path
                    d="M66.9108 0.561584C47.0269 12.4073 13.8263 32.1422 2.05345 38.9893C-0.124028 40.2557 -0.754722 43.2683 1.06675 45.0083C10.4701 53.9909 29.6507 62.261 55.4073 67.1972C83.8921 72.6563 109.798 71.4311 121.656 69.2006C124.312 68.701 125.16 65.6991 123.438 63.6165L72.0284 1.4562C70.7711 -0.0641212 68.6057 -0.448161 66.9108 0.561584Z"
                    fill="#811620"
                />
                </svg>
                <span
                className="relative z-10 inline-block text-center"
                style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(0.95rem, 3vw, 1.2rem)",
                    color: "#FAF5EE",
                    fontWeight: 400,
                    letterSpacing: "0.04em",
                    marginTop: "8px",
                }}
                >
                {t.heroTitleBadge}
                </span>
            </div>
            </div>

            {/* Line 2: "Bữa cơm" */}
            <div style={{ lineHeight: 1.1 }}>
            <span
                style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 13vw, 4.2rem)",
                color: "#811620",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                }}
            >
                {t.heroTitleLine2}
            </span>
            </div>
        </div>
        </section>

        {/* PHẦN 2: Mascot + quote + heroSubImg + 3 para */}
        <section className="lg:hidden bg-white px-6 pt-10 pb-12">
        {/* Mascot canh giữa */}
        <div className="flex justify-center mb-5">
            <img
            src={t.mascotImg}
            alt="Mascot"
            className="w-14 h-14 object-contain"
            />
        </div>

        {/* Quote canh giữa */}
        <p
            className="text-xl font-bold leading-relaxed text-center mb-8"
            style={{ color: "#6B1111" }}
        >
            {t.heroQuote}
        </p>

        {/* heroSubImg — full width */}
        <div className="w-full mb-8 overflow-hidden">
            <img
            src={t.heroSubImg}
            alt=""
            className="w-full object-cover"
            />
        </div>

        {/* 3 đoạn para left-align */}
        <div className="flex flex-col gap-5">
            <p className="text-base leading-relaxed" style={{ color: "#3D2B2B" }}>
            {t.heroPara1.replace(t.heroPara1Bold, "")}
            <strong style={{ color: "#1C0A0A" }}>{t.heroPara1Bold}</strong>
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#3D2B2B" }}>
            {t.heroPara2}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#3D2B2B" }}>
            {t.heroPara3.replace(t.heroPara3Bold, "")}
            <strong style={{ color: "#1C0A0A" }}>{t.heroPara3Bold}</strong>
            </p>
        </div>
        </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 2 — VALUES (nền kem)
      ════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: "#FAF5EE" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2
            className="text-4xl lg:text-5xl font-normal text-center mb-14 tracking-tight"
            style={{ color: "#1C0A0A" }}
            >
            {t.valuesTitle}
            </h2>

            <div className="flex flex-col gap-12">
            {t.values.map((val, idx) => (
                <div
                key={idx}
                className="flex flex-col-reverse sm:flex-row items-start gap-6 sm:gap-8"
                >
                {/* Image — full width mobile, fixed size desktop */}
                <div
                    className="w-full sm:w-[500px] sm:h-[200px] shrink-0 overflow-hidden"
                >
                    <img
                    src={val.img}
                    alt={val.title}
                    className="w-full h-full object-contain sm:object-left"
                    />
                </div>

                {/* Text */}
                <div className="flex items-start gap-8 sm:gap-20 flex-1 pt-2">
                    <span
                    className="text-2xl font-black shrink-0 font-display"
                    style={{ color: "#8B1A1A", minWidth: "2.5rem" }}
                    >
                    {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                    <h3
                        className="text-2xl font-normal mb-4 sm:mb-8"
                        style={{ color: "#8B1A1A" }}
                    >
                        {val.title}
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "#3D2B2B" }}>
                        {val.desc}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 3 — GALLERY (nền trắng)
      ════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Header row */}
    <div className="flex items-start justify-between mb-8 gap-8">

      {/* Left: title + subtitle + link */}
      <div className="w-full lg:max-w-[50%] lg:flex-1">
        <h2
          className="text-4xl lg:text-5xl font-display tracking-tight mb-5"
          style={{ color: "#1C0A0A" }}
        >
          {t.galleryTitle}
        </h2>

        {/* subtitle — ẩn trên mobile */}
        <p
          className="hidden lg:block text-2xl leading-relaxed mb-4"
          style={{ color: "#5A3D3D" }}
        >
          {t.gallerySubtitle}
        </p>

        <a href={site.orderUrl} className="text-md font-bold" style={{ color: "#8B1A1A" }}>
          {t.galleryLink} →
        </a>
      </div>

      {/* Right: mascot + prev/next — ẩn trên mobile */}
      <div className="hidden lg:flex w-[50%] flex-col items-center gap-4 shrink-0">
        <img src={t.ctaImg} alt="Mascot" className="w-60 object-contain mb-10" />
        <div className="flex items-center gap-3 w-full">
          <div
            className="flex-1 h-0.5 rounded-full overflow-hidden"
            style={{ backgroundColor: "#FBE1DD" }}
          >
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                backgroundColor: "#BA1A1A",
                width: `${((galleryOffset + 1) / (galleryMax + 1)) * 100}%`,
              }}
            />
          </div>
          <button
            onClick={prevGallery}
            disabled={galleryOffset === 0}
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors disabled:opacity-30 hover:border-[#6B1111]"
            style={{ borderColor: "#820015" }}
            aria-label="Previous"
          >
            <ChevronLeft size={30} style={{ color: "#820015" }} />
          </button>
          <button
            onClick={nextGallery}
            disabled={galleryOffset >= galleryMax}
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-opacity disabled:opacity-30"
            style={{ backgroundColor: "#820015", borderColor: "#820015" }}
            aria-label="Next"
          >
            <ChevronRight size={30} className="text-white" />
          </button>
        </div>
      </div>
    </div>

    {/* ── DESKTOP carousel (translateX) ── */}
    <div className="hidden lg:block">
      <div
        className="flex gap-10 transition-transform duration-500 ease-in-out items-start"
        style={{
          transform: `translateX(calc(-${galleryOffset} * (25% + 1rem)))`,
        }}
      >
        {t.gallery.map((item, i) => (
          <div
            key={i}
            className="shrink-0 overflow-hidden"
            style={{
              width: "calc(25% - 0.75rem)",
              marginTop: i % 2 === 0 ? "80px" : "0px",
            }}
          >
            <img src={item.img} alt="" className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </div>

    {/* ── MOBILE carousel ── */}
    <div className="lg:hidden -mx-6">
        <div
            ref={mobileCarouselRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth items-start"
            style={{ scrollbarWidth: "none", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
            onScroll={() => {
            const el = mobileCarouselRef.current;
            if (!el) return;
            const cardWidth = el.scrollWidth / t.gallery.length;
            const idx = Math.round(el.scrollLeft / cardWidth);
            setMobileScrollIdx(Math.min(idx, t.gallery.length - 1));
            }}
        >
            {t.gallery.map((item, i) => (
            <div
                key={i}
                className="shrink-0 snap-start overflow-hidden"
                style={{
                width: "80vw",
                marginTop: i % 2 === 0 ? "80px" : "0px",
                }}
            >
                <img src={item.img} alt="" className="w-full h-auto object-cover" />
            </div>
            ))}
        </div>

        {/* Progress bar */}
        <div className="px-6 mt-5">
            <div
            className="w-full h-1 rounded-full overflow-hidden"
            style={{ backgroundColor: "#FBE1DD" }}
            >
            <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                backgroundColor: "#BA1A1A",
                width: `${((mobileScrollIdx + 1) / t.gallery.length) * 100}%`,
                }}
            />
            </div>
        </div>
        </div>

  </div>
</section>

      {/* ════════════════════════════════════════════════════════
          CTA BOTTOM (nền xanh nhạt)
      ════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 lg:px-10" style={{ backgroundColor: "#C8DDE8" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2
              className="text-3xl lg:text-5xl font-normal tracking-tight mb-5"
              style={{ color: "#6B1111" }}
            >
              {t.ctaTitle}
            </h2>
            <p className="text-xl lg:text-2xl font-light" style={{ color: "#716160" }}>
              {t.ctaDesc}
            </p>
          </div>
          <a
            href={site.orderUrl}
            className="shrink-0 inline-flex items-center gap-2 font-bold text-md px-30 lg:px-20 py-4 rounded-full border-1 transition-colors hover:bg-white/20"
            style={{ borderColor: "#820015", color: "#820015", backgroundColor: "rgba(255,255,255,0.6)" }}
          >
            {t.ctaBtn}
            <ArrowRight size={14} className="ml-2" />
          </a>
        </div>
      </section>

      <Footer lang={lang} t={site.footer} />
    </div>
  );
}