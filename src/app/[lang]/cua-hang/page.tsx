"use client";
import { use, useState, useMemo, useRef } from "react";
import { MapPin, Clock, Phone, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Locale, LANG } from "@/lib/lang";
import { useRouter, usePathname } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────
type Branch = {
  id: number;
  name: string;
  address: string;
  hours: string;
  phone: string;
  status: "open" | "coming";
  img: string;
  mapSrc: string;
};

// ─── Status badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status, t }: { status: "open" | "coming"; t: { openNow: string; comingSoon: string } }) {
  const isOpen = status === "open";
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
      style={{
        backgroundColor: "#37373799", // CC = ~80% opacity
        color: "#fff",
        fontSize: "0.9rem", // gấp đôi so với text-xs (0.75rem)
      }}
    >
      <span
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: isOpen ? "#329C18" : "#6085C3" }}
      />
      {isOpen ? t.openNow : t.comingSoon}
    </span>
  );
}

// ─── Featured branch card ─────────────────────────────────────────────────────
function FeaturedCard({ branch, t }: { branch: Branch; t: ReturnType<typeof LANG[Locale]["storePage"]> }) {
  return (
    // Ẩn trên mobile, chỉ hiện từ md trở lên
    <div
      className="hidden md:block"
      style={{
        backgroundColor: "#fff",
        borderRadius: "18px",
        boxShadow: "0px 2px 10px 0px #00000012",
        padding: "24px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", gap: "32px", alignItems: "stretch" }}>

        {/* ── Hình ảnh ── */}
        <div
          style={{
            width: "45%",
            flexShrink: 0,
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
            minHeight: "280px",
            maxHeight: "307px",  // ← giới hạn chiều cao
            maxWidth: "600px",   // ← giới hạn chiều rộng
          }}
        >
          <img
            src={branch.img}
            alt={branch.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* Status badge */}
          <div style={{ position: "absolute", top: "14px", left: "14px" }}>
            <StatusBadge status={branch.status} t={t} />
          </div>
        </div>

        {/* ── Info ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minWidth: 0,
            position: "relative",
          }}
        >
          {/* Top: label + title + details */}
          {/* Layout 2 cột: thông tin bên trái, mascot bên phải */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>

            {/* Cột thông tin */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
              {/* Featured label */}
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#8B1A1A",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                <MapPin size={18} />
                {t.featuredLabel}
              </p>

              {/* Branch name */}
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#1C0A0A", margin: 0 }}>
                {branch.name}
              </h2>

              {/* Address */}
              <p style={{ fontSize: "0.9rem", color: "#5A3D3D", margin: 0 }}>
                {branch.address}
              </p>

              {/* Hours – bold */}
              <p style={{ fontSize: "0.9rem", color: "#1C0A0A", margin: 0 }}>
                {branch.hours}
              </p>

              {/* Phone */}
              <p style={{ fontSize: "0.9rem", color: "#5A3D3D", margin: 0 }}>
                {branch.phone}
              </p>
            </div>

            {/* Mascot bên phải thông tin – lấy từ t.mascotImg */}
            {t.mascotImg && (
              <img
                src={t.mascotImg}
                alt=""
                aria-hidden="true"
                style={{
                  width: "88px",
                  flexShrink: 0,
                  pointerEvents: "none",
                  alignSelf: "flex-end",
                }}
              />
            )}
          </div>

          {/* Bottom: action buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "24px" }}>
            {/* Icon buttons row */}
            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href={branch.mapSrc}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  borderRadius: "999px",
                  border: "1.5px solid #D9C8B8",
                  color: "#4B3030",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
              >
                <MapPin size={17} />
              </a>

              <a
                href={`tel:${branch.phone.replace(/\s/g, "")}`}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  borderRadius: "999px",
                  border: "1.5px solid #D9C8B8",
                  color: "#4B3030",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
              >
                <Phone size={17} />
              </a>
            </div>

            {/* Order / Coming soon button */}
            {branch.status === "open" ? (
              <button
                style={{
                  width: "100%",
                  padding: "13px",
                  borderRadius: "999px",
                  border: "1.5px solid #820015",  // ← border màu heading Tailwind
                  backgroundColor: "#fff",         // ← nền trắng
                  color: "#820015",                // ← text màu heading Tailwind
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  transition: "opacity 0.15s",
                }}
              >
                {t.orderNow}
              </button>
            ) : (
              <button
                disabled
                style={{
                  width: "100%",
                  padding: "13px",
                  borderRadius: "999px",
                  border: "1.5px solid #D9C8B8",
                  backgroundColor: "#fff",
                  color: "#9B8080",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  cursor: "not-allowed",
                }}
              >
                {t.comingSoon}
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Other branch row card ────────────────────────────────────────────────────
function BranchRow({ branch, t }: { branch: Branch; t: ReturnType<typeof LANG[Locale]["storePage"]> }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0px 2px 10px 0px #00000012",
        padding: "24px",
        display: "flex",
        gap: "24px",
        alignItems: "stretch",
      }}
    >
      {/* ── Cột 1: Hình ảnh ── */}
      <div
        style={{
          width: "277px",
          flexShrink: 0,
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          maxHeight: "124px",
        }}
      >
        <img
          src={branch.img}
          alt={branch.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", top: "10px", left: "10px" }}>
          <StatusBadge status={branch.status} t={t} />
        </div>
      </div>

      {/* ── Cột 2: Thông tin ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "6px",
          minWidth: 0,
        }}
      >
        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1C0A0A", margin: 0 }}>
          {branch.name}
        </h3>
        <p style={{ fontSize: "0.875rem", color: "#5A3D3D", margin: 0 }}>
          {branch.address}
        </p>
        <span
          className="flex items-center gap-1"
          style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1C0A0A" }}
        >
          <Clock size={13} style={{ color: "#8B1A1A", flexShrink: 0 }} />
          {branch.hours}
        </span>
        <span
          className="flex items-center gap-1"
          style={{ fontSize: "0.875rem", color: "#5A3D3D" }}
        >
          <Phone size={13} style={{ color: "#8B1A1A", flexShrink: 0 }} />
          {branch.phone}
        </span>
      </div>

      {/* ── Cột 3: Nút hành động ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          flexShrink: 0,
          width: "496px",
        }}
      >
        {/* Icon buttons */}
        <div style={{ display: "flex", gap: "8px" }}>
          <a
            href={branch.mapSrc}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.getDirection}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "9px",
              borderRadius: "999px",
              border: "1.5px solid #D9C8B8",
              color: "#4B3030",
              textDecoration: "none",
              backgroundColor: "#fff",
              transition: "background 0.15s",
            }}
          >
            <MapPin size={15} />
          </a>
          <a
            href={`tel:${branch.phone.replace(/\s/g, "")}`}
            aria-label={t.call}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "9px",
              borderRadius: "999px",
              border: "1.5px solid #D9C8B8",
              color: "#4B3030",
              textDecoration: "none",
              backgroundColor: "#fff",
              transition: "background 0.15s",
            }}
          >
            <Phone size={15} />
          </a>
        </div>

        {/* Order / Coming soon button */}
        {branch.status === "open" ? (
          <button
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "999px",
              border: "1.5px solid #820015",
              backgroundColor: "#fff",
              color: "#820015",
              fontWeight: 600,
              fontSize: "0.875rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              transition: "opacity 0.15s",
            }}
          >
            {t.orderNow} →
          </button>
        ) : (
          <button
            disabled
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "999px",
              border: "1.5px solid #D9C8B8",
              backgroundColor: "#fff",
              color: "#9B8080",
              fontWeight: 600,
              fontSize: "0.875rem",
              cursor: "not-allowed",
            }}
          >
            {t.comingSoon}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Mobile Carousel Card ─────────────────────────────────────────────────────
