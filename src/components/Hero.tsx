"use client";
import { ArrowRight, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { LANG, Locale } from "@/lib/lang";

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.527 5.845L.057 23.885l6.188-1.448A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.877 9.877 0 01-5.031-1.375l-.361-.214-3.741.981.999-3.648-.235-.374A9.861 9.861 0 012.106 12C2.106 6.533 6.533 2.106 12 2.106S21.894 6.533 21.894 12 17.467 21.894 12 21.894z"/>
  </svg>
);

export default function Hero({ lang }: { lang: Locale }) {
  const t = LANG[lang].hero;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Full-screen banner image */}
        <img
          src="/images/banner.jpeg"
          alt="Banner Vị Nhà"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black/45" /> */}

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center text-center px-4 z-10 pt-[150px]">
          <h1 className="text-3xl sm:text-3xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
            Hương vị nhà giữa phố thị
          </h1>
          <p className="text-3xl text-white/80 mb-10 drop-shadow">
            Bữa trưa chất lượng
          </p>
          <button
            className="
              inline-flex items-center gap-2.5
              font-bold text-[15px] px-10 py-4 rounded-full
              text-white transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-orange-500/50
            "
            style={{
              background: "linear-gradient(135deg, #ff6b2b 0%, #c0152a 100%)",
            }}
          >
            Khám phá thực đơn
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* ── FLOATING ICONS (desktop, visible before scroll) ── */}
      <div
        className={`
          fixed right-5 bottom-6 z-50 flex flex-col gap-3
          transition-all duration-300
          ${scrolled ? "opacity-0 pointer-events-none translate-x-4" : "opacity-100"}
          hidden sm:flex
        `}
      >
        {[
          { label: "Phone", icon: <Phone size={20} className="text-white" />, bg: "bg-orange-600", href: "tel:+84000000000" },
          { label: "Zalo",  icon: <img src="/zalo-logo.png" alt="Zalo" className="w-5 h-5" />, bg: "bg-cyan-600", href: "https://zalo.me" },
          { label: "WhatsApp", icon: <WhatsappIcon />, bg: "bg-green-600", href: "https://wa.me" },
        ].map(({ label, icon, bg, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* ── STICKY FOOTER (mobile always / desktop on scroll) ── */}
      <div
        className={`
          fixed bottom-0 inset-x-0 z-50
          bg-black/70 backdrop-blur-md
          px-6 py-3 flex items-center justify-between gap-3
          transition-all duration-300
          ${scrolled ? "translate-y-0 opacity-100" : "sm:translate-y-full sm:opacity-0"}
        `}
      >
        {/* Icons */}
        <div className="flex items-center gap-4">
          {[
            { label: "Phone", icon: <Phone size={20} className="text-white" />, href: "tel:+84000000000" },
            { label: "Zalo",  icon: <img src="/zalo-logo.png" alt="Zalo" className="w-5 h-5" />, href: "https://zalo.me" },
            { label: "WhatsApp", icon: <WhatsappIcon />, href: "https://wa.me" },
          ].map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <button
          className="
            flex-1 max-w-[200px] flex items-center justify-center gap-2
            font-bold text-sm text-white rounded-full py-3
            hover:brightness-110 transition-all
          "
          style={{
            background: "linear-gradient(135deg, #ff6b2b 0%, #e8321a 100%)",
          }}
        >
          Đặt món ngay
          <ArrowRight size={15} />
        </button>
      </div>
    </>
  );
}