function MobileCarouselCard({ branch, t }: { branch: Branch; t: ReturnType<typeof LANG[Locale]["storePage"]> }) {
  return (
    <div
      style={{
        flex: "0 0 82vw",
        maxWidth: "320px",
        borderRadius: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
        overflow: "hidden",
        scrollSnapAlign: "center",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", width: "100%", height: "200px", overflow: "hidden" }}>
        <img
          src={branch.img}
          alt={branch.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", top: "12px", left: "12px" }}>
          <StatusBadge status={branch.status} t={t} />
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "16px 16px 20px" }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1C0A0A", margin: "0 0 8px" }}>
          {branch.name}
        </h3>
        <div className="flex items-start gap-1.5" style={{ marginBottom: "6px" }}>
          <MapPin size={14} style={{ color: "#8B1A1A", flexShrink: 0, marginTop: "2px" }} />
          <span style={{ fontSize: "0.85rem", color: "#5A3D3D", lineHeight: 1.4 }}>{branch.address}</span>
        </div>
        <div className="flex items-center gap-1.5" style={{ marginBottom: "16px" }}>
          <Clock size={14} style={{ color: "#8B1A1A", flexShrink: 0 }} />
          <span style={{ fontSize: "0.85rem", color: "#1C0A0A", fontWeight: 500 }}>{branch.hours}</span>
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "10px" }}>
          {branch.status === "open" ? (
            <button
              style={{
                flex: 1,
                padding: "11px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#8B1A1A",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              {t.detail ?? "Chi tiết"}
            </button>
          ) : (
            <button
              disabled
              style={{
                flex: 1,
                padding: "11px",
                borderRadius: "999px",
                border: "1.5px solid #D9C8B8",
                backgroundColor: "#fff",
                color: "#9B8080",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "not-allowed",
              }}
            >
              {t.comingSoon}
            </button>
          )}
          <a
            href={branch.mapSrc}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "11px",
              borderRadius: "999px",
              border: "1.5px solid #D9C8B8",
              color: "#4B3030",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            <MapPin size={13} />
            {t.getDirection ?? "Chỉ đường"}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Carousel ──────────────────────────────────────────────────────────
function MobileCarousel({ branches, t }: { branches: Branch[]; t: ReturnType<typeof LANG[Locale]["storePage"]> }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / branches.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(idx, 0), branches.length - 1));
  };

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Scrollable track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          gap: "14px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          paddingLeft: "9vw",
          paddingRight: "9vw",
          paddingBottom: "8px",
        }}
        // Hide scrollbar in webkit
        className="[&::-webkit-scrollbar]:hidden"
      >
        {branches.map((branch) => (
          <MobileCarouselCard key={branch.id} branch={branch} t={t} />
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", justifyContent: "center", gap: "7px", marginTop: "14px" }}>
        {branches.map((_, i) => (
          <span
            key={i}
            style={{
              width: i === activeIndex ? "22px" : "8px",
              height: "8px",
              borderRadius: "999px",
              backgroundColor: i === activeIndex ? "#8B1A1A" : "#D9C8B8",
              transition: "all 0.25s ease",
              display: "inline-block",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function CuaHangPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = use(params);
  const t = LANG[lang].storePage;
  const router = useRouter();
  const pathname = usePathname();

  const [query, setQuery]           = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "open" | "coming">("all");

  const handleLangChange = (newLang: Locale) => {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  const branches = t.branches as Branch[];

  // Featured = first branch; rest = others
  const featured = branches[0];
  const others   = branches.slice(1);

  // Whether any filter/search is active
  const isFiltering = query !== "" || statusFilter !== "all";

  // Filtered across ALL branches (mobile carousel + desktop search results)
  const filteredAll = useMemo(() => {
    return branches.filter((b) => {
      const matchQuery  = query === "" ||
        b.name.toLowerCase().includes(query.toLowerCase()) ||
        b.address.toLowerCase().includes(query.toLowerCase());
      const matchStatus = statusFilter === "all" || b.status === statusFilter;
      return matchQuery && matchStatus;
    });
  }, [branches, query, statusFilter]);

  // Desktop "others" list when not filtering (excludes featured)
  const filteredOthers = useMemo(() => {
    return others.filter((b) => {
      const matchQuery  = query === "" ||
        b.name.toLowerCase().includes(query.toLowerCase()) ||
        b.address.toLowerCase().includes(query.toLowerCase());
      const matchStatus = statusFilter === "all" || b.status === statusFilter;
      return matchQuery && matchStatus;
    });
  }, [others, query, statusFilter]);

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} onLangChange={handleLangChange} variant="light" />

      {/* ── HERO ── */}

      {/* ── DESKTOP HERO (md and up): full-bleed background image ── */}
      <section
        className="relative w-full overflow-hidden hidden md:flex mt-20"
        style={{ height: "60vh", minHeight: "480px" }}
      >
        {/* Background image – cover, no dark overlay to stay bright like Figma */}
        <img
          src={t.heroBanner}
          alt={t.title}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Very light scrim only at center to keep text readable without darkening image */}

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4"
          style={{ gap: "16px" }}
        >
          {/* Badge – white pill with subtle glass */}
          <span
            className="inline-flex items-center gap-2 text-xl font-normal px-5 py-2 rounded-full"
            style={{
              color: "#fff",
              border: "1.5px solid rgba(255,255,255,0.55)",
              textShadow: "0 1px 4px rgba(0,0,0,0.25)",
            }}
          >
            <MapPin size={14} />
            {t.badgeLabel}
          </span>

          {/* Title – large, white, weight 400 */}
          <h1
            style={{
              fontWeight: 400,
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              color: "#ffffff",
              textShadow: "0 2px 12px rgba(0,0,0,0.30)",
              margin: 0,
            }}
          >
            {t.title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "rgba(255,255,255,0.90)",
              fontSize: "1.5rem",
              textShadow: "0 1px 6px rgba(0,0,0,0.25)",
              margin: 0,
            }}
          >
            {t.subtitle}
          </p>

          {/* ── Search bar – matches Figma: rounded-full large pill ── */}
          <div
            style={{
                marginTop: "8px",
                width: "100%",
                maxWidth: "1024px",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0 6px 32px rgba(0,0,0,0.18)",
                display: "flex",
                alignItems: "center",
                padding: "20px",
                gap: "10px",
            }}
            >
            {/* Search input con – có border riêng */}
            <div
                style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                border: "1.5px solid #746D673B",
                borderRadius: "999px",
                padding: "12px",
                backgroundColor: "#fff",
                minWidth: 0,
                }}
            >
                <Search size={20} style={{ color: "#9B8080", flexShrink: 0 }} />
                <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                style={{
                    flex: 1,
                    fontSize: "1.1rem",
                    outline: "none",
                    border: "none",
                    background: "transparent",
                    color: "#1C0A0A",
                    minWidth: 0,
                }}
                />
            </div>

            {/* "Đang mở" pill */}
            <button
                onClick={() => setStatusFilter(statusFilter === "open" ? "all" : "open")}
                style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "1rem",
                padding: "12px 20px",
                borderRadius: "999px",
                border: "1.5px solid #746D673B",
                color: "#4B3030",
                cursor: "pointer",
                flexShrink: 0,
                transition: "all 0.15s",
                whiteSpace: "nowrap",
                }}
            >
                <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#10B981", display: "inline-block" }} />
                {t.filterOpen}
            </button>

            {/* "Sắp mở" pill */}
            <button
                onClick={() => setStatusFilter(statusFilter === "coming" ? "all" : "coming")}
                style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "1rem",
                padding: "12px 20px",
                borderRadius: "999px",
                border: "1.5px solid #746D673B",
                color: "#4B3030",
                cursor: "pointer",
                flexShrink: 0,
                transition: "all 0.15s",
                whiteSpace: "nowrap",
                }}
            >
                <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#3B82F6", display: "inline-block" }} />
                {t.filterComing}
            </button>

            {/* City pill */}
            <span
                style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "1rem",
                borderRadius: "999px",
                border: "1.5px solid #746D673B",
                color: "#4B3030",
                padding: "12px 20px",
                flexShrink: 0,
                whiteSpace: "nowrap",
                cursor: "pointer",
                }}
            >
                <MapPin size={18} style={{ color: "#6B1111" }} />
                {t.filterCity}
            </span>
            </div>
        </div>
      </section>

      {/* ── MOBILE HERO (below md): no background image, clean layout ── */}
      <section className="flex flex-col md:hidden px-4 pt-6 pb-4 gap-4 mt-15">
        {/* Badge */}
        <div className="flex justify-center">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full"
            style={{ color: "#8B1A1A" }}
          >
            <MapPin size={13} />
            {t.badgeLabel}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-3xl text-center tracking-tight"
          style={{ color: "#1C0A0A", fontWeight: 700 }}
        >
          {t.title}
        </h1>

        {/* Subtitle */}
        <p className="text-center text-sm" style={{ color: "#5A3D3D" }}>
          {t.subtitle}
        </p>

        {/* Search input */}
        <div
          className="flex items-center gap-2 rounded-full px-4 py-3"
          style={{ backgroundColor: "#fff", border: "1px solid #E8DDD0", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
        >
          <Search size={16} style={{ color: "#9B8080" }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="flex-1 text-sm outline-none bg-transparent"
            style={{ color: "#1C0A0A" }}
          />
        </div>

        {/* Filter row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {/* Nearby button */}
          <button
            className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "#6B1111" }}
          >
            <MapPin size={12} />
            {lang === "vi" ? "Gần bạn" : "Nearby"}
          </button>

          {/* Open filter */}
          <button
            onClick={() => setStatusFilter(statusFilter === "open" ? "all" : "open")}
            className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all"
            style={
              statusFilter === "open"
                ? { backgroundColor: "#6B1111", color: "#fff", borderColor: "#6B1111" }
                : { backgroundColor: "#fff", color: "#4B3030", borderColor: "#746D673B" }
            }
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#10B981" }} />
            {t.filterOpen}
          </button>

          {/* Coming filter */}
          <button
            onClick={() => setStatusFilter(statusFilter === "coming" ? "all" : "coming")}
            className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all"
            style={
              statusFilter === "coming"
                ? { backgroundColor: "#6B1111", color: "#fff", borderColor: "#6B1111" }
                : { backgroundColor: "#fff", color: "#4B3030", borderColor: "#746D673B" }
            }
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#EF4444" }} />
            {t.filterComing}
          </button>

          {/* City tag */}
          <button
            className="flex-shrink-0 flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-full border"
            style={{ color: "#4B3030", borderColor: "#746D673B", backgroundColor: "#fff" }}
          >
            <MapPin size={11} />
            {t.filterCity}
          </button>
        </div>
      </section>

      {/* ── MOBILE: Carousel – respects active filters ── */}
      {filteredAll.length > 0 ? (
        <section className="md:hidden pt-4 pb-8">
          <MobileCarousel branches={filteredAll} t={t} />
        </section>
      ) : (
        <section className="md:hidden px-4 pb-8 pt-4 text-center">
          <p className="text-sm" style={{ color: "#9B8080" }}>
            {lang === "vi" ? "Không tìm thấy chi nhánh phù hợp." : "No branches found."}
          </p>
        </section>
      )}

      {/* ── DESKTOP ── */}
      {!isFiltering ? (
        <>
          {/* Default: FeaturedCard + others list */}
          <section className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
            <FeaturedCard branch={featured} t={t} />
          </section>

          {filteredOthers.length > 0 && (
            <section className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
              <h2 className="text-xl font-extrabold mb-6" style={{ color: "#1C0A0A" }}>
                {t.otherBranches}
              </h2>
              <div className="flex flex-col gap-4">
                {filteredOthers.map((branch) => (
                  <BranchRow key={branch.id} branch={branch} t={t} />
                ))}
              </div>
            </section>
          )}
        </>
      ) : filteredAll.length > 0 ? (
        /* Filtering active: show all matching as BranchRow, no FeaturedCard */
        <section className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <div className="flex flex-col gap-4">
            {filteredAll.map((branch) => (
              <BranchRow key={branch.id} branch={branch} t={t} />
            ))}
          </div>
        </section>
      ) : (
        /* Filtering active, no results */
        <section className="hidden md:block max-w-5xl mx-auto px-4 pb-16 pt-8 text-center">
          <p className="text-base" style={{ color: "#9B8080" }}>
            {lang === "vi" ? "Không tìm thấy chi nhánh phù hợp." : "No branches found."}
          </p>
        </section>
      )}

      <Footer lang={lang} />
    </div>
  );
